<template>
  <div class="el-form-item" :class="{ 'is-error': error }">
    <label v-if="label" class="el-form-item__label">{{ label }}</label>
    <div class="el-input" :class="{ 'is-focus': isFocused, 'is-disabled': disabled, 'el-input--prefix': prefixIcon }">
      <span v-if="prefixIcon" class="el-input__prefix">
        <span class="el-input__prefix-inner">{{ prefixIcon }}</span>
      </span>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="el-input__inner"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @keyup.enter="$emit('enter')"
      />
      <span v-if="suffixIcon" class="el-input__suffix">
        <span class="el-input__suffix-inner">{{ suffixIcon }}</span>
      </span>
    </div>
    <Transition name="el-zoom-in-top">
      <div v-if="error" class="el-form-item__error">{{ error }}</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue', 'enter'])

const isFocused = ref(false)
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0;
}

.el-form-item__label {
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 0 0 auto;
  font-size: var(--font-size-base);
  color: var(--color-text-regular);
  height: 32px;
  line-height: 32px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  font-weight: 500;
}

.el-input {
  position: relative;
  display: inline-flex;
  width: 100%;
  line-height: 32px;
  font-size: var(--font-size-base);
  vertical-align: middle;
}

.el-input__inner {
  width: 100%;
  height: 32px;
  padding: 0 11px;
  background-color: #fff;
  background-image: none;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  color: var(--color-text-regular);
  display: inline-flex;
  font-size: inherit;
  line-height: 32px;
  outline: none;
  transition: border-color var(--transition-fast);
  -webkit-appearance: none;
}

.el-input__inner::placeholder {
  color: var(--color-text-placeholder);
}

/* 移除浏览器自动填充背景色 */
.el-input__inner:-webkit-autofill,
.el-input__inner:-webkit-autofill:hover,
.el-input__inner:-webkit-autofill:focus,
.el-input__inner:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
  -webkit-text-fill-color: var(--color-text-regular) !important;
  transition: background-color 5000s ease-in-out 0s;
}

.el-input__inner:hover {
  border-color: var(--color-text-placeholder);
}

.el-input.is-focus .el-input__inner {
  border-color: var(--color-primary);
  outline: none;
}

.el-input.is-disabled .el-input__inner {
  background-color: var(--color-fill-light);
  border-color: var(--color-border-light);
  color: var(--color-text-placeholder);
  cursor: not-allowed;
}

.el-form-item.is-error .el-input__inner {
  border-color: var(--color-danger);
}

.el-form-item.is-error .el-input.is-focus .el-input__inner {
  border-color: var(--color-danger);
}

/* 前缀图标 */
.el-input--prefix .el-input__inner {
  padding-left: 30px;
}

.el-input__prefix {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: var(--color-text-placeholder);
  pointer-events: none;
}

.el-input__prefix-inner {
  display: flex;
  align-items: center;
  font-size: 16px;
}

/* 后缀图标 */
.el-input__suffix {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: var(--color-text-placeholder);
}

.el-input__suffix-inner {
  display: flex;
  align-items: center;
}

/* 错误信息 */
.el-form-item__error {
  color: var(--color-danger);
  font-size: var(--font-size-extra-small);
  line-height: 1;
  padding-top: 4px;
  position: relative;
  top: 0;
  left: 0;
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
</style>
