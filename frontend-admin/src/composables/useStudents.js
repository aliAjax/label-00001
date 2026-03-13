import { ref, computed } from 'vue'

const STORAGE_KEY = 'students_data'
const COUNTER_KEY = 'student_counter'

const defaultStudents = [
  { id: 'STU001', name: '张三', major: '计算机科学与技术', grade: '大一' },
  { id: 'STU002', name: '李四', major: '软件工程', grade: '大二' },
  { id: 'STU003', name: '王五', major: '信息安全', grade: '大三' }
]

const loadStudents = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultStudents))
    return defaultStudents
  } catch {
    return defaultStudents
  }
}

const loadCounter = () => {
  try {
    const stored = localStorage.getItem(COUNTER_KEY)
    if (stored) {
      return parseInt(stored, 10)
    }
    localStorage.setItem(COUNTER_KEY, '3')
    return 3
  } catch {
    return 3
  }
}

const students = ref(loadStudents())
let studentCounter = loadCounter()

const saveStudents = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students.value))
  } catch (e) {
    console.error('Failed to save students:', e)
  }
}

const saveCounter = () => {
  try {
    localStorage.setItem(COUNTER_KEY, String(studentCounter))
  } catch (e) {
    console.error('Failed to save counter:', e)
  }
}

export function useStudents() {
  const generateId = () => {
    studentCounter++
    saveCounter()
    return `STU${String(studentCounter).padStart(3, '0')}`
  }

  const addStudent = (student) => {
    const newStudent = {
      id: generateId(),
      name: student.name,
      major: student.major,
      grade: student.grade
    }
    students.value.push(newStudent)
    saveStudents()
    return newStudent
  }

  const updateStudent = (id, data) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value[index] = { ...students.value[index], ...data }
      saveStudents()
      return students.value[index]
    }
    return null
  }

  const deleteStudent = (id) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value.splice(index, 1)
      saveStudents()
      return true
    }
    return false
  }

  const resetStudents = () => {
    students.value = [...defaultStudents]
    studentCounter = 3
    saveStudents()
    saveCounter()
  }

  const studentCount = computed(() => students.value.length)

  return {
    students,
    studentCount,
    addStudent,
    updateStudent,
    deleteStudent,
    resetStudents
  }
}
