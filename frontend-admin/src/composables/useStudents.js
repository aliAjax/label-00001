import { ref, computed } from 'vue'

const students = ref([
  { id: 'STU001', name: '张三', major: '计算机科学与技术', grade: '大一' },
  { id: 'STU002', name: '李四', major: '软件工程', grade: '大二' },
  { id: 'STU003', name: '王五', major: '信息安全', grade: '大三' }
])

let studentCounter = 3

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
    return newStudent
  }

  const updateStudent = (id, data) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value[index] = { ...students.value[index], ...data }
      return students.value[index]
    }
    return null
  }

  const deleteStudent = (id) => {
    const index = students.value.findIndex(s => s.id === id)
    if (index > -1) {
      students.value.splice(index, 1)
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
