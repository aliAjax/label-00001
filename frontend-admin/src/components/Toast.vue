<template>
  <Teleport to="body">
    <div class="el-message-container">
      <TransitionGroup name="el-message-fade">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['el-message', `el-message--${toast.type}`]"
        >
          <span class="el-message__icon">
            <svg v-if="toast.type === 'success'" viewBox="0 0 1024 1024">
              <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.336-54.336L456.192 600.384z" fill="currentColor"/>
            </svg>
            <svg v-else-if="toast.type === 'error'" viewBox="0 0 1024 1024">
              <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z" fill="currentColor"/>
            </svg>
            <svg v-else-if="toast.type === 'warning'" viewBox="0 0 1024 1024">
              <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" fill="currentColor"/>
            </svg>
            <svg v-else viewBox="0 0 1024 1024">
              <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm67.2 275.2c33.28 0 60.288-27.136 60.288-60.544 0-33.28-27.008-60.288-60.288-60.288h-134.4c-33.344 0-60.288 27.008-60.288 60.288 0 33.408 26.944 60.544 60.288 60.544H480v355.968h-60.8c-33.344 0-60.288 27.008-60.288 60.288 0 33.408 26.944 60.544 60.288 60.544h185.6c33.28 0 60.288-27.136 60.288-60.544 0-33.28-27.008-60.288-60.288-60.288H544V339.2h35.2z" fill="currentColor"/>
            </svg>
          </span>
          <p class="el-message__content">{{ toast.message }}</p>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { useToast } from '../composables/useToast'

const { toasts } = useToast()
</script>

<style scoped>
.el-message-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  pointer-events: none;
}

.el-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: var(--border-radius-base);
  background-color: var(--color-bg-overlay);
  box-shadow: var(--shadow-light);
  pointer-events: auto;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid;
}

.el-message--success {
  background-color: var(--color-success-light);
  border-color: #b3e19d;
}

.el-message--success .el-message__icon {
  color: var(--color-success);
}

.el-message--error {
  background-color: var(--color-danger-light);
  border-color: #fab6b6;
}

.el-message--error .el-message__icon {
  color: var(--color-danger);
}

.el-message--warning {
  background-color: var(--color-warning-light);
  border-color: #f3d19e;
}

.el-message--warning .el-message__icon {
  color: var(--color-warning);
}

.el-message--info {
  background-color: var(--color-info-light);
  border-color: #c8c9cc;
}

.el-message--info .el-message__icon {
  color: var(--color-info);
}

.el-message__icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.el-message__icon svg {
  width: 100%;
  height: 100%;
}

.el-message__content {
  margin: 0;
  font-size: var(--font-size-base);
  color: var(--color-text-regular);
  line-height: 1.5;
}

/* 动画 */
.el-message-fade-enter-active {
  animation: el-message-fade-in var(--transition-normal);
}

.el-message-fade-leave-active {
  animation: el-message-fade-out var(--transition-fast);
}

@keyframes el-message-fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes el-message-fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
