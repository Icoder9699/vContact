<template>
  <header class="main-header">
    <nav class="main-header__nav">
      <ul>
        <li v-for="(navLink, index) in navLinks" :key="index">
          <router-link :to="navLink.path">
            {{ navLink.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: "Main",
    path: "/",
  },
  {
    name: "Add",
    path: "/contacts/add",
  },
];
</script>

<style scoped lang="scss">
.main-header {
  padding: 30px;
  box-shadow: 0 0 2px $primary;
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