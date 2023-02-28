<template>
  <div class="form-input">
    <label class="form-input__label" :for="id">{{ label }}</label>
    <input
      v-maska="mask"
      :value="defaultValue"
      class="form-input__input"
      :type="type || 'text'"
      :id="id"
      @input="onUpdateInputValue"
    />
    <p class="error">&nbsp;{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  id: string;
  type?: string;
  errorMessage?: string;
  defaultValue?: string;
  mask?: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string | number): void;
}>();

const onUpdateInputValue = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
.form-input {
  &__label {
    display: block;
    margin-bottom: 5px;
  }

  &__input {
    width: 100%;
  }
}
</style>