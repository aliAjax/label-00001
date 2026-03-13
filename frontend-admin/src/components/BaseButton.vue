<template>
  <button
    :class="[
      'el-button',
      `el-button--${type}`,
      size !== 'default' ? `el-button--${size}` : '',
      { 'is-loading': loading, 'is-disabled': disabled, 'is-plain': plain }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="el-button__loading">
      <svg class="loading-icon" viewBox="0 0 1024 1024">
        <path d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zM288 512a32 32 0 0 1-32 32H64a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0l135.808 135.808a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.2a32 32 0 0 1 0 45.248L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.872a32 32 0 0 1 45.248 0zm-452.544 452.544a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z" fill="currentColor"/>
      </svg>
    </span>
    <span class="el-button__content">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['primary', 'success', 'warning', 'danger', 'info', 'default', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (e) => {
  if (!props.loading && !props.disabled) {
    emit('click', e)
  }
}
</script>

<style scoped>
.el-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: all var(--transition-fast);
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: var(--border-radius-base);
}

/* 尺寸 */
.el-button {
  height: 32px;
  padding: 8px 15px;
  font-size: var(--font-size-base);
}

.el-button--large {
  height: 40px;
  padding: 12px 20px;
  font-size: var(--font-size-base);
  border-radius: var(--border-radius-base);
}

.el-button--small {
  height: 24px;
  padding: 5px 11px;
  font-size: var(--font-size-extra-small);
  border-radius: calc(var(--border-radius-base) - 1px);
}

/* 默认按钮 */
.el-button--default {
  background-color: var(--color-bg-container);
  border-color: var(--color-border);
  color: var(--color-text-regular);
}

.el-button--default:hover:not(.is-disabled):not(.is-loading) {
  color: var(--color-primary);
  border-color: var(--color-primary-light-7);
  background-color: var(--color-primary-light-9);
}

.el-button--default:active:not(.is-disabled):not(.is-loading) {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* 主要按钮 */
.el-button--primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.el-button--primary:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-primary-light-3);
  border-color: var(--color-primary-light-3);
}

.el-button--primary:active:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-primary-dark-2);
  border-color: var(--color-primary-dark-2);
}

.el-button--primary.is-plain {
  background-color: var(--color-primary-light-9);
  border-color: var(--color-primary-light-5);
  color: var(--color-primary);
}

.el-button--primary.is-plain:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

/* 成功按钮 */
.el-button--success {
  background-color: var(--color-success);
  border-color: var(--color-success);
  color: #fff;
}

.el-button--success:hover:not(.is-disabled):not(.is-loading) {
  background-color: #85ce61;
  border-color: #85ce61;
}

.el-button--success.is-plain {
  background-color: var(--color-success-light);
  border-color: #b3e19d;
  color: var(--color-success);
}

.el-button--success.is-plain:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-success);
  border-color: var(--color-success);
  color: #fff;
}

/* 危险按钮 */
.el-button--danger {
  background-color: var(--color-danger);
  border-color: var(--color-danger);
  color: #fff;
}

.el-button--danger:hover:not(.is-disabled):not(.is-loading) {
  background-color: #f89898;
  border-color: #f89898;
}

.el-button--danger.is-plain {
  background-color: var(--color-danger-light);
  border-color: #fab6b6;
  color: var(--color-danger);
}

.el-button--danger.is-plain:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-danger);
  border-color: var(--color-danger);
  color: #fff;
}

/* 警告按钮 */
.el-button--warning {
  background-color: var(--color-warning);
  border-color: var(--color-warning);
  color: #fff;
}

.el-button--warning:hover:not(.is-disabled):not(.is-loading) {
  background-color: #ebb563;
  border-color: #ebb563;
}

.el-button--warning.is-plain {
  background-color: var(--color-warning-light);
  border-color: #f3d19e;
  color: var(--color-warning);
}

.el-button--warning.is-plain:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-warning);
  border-color: var(--color-warning);
  color: #fff;
}

/* 信息按钮 */
.el-button--info {
  background-color: var(--color-info);
  border-color: var(--color-info);
  color: #fff;
}

.el-button--info:hover:not(.is-disabled):not(.is-loading) {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
}

.el-button--info.is-plain {
  background-color: var(--color-info-light);
  border-color: #c8c9cc;
  color: var(--color-info);
}

.el-button--info.is-plain:hover:not(.is-disabled):not(.is-loading) {
  background-color: var(--color-info);
  border-color: var(--color-info);
  color: #fff;
}

/* 文字按钮 */
.el-button--text {
  background-color: transparent;
  border-color: transparent;
  color: var(--color-primary);
  padding-left: 0;
  padding-right: 0;
}

.el-button--text:hover:not(.is-disabled):not(.is-loading) {
  color: var(--color-primary-light-3);
  background-color: transparent;
}

/* 禁用状态 */
.el-button.is-disabled,
.el-button.is-loading {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 加载图标 */
.el-button__loading {
  display: inline-flex;
  align-items: center;
}

.loading-icon {
  width: 14px;
  height: 14px;
  animation: rotating 2s linear infinite;
}

.el-button--small .loading-icon {
  width: 12px;
  height: 12px;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.el-button__content {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
