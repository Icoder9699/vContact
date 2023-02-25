<template>
  <div class="contact">
    <div class="contact__row row">
      <strong>1. &nbsp;</strong>
      <div class="contact__info">
        <p><strong>Azizbek Karimjonov Ma'rufjon o'gli</strong></p>
        <p>+998974847838</p>
      </div>
      <input class="contact__check" type="checkbox" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.contact {
  cursor: pointer;
  width: 400px;
  border: 1px solid $primary;
  padding: 20px 10px;
  border-radius: $rounded-sm;
  margin-bottom: 20px;

  &__check {
    margin-left: auto;
    height: 18px;
    width: 18px;
    accent-color: green;
    color: $light;
  }

}
</style>