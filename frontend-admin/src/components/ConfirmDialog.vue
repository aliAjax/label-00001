<template>
  <Teleport to="body">
    <Transition name="el-message-box-fade">
      <div v-if="visible" class="el-overlay el-overlay-message-box" @click.self="handleCancel">
        <div class="el-message-box">
          <div class="el-message-box__header">
            <div class="el-message-box__title">
              <span class="el-message-box__status" :class="`el-message-box__status--${type}`">
                <svg v-if="type === 'warning'" viewBox="0 0 1024 1024">
                  <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z" fill="currentColor"/>
                </svg>
                <svg v-else-if="type === 'danger'" viewBox="0 0 1024 1024">
                  <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z" fill="currentColor"/>
                </svg>
                <svg v-else viewBox="0 0 1024 1024">
                  <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm67.2 275.2c33.28 0 60.288-27.136 60.288-60.544 0-33.28-27.008-60.288-60.288-60.288h-134.4c-33.344 0-60.288 27.008-60.288 60.288 0 33.408 26.944 60.544 60.288 60.544H480v355.968h-60.8c-33.344 0-60.288 27.008-60.288 60.288 0 33.408 26.944 60.544 60.288 60.544h185.6c33.28 0 60.288-27.136 60.288-60.544 0-33.28-27.008-60.288-60.288-60.288H544V339.2h35.2z" fill="currentColor"/>
                </svg>
              </span>
              <span>{{ title }}</span>
            </div>
            <button class="el-message-box__headerbtn" @click="handleCancel">
              <svg class="el-message-box__close" viewBox="0 0 1024 1024">
                <path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div class="el-message-box__content">
            <div class="el-message-box__message">
              <p>{{ message }}</p>
            </div>
          </div>
          <div class="el-message-box__btns">
            <button class="el-button el-button--default" @click="handleCancel">
              {{ cancelText }}
            </button>
            <button class="el-button" :class="`el-button--${type === 'danger' ? 'danger' : 'primary'}`" @click="handleConfirm">
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '提示'
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'warning',
    validator: (value) => ['info', 'warning', 'danger'].includes(value)
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  cancelText: {
    type: String,
    default: '取消'
  }
})

const emit = defineEmits(['update:visible', 'confirm', 'cancel'])

const handleConfirm = () => {
  emit('confirm')
  emit('update:visible', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:visible', false)
}
</script>

<style scoped>
.el-overlay-message-box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2001;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-message-box {
  display: inline-block;
  width: 420px;
  max-width: calc(100vw - 32px);
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: var(--color-bg-overlay);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border-lighter);
  font-size: var(--font-size-large);
  box-shadow: var(--shadow-light);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
}

.el-message-box__header {
  position: relative;
  padding: 15px 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-message-box__title {
  padding-left: 0;
  margin-bottom: 0;
  font-size: var(--font-size-large);
  line-height: 1;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.el-message-box__status {
  display: inline-flex;
  width: 24px;
  height: 24px;
}

.el-message-box__status svg {
  width: 100%;
  height: 100%;
}

.el-message-box__status--info {
  color: var(--color-primary);
}

.el-message-box__status--warning {
  color: var(--color-warning);
}

.el-message-box__status--danger {
  color: var(--color-danger);
}

.el-message-box__headerbtn {
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-base);
  transition: background-color var(--transition-fast);
}

.el-message-box__headerbtn:hover {
  background-color: var(--color-fill-light);
}

.el-message-box__close {
  width: 16px;
  height: 16px;
  color: var(--color-info);
  transition: color var(--transition-fast);
}

.el-message-box__headerbtn:hover .el-message-box__close {
  color: var(--color-primary);
}

.el-message-box__content {
  padding: 10px 15px;
  color: var(--color-text-regular);
  font-size: var(--font-size-base);
}

.el-message-box__message {
  margin: 0;
}

.el-message-box__message p {
  margin: 0;
  line-height: 24px;
}

.el-message-box__btns {
  padding: 5px 15px 0;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 按钮样式 */
.el-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 8px 15px;
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: var(--border-radius-base);
  transition: all var(--transition-fast);
  outline: none;
}

.el-button--default {
  background-color: var(--color-bg-container);
  border-color: var(--color-border);
  color: var(--color-text-regular);
}

.el-button--default:hover {
  color: var(--color-primary);
  border-color: var(--color-primary-light-7);
  background-color: var(--color-primary-light-9);
}

.el-button--primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.el-button--primary:hover {
  background-color: var(--color-primary-light-3);
  border-color: var(--color-primary-light-3);
}

.el-button--danger {
  background-color: var(--color-danger);
  border-color: var(--color-danger);
  color: #fff;
}

.el-button--danger:hover {
  background-color: #f89898;
  border-color: #f89898;
}

/* 动画 */
.el-message-box-fade-enter-active {
  animation: el-message-box-fade-in var(--transition-normal);
}

.el-message-box-fade-leave-active {
  animation: el-message-box-fade-out var(--transition-normal);
}

.el-message-box-fade-enter-active .el-message-box {
  animation: el-message-box-zoom-in var(--transition-normal);
}

.el-message-box-fade-leave-active .el-message-box {
  animation: el-message-box-zoom-out var(--transition-normal);
}

@keyframes el-message-box-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes el-message-box-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes el-message-box-zoom-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes el-message-box-zoom-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
