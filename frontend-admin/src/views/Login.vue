<template>
  <div class="login-page">
    <div class="login-container">
      <!-- 左侧装饰区 -->
      <div class="login-banner">
        <div class="banner-bg"></div>
        <div class="banner-content">
          <div class="banner-icon">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/>
              <path d="M512 304c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96zm0 128c-167.7 0-312.4 99.5-378.4 242.8 35.3 39.7 77.8 72.5 125.4 96.4C302.4 940.8 402.5 884 512 884s209.6 56.8 253 143.2c47.6-23.9 90.1-56.7 125.4-96.4C824.4 787.5 679.7 688 512 688z"/>
            </svg>
          </div>
          <h1 class="banner-title">学生信息管理系统</h1>
          <p class="banner-subtitle">Student Information Management System</p>
          <div class="banner-features">
            <div class="feature-item">
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.336-54.336L456.192 600.384z"/>
              </svg>
              <span>学生信息管理</span>
            </div>
            <div class="feature-item">
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.336-54.336L456.192 600.384z"/>
              </svg>
              <span>数据统计分析</span>
            </div>
            <div class="feature-item">
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.336-54.336L456.192 600.384z"/>
              </svg>
              <span>安全可靠</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="login-form-wrapper">
        <div class="login-card">
          <div class="login-header">
            <h2 class="form-title">欢迎登录</h2>
            <p class="form-subtitle">请输入您的账号信息</p>
          </div>

          <form class="login-form" @submit.prevent="handleLogin">
            <div class="form-item">
              <label class="form-label">用户名</label>
              <div class="input-wrapper" :class="{ 'is-focus': usernameFocus, 'is-error': errors.username }">
                <svg class="input-icon" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/>
                  <path d="M512 304c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"/>
                </svg>
                <input
                  v-model="form.username"
                  type="text"
                  placeholder="请输入用户名"
                  @focus="usernameFocus = true"
                  @blur="usernameFocus = false"
                  @keyup.enter="handleLogin"
                />
              </div>
              <Transition name="el-zoom-in-top">
                <span v-if="errors.username" class="error-text">{{ errors.username }}</span>
              </Transition>
            </div>

            <div class="form-item">
              <label class="form-label">密码</label>
              <div class="input-wrapper" :class="{ 'is-focus': passwordFocus, 'is-error': errors.password }">
                <svg class="input-icon" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304z"/>
                  <path d="M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"/>
                </svg>
                <input
                  v-model="form.password"
                  type="password"
                  placeholder="请输入密码"
                  @focus="passwordFocus = true"
                  @blur="passwordFocus = false"
                  @keyup.enter="handleLogin"
                />
              </div>
              <Transition name="el-zoom-in-top">
                <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
              </Transition>
            </div>

            <button type="submit" class="login-btn" :class="{ 'is-loading': isLoading }" :disabled="isLoading">
              <svg v-if="isLoading" class="loading-icon" viewBox="0 0 1024 1024">
                <path d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zM288 512a32 32 0 0 1-32 32H64a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32z" fill="currentColor"/>
              </svg>
              {{ isLoading ? '登录中...' : '登 录' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { useToast } from '../composables/useToast'

const router = useRouter()
const { login, isLoading } = useAuth()
const toast = useToast()

const usernameFocus = ref(false)
const passwordFocus = ref(false)

const form = reactive({
  username: '',
  password: ''
})

const errors = reactive({
  username: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.username = ''
  errors.password = ''

  if (!form.username.trim()) {
    errors.username = '请输入用户名'
    isValid = false
  }

  if (!form.password.trim()) {
    errors.password = '请输入密码'
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return

  const result = await login(form.username, form.password)

  if (result.success) {
    toast.success(result.message)
    router.push('/home')
  } else {
    toast.error(result.message)
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-page);
  padding: 24px;
}

.login-container {
  display: flex;
  width: 100%;
  max-width: 960px;
  min-height: 560px;
  background: var(--color-bg-container);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-light);
  overflow: hidden;
}

/* 左侧装饰区 */
.login-banner {
  flex: 1;
  position: relative;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.banner-content {
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 1;
}

.banner-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-icon svg {
  width: 48px;
  height: 48px;
}

.banner-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;
  letter-spacing: 2px;
}

.banner-subtitle {
  font-size: 13px;
  opacity: 0.85;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.banner-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  opacity: 0.9;
}

.feature-item svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* 右侧表单区 */
.login-form-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: var(--color-bg-container);
}

.login-card {
  width: 100%;
  max-width: 340px;
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.form-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-regular);
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-base);
  padding: 0 12px;
  transition: all var(--transition-fast);
}

.input-wrapper:hover {
  border-color: var(--color-text-placeholder);
}

.input-wrapper.is-focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-light-8);
}

.input-wrapper.is-error {
  border-color: var(--color-danger);
}

.input-wrapper.is-error.is-focus {
  box-shadow: 0 0 0 2px var(--color-danger-light);
}

.input-icon {
  width: 18px;
  height: 18px;
  color: var(--color-text-placeholder);
  flex-shrink: 0;
}

.input-wrapper.is-focus .input-icon {
  color: var(--color-primary);
}

.input-wrapper input {
  flex: 1;
  height: 42px;
  padding: 0 12px;
  border: none;
  background: transparent;
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  outline: none;
}

.input-wrapper input::placeholder {
  color: var(--color-text-placeholder);
}

/* 移除浏览器自动填充背景色 */
.input-wrapper input:-webkit-autofill,
.input-wrapper input:-webkit-autofill:hover,
.input-wrapper input:-webkit-autofill:focus,
.input-wrapper input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
  -webkit-text-fill-color: var(--color-text-primary) !important;
  transition: background-color 5000s ease-in-out 0s;
}

.error-text {
  font-size: var(--font-size-extra-small);
  color: var(--color-danger);
}

.login-btn {
  width: 100%;
  height: 44px;
  margin-top: 8px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border: none;
  border-radius: var(--border-radius-base);
  color: #fff;
  font-size: var(--font-size-medium);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.login-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #66b1ff 0%, #409eff 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.4);
}

.login-btn:active:not(:disabled) {
  transform: translateY(0);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-icon {
  width: 18px;
  height: 18px;
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 动画 */
.el-zoom-in-top-enter-active,
.el-zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
  transform-origin: center top;
}

.el-zoom-in-top-enter-from,
.el-zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

/* 响应式 */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    max-width: 420px;
  }

  .login-banner {
    padding: 32px;
    min-height: 240px;
  }

  .banner-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }

  .banner-icon svg {
    width: 36px;
    height: 36px;
  }

  .banner-title {
    font-size: 22px;
  }

  .banner-features {
    display: none;
  }

  .login-form-wrapper {
    padding: 32px;
  }
}
</style>
