<template>
  <div class="registration">
    <form class="registration__form" @submit.prevent="onSubmitForm">
      <h1 class="form__title">Registration</h1>
      <FormInput
        class="form__item"
        label="Email"
        id="email"
        v-model:value="formData.email"
        :defaultValue="formData.email"
        :errorMessage="isValidEmail ? '' : 'invalid Email'"
      />
      <FormInput
        class="form__item"
        label="Password"
        id="password"
        type="password"
        v-model:value="formData.password"
        :defaultValue="formData.password"
        :errorMessage="isTheSamePasswords ? '' : 'Not the same passswords!'"
      />
      <FormInput
        class="form__item"
        label="Confirm password"
        id="passwordConfirmation"
        type="password"
        v-model:value="formData.passwordConfirmation"
        :defaultValue="formData.passwordConfirmation"
        :errorMessage="isTheSamePasswords ? '' : 'Not the same passswords!'"
      />
      <button
        class="form__button button-primary"
        type="submit"
        :disabled="!isFormValid"
      >
        Submit
      </button>
    </form>
  </div>
</template>
  
<script setup lang="ts">
import { reactive, computed } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "@/firebaseConfig";
import FormInput from "@/components/UI/FormInput.vue";
import samePasswordValidation from "@/utils/functions/samePasswordValidation";
import emailValidation from "@/utils/functions/emailValidation";
import { useToast } from "vue-toastification";
import { useAuthStore } from "@/store/useAuthStore";

interface IFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
const toast = useToast();
const authStore = useAuthStore();
const formData = reactive<IFormData>({
  email: "",
  password: "",
  passwordConfirmation: "",
});

const isValidEmail = computed(() => {
  return emailValidation(formData.email);
});

const isTheSamePasswords = computed(() => {
  return samePasswordValidation(
    formData.password,
    formData.passwordConfirmation
  );
});

const isFormValid = computed(() => {
  if (
    formData.email.length &&
    formData.password.length &&
    formData.passwordConfirmation
  ) {
    return isValidEmail.value && isTheSamePasswords.value;
  }
  return false;
});

const onSubmitForm = () => {
  createUserWithEmailAndPassword(
    authFirebase,
    formData.email,
    formData.password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      //@ts-ignore
      authStore.login(user);
    })
    .catch((error) => {
      toast.error(error.message, {
        timeout: 2000,
      });
    });
};
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