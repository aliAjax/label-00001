<template>
  <div class="app-container">
    <router-view />
    <Toast />
  </div>
</template>

<script setup>
import Toast from './components/Toast.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: var(--color-bg-page);
}
</style>
