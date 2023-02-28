<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onSubmitForm">
      <h1 class="form__title">Login</h1>
      <FormInput
        class="form__item"
        label="Email"
        id="email"
        v-model:value="formData.email"
        :errorMessage="isValidEmail ? '' : 'invalid Email'"
        :defaultValue="formData.email"
      />
      <FormInput
        class="form__item"
        label="Password"
        id="password"
        type="password"
        v-model:value="formData.password"
        :defaultValue="formData.password"
      />
      <router-link class="form__link" :to="{ name: 'auth.registration' }">
        Registration
      </router-link>
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
import FormInput from "@/components/UI/FormInput.vue";
import { authFirebase } from "@/firebaseConfig";
import emailValidation from "@/utils/functions/emailValidation";
import { computed } from "@vue/reactivity";
import { signInWithEmailAndPassword } from "firebase/auth";
import { reactive } from "vue";
import { useToast } from "vue-toastification";
import { useAuthStore } from "@/store/useAuthStore";
import router from "@/routes";
import { IUserData } from "@/utils/types";

const toast = useToast();
const authStore = useAuthStore();

const formData = reactive<IUserData>({
  email: "",
  password: "",
});

const isValidEmail = computed(() => {
  return emailValidation(formData.email);
});

const isFormValid = computed(() => {
  if (formData.email.length && formData.password.length) {
    return isValidEmail.value;
  }
  return false;
});

const onSubmitForm = () => {
  signInWithEmailAndPassword(authFirebase, formData.email, formData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      //@ts-ignore
      authStore.login(user);
      router.push("/contacts");
    })
    .catch((error) => {
      toast.error(error.message, {
        timeout: 1000,
      });
    });
};
</script>

<style scoped lang="scss">
.login {
  .login__form {
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