<template>
  <div class="form-input">
    <label class="form-input__label" :for="id">{{ label }}</label>
    <input
      class="form-input__input"
      :type="type || 'text'"
      :id="id"
      @input="onUpdateInputValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  id: string;
  type?: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: any): void;
}>();

const onUpdateInputValue = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
.form-input {
  &__label {
    display: block;
    bottom: 5px;
  }

  &__input {
    width: 100%;
    padding: 10px 5px;
  }
}
</style>