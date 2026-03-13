import { ref } from 'vue'
import { useRouter } from 'vue-router'

const VALID_USERNAME = 'admin'
const VALID_PASSWORD = '123456'

export function useAuth() {
  const router = useRouter()
  const isLoading = ref(false)

  const login = async (username, password) => {
    isLoading.value = true

    // 模拟网络请求延迟
    await new Promise(resolve => setTimeout(resolve, 800))

    isLoading.value = false

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      sessionStorage.setItem('isLoggedIn', 'true')
      sessionStorage.setItem('username', username)
      return { success: true, message: '登录成功' }
    }

    return { success: false, message: '用户名或密码错误' }
  }

  const logout = () => {
    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('username')
    router.push('/login')
  }

  const isLoggedIn = () => {
    return sessionStorage.getItem('isLoggedIn') === 'true'
  }

  const getUsername = () => {
    return sessionStorage.getItem('username') || ''
  }

  return {
    isLoading,
    login,
    logout,
    isLoggedIn,
    getUsername
  }
}
