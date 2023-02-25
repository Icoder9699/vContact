<template>
  <div class="auth-layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.auth-layout{
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>