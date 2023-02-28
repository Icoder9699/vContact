<template>
  <header class="main-header">
    <div class="main-header__row row">
      <nav class="main-header__nav">
        <ul>
          <li v-for="(navLink, index) in navLinks" :key="index">
            <router-link :to="navLink.path">
              {{ navLink.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="button-primary" @click="onLogout">Logout</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();
const navLinks = [
  {
    name: "Main",
    path: "/contacts",
  },
  {
    name: "Add",
    path: "/contacts/add",
  },
];

const onLogout = () => {
  authStore.logout();
  router.push('/auth/login');
};
</script>

<style scoped lang="scss">
.main-header {
  padding: 30px;
  box-shadow: 0 0 2px $primary;

  &__row {
    justify-content: space-between;
  }

  &__nav {
    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        margin-right: 20px;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
}
</style>