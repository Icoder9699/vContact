<template>
  <MainHeader />
  <main>
    <slot />
  </main>
</template>

<script lang="ts" setup>
import MainHeader from "@/components/MainHeader.vue";
</script>
<style scoped lang="scss">
.main-layout {

}
</style>