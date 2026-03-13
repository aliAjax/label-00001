<template>
  <div class="el-form-item" :class="{ 'is-error': error }">
    <label v-if="label" class="el-form-item__label">{{ label }}</label>
    <div
      class="el-select"
      :class="{ 'is-focus': isOpen, 'is-disabled': disabled }"
      @click="toggleDropdown"
      v-click-outside="closeDropdown"
    >
      <div class="el-input el-input--suffix">
        <div class="el-input__wrapper">
          <input
            type="text"
            readonly
            :value="selectedLabel"
            :placeholder="placeholder"
            :disabled="disabled"
            class="el-input__inner"
          />
        </div>
        <span class="el-input__suffix">
          <span class="el-input__suffix-inner">
            <svg
              class="el-select__caret"
              :class="{ 'is-reverse': isOpen }"
              viewBox="0 0 1024 1024"
            >
              <path d="M488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z" fill="currentColor"/>
            </svg>
          </span>
        </span>
      </div>

      <Transition name="el-zoom-in-top">
        <div v-if="isOpen" class="el-select-dropdown">
          <div class="el-scrollbar">
            <div class="el-select-dropdown__wrap">
              <ul class="el-select-dropdown__list">
                <li
                  v-for="option in options"
                  :key="option.value"
                  class="el-select-dropdown__item"
                  :class="{ 'selected': option.value === modelValue, 'hover': hoveredValue === option.value }"
                  @click.stop="selectOption(option)"
                  @mouseenter="hoveredValue = option.value"
                  @mouseleave="hoveredValue = null"
                >
                  <span>{{ option.label }}</span>
                  <svg v-if="option.value === modelValue" class="el-select__check" viewBox="0 0 1024 1024">
                    <path d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z" fill="currentColor"/>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <Transition name="el-zoom-in-top">
      <div v-if="error" class="el-form-item__error">{{ error }}</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: '请选择'
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
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const hoveredValue = ref(null)

const selectedLabel = computed(() => {
  const option = props.options.find(opt => opt.value === props.modelValue)
  return option ? option.label : ''
})

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0;
}

.el-form-item__label {
  display: inline-flex;
  align-items: flex-start;
  font-size: var(--font-size-base);
  color: var(--color-text-regular);
  height: 32px;
  line-height: 32px;
  padding: 0 12px 0 0;
  font-weight: 500;
}

.el-select {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 32px;
  cursor: pointer;
}

.el-select.is-disabled {
  cursor: not-allowed;
}

.el-input__wrapper {
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.el-input--suffix {
  position: relative;
}

.el-input__inner {
  width: 100%;
  height: 32px;
  padding: 0 30px 0 11px;
  background-color: #fff;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-border);
  color: var(--color-text-regular);
  font-size: inherit;
  line-height: 32px;
  outline: none;
  cursor: pointer;
  transition: border-color var(--transition-fast);
}

.el-input__inner::placeholder {
  color: var(--color-text-placeholder);
}

.el-input__inner:hover {
  border-color: var(--color-text-placeholder);
}

.el-select.is-focus .el-input__inner {
  border-color: var(--color-primary);
}

.el-select.is-disabled .el-input__inner {
  background-color: var(--color-fill-light);
  border-color: var(--color-border-light);
  color: var(--color-text-placeholder);
  cursor: not-allowed;
}

.el-form-item.is-error .el-input__inner {
  border-color: var(--color-danger);
}

.el-input__suffix {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: var(--color-text-placeholder);
  pointer-events: none;
}

.el-input__suffix-inner {
  display: flex;
  align-items: center;
}

.el-select__caret {
  width: 14px;
  height: 14px;
  color: var(--color-text-placeholder);
  transition: transform var(--transition-fast);
  transform: rotate(180deg);
}

.el-select__caret.is-reverse {
  transform: rotate(0deg);
}

/* 下拉菜单 */
.el-select-dropdown {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  z-index: 2001;
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-base);
  background-color: var(--color-bg-overlay);
  box-shadow: var(--shadow-light);
  box-sizing: border-box;
}

.el-select-dropdown__wrap {
  max-height: 274px;
  overflow: auto;
}

.el-select-dropdown__list {
  list-style: none;
  padding: 6px 0;
  margin: 0;
  box-sizing: border-box;
}

.el-select-dropdown__item {
  font-size: var(--font-size-base);
  padding: 0 32px 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-regular);
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: var(--color-fill-light);
}

.el-select-dropdown__item.selected {
  color: var(--color-primary);
  font-weight: 700;
}

.el-select__check {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  color: var(--color-primary);
}

/* 错误信息 */
.el-form-item__error {
  color: var(--color-danger);
  font-size: var(--font-size-extra-small);
  line-height: 1;
  padding-top: 4px;
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
