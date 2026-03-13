<template>
  <Teleport to="body">
    <Transition name="el-dialog-fade">
      <div v-if="visible" class="el-overlay" @click.self="handleOverlayClick">
        <div class="el-dialog" :style="{ width: width }">
          <header class="el-dialog__header">
            <span class="el-dialog__title">{{ title }}</span>
            <button class="el-dialog__headerbtn" @click="handleClose">
              <svg class="el-dialog__close" viewBox="0 0 1024 1024">
                <path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z" fill="currentColor"/>
              </svg>
            </button>
          </header>
          <div class="el-dialog__body">
            <slot />
          </div>
          <footer v-if="$slots.footer" class="el-dialog__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '50%'
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:visible', 'close'])

const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    handleClose()
  }
}
</script>

<style scoped>
.el-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-dialog {
  position: relative;
  margin: 0 auto;
  background: var(--color-bg-overlay);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-dark);
  box-sizing: border-box;
  max-width: calc(100vw - 32px);
}

.el-dialog__header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border-lighter);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-dialog__title {
  font-size: var(--font-size-large);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 24px;
}

.el-dialog__headerbtn {
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-base);
  transition: background-color var(--transition-fast);
}

.el-dialog__headerbtn:hover {
  background-color: var(--color-fill-light);
}

.el-dialog__close {
  width: 16px;
  height: 16px;
  color: var(--color-info);
  transition: color var(--transition-fast);
}

.el-dialog__headerbtn:hover .el-dialog__close {
  color: var(--color-primary);
}

.el-dialog__body {
  padding: 20px;
  color: var(--color-text-regular);
  font-size: var(--font-size-base);
}

.el-dialog__footer {
  padding: 12px 20px;
  text-align: right;
  box-sizing: border-box;
  border-top: 1px solid var(--color-border-lighter);
  background-color: var(--color-fill-lighter);
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 动画 */
.el-dialog-fade-enter-active {
  animation: el-dialog-fade-in var(--transition-normal);
}

.el-dialog-fade-leave-active {
  animation: el-dialog-fade-out var(--transition-normal);
}

.el-dialog-fade-enter-active .el-dialog {
  animation: el-dialog-zoom-in var(--transition-normal);
}

.el-dialog-fade-leave-active .el-dialog {
  animation: el-dialog-zoom-out var(--transition-normal);
}

@keyframes el-dialog-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes el-dialog-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes el-dialog-zoom-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes el-dialog-zoom-out {
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
