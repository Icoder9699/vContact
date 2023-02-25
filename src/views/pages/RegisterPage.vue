<template>
  <div class="registration">
    <form class="registration__form" @submit.prevent="onSubmitForm">
      <h1 class="form__title">Registration</h1>
      <FormInput
        class="form__item"
        label="Email"
        id="email"
        v-model:value="formData.email"
        :errorMessage="emailErrorMessage"
      />
      <FormInput
        class="form__item"
        label="Password"
        id="password"
        type="password"
        v-model:value="formData.password"
        :errorMessage="passwordErrorMessage"
      />
      <FormInput
        class="form__item"
        label="Confirm password"
        id="passwordConfirmation"
        type="password"
        v-model:value="formData.passwordConfirmation"
        :errorMessage="passwordErrorMessage"
      />
      <button class="form__button button-primary" type="submit">Submit</button>
    </form>
  </div>
</template>
  
<script setup lang="ts">
import { reactive, computed } from "vue";
import FormInput from "@/components/UI/FormInput.vue";
import samePasswordValidation from "@/utils/functions/samePasswordValidation";
import emailValidation from "@/utils/functions/emailValidation";

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

const emailErrorMessage = computed(() => {
  return emailValidation(formData.email) ? "" : "Invalid email!";
});

const passwordErrorMessage = computed(() => {
  return samePasswordValidation(
    formData.password,
    formData.passwordConfirmation
  )
    ? ""
    : "Not same passwords!";
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

      margin-bottom: 5px;
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