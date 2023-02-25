<template>
  <div class="registration">
    <form class="registration__form">
      <h1 class="form__title">Registration</h1>
      <FormInput
        class="form__item"
        label="Email"
        id="email"
        v-model:value="formData.email"
      />
      <FormInput
        class="form__item"
        label="Password"
        id="password"
        type="password"
        v-model:value="formData.password"
      />
      <FormInput
        class="form__item"
        label="Confirm the password"
        id="passwordConfirmation"
        type="password"
        v-model:value="formData.passwordConfirmation"
      />
      <button class="form__button button-primary">Submit</button>
    </form>
  </div>
</template>
  
  <script setup lang="ts">
import FormInput from "@/components/UI/FormInput.vue";
import { reactive } from "vue";

interface IFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const formData = reactive<IFormData>({
  email: "",
  password: "",
  passwordConfirmation: "",
});

const onSubmitForm = () => {};
</script>
  
  <style scoped lang="scss">
.registration {
  .registration__form {
    width: 400px;
  }

  .form {
    &__title {
      margin-bottom: 15px;
    }

    &__item {
      input {
        width: 100%;
      }
      margin-bottom: 15px;
    }

    &__link {
      margin-bottom: 15px;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>