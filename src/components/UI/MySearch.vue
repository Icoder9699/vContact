<template>
  <form class="search" @submit.prevent="$emit('onSearch')">
    <input
      class="search__input"
      type="search"
      @input="(event:any) => $emit('update:value', event.target.value)"
    />
    <button class="search__button button-primary">Search</button>
  </form>
</template>

<script setup lang="ts">
defineEmits(["update:value", "onSearch"]);
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 400px;

  &__input {
    width: 80%;
    border-radius: $rounded-sm 0 0 $rounded-sm;
  }

  &__button {
    width: 20%;
    border-radius: 0 $rounded-sm $rounded-sm 0;
  }
}
</style>