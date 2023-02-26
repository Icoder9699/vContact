<template>
  <div class="contact">
    <div class="contact__row row">
      <strong>1. &nbsp;</strong>
      <div class="contact__info">
        <p>
          <strong>{{ contact.fio }}</strong>
        </p>
        <p>{{ contact.phone }}</p>
      </div>
      <input class="contact__check" type="checkbox" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  contact: any;
}>();
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