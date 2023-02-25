<template>
  <div class="main-layout">
    <header class="main-layout__header">
      <nav class="main-layout__nav">
        <ul>
          <li
            v-for="(navLink, index) in navLinks"
            :key="index"
            @click="$router.push(navLink.path)"
          >
            {{ navLink.name }}
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Add",
    path: "/contacts/add",
  },
];
</script>
<style scoped lang="scss">
.main-layout {
  &__header {
    padding: 30px 0;
    background: rgb(236, 236, 236);
  }
  &__nav {
    width: 400px;
    margin: auto;
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