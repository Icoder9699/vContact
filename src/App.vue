<template>
  <component :is="isLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import MainLayout from '@/views/layouts/MainLayout.vue';
import AuthLayout from '@/views/layouts/AuthLayout.vue';
const route = useRoute();

// layout switcher by route path
const isLayout = computed(() => route.path.includes('/auth' ) ? AuthLayout : MainLayout);

</script>
