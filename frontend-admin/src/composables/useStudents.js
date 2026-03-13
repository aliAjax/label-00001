import { ref, computed } from 'vue'

const STORAGE_KEY = 'students_data'
const COUNTER_KEY = 'student_counter'

const defaultStudents = [
  { id: 'STU001', name: '张三', major: '计算机科学与技术', grade: '大一' },
  { id: 'STU002', name: '李四', major: '软件工程', grade: '大二' },
  { id: 'STU003', name: '王五', major: '信息安全', grade: '大三' }
]

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const counter = localStorage.getItem(COUNTER_KEY)
    return {
      students: stored ? JSON.parse(stored) : defaultStudents,
      counter: counter ? parseInt(counter) : 3
    }
  } catch (e) {
    console.error('Failed to load from localStorage:', e)
    return { students: defaultStudents, counter: 3 }
  }
}

const saveToStorage = (studentsData, counter) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData))
    localStorage.setItem(COUNTER_KEY, String(counter))
  } catch (e) {
    console.error('Failed to save to localStorage:', e)
  }
}

const initialData = loadFromStorage()
const students = ref(initialData.students)
let studentCounter = initialData.counter

export function useStudents() {
  const generateId = () => {
    studentCounter++
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
    saveToStorage(students.value, studentCounter)
    return newStudent
  }

  const updateStudent = (id, data) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value[index] = { ...students.value[index], ...data }
      saveToStorage(students.value, studentCounter)
      return students.value[index]
    }
    return null
  }

  const deleteStudent = (id) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value.splice(index, 1)
      saveToStorage(students.value, studentCounter)
      return true
    }
    return false
  }

  const studentCount = computed(() => students.value.length)

  return {
    students,
    studentCount,
    addStudent,
    updateStudent,
    deleteStudent
  }
}
