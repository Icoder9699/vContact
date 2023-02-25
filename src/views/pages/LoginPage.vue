<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onSubmitForm">
      <h1 class="form__title">Login</h1>
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
      <router-link class="form__link" :to="{ name: 'auth.registration' }">
        Registration
      </router-link>
      <button class="form__button button-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import FormInput from "@/components/UI/FormInput.vue";
import { reactive } from "vue";

interface IFormData {
  email: string;
  password: string;
}

const formData = reactive<IFormData>({
  email: "",
  password: "",
});

const onSubmitForm = () => {};


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