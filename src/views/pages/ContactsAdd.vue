<template>
  <section class="contacts-add">
    <div class="contacts-add__container container">
      <form class="contacts-add__form">
        <h1 class="contacts-add__title">Add contact</h1>
        <FormInput
          class="contacts-add__form-item"
          label="Full name"
          id="fio"
          v-model:value="contactData.fio"
          :defaultValue="contactData.fio"
        />
        <FormInput
          class="contacts-add__form-item"
          label="Phone number"
          id="phone"
          :mask="'+998 ## ### ## ##'"
          v-model:value="contactData.phone"
          :defaultValue="contactData.phone"
        />
        <FormInput
          class="contacts-add__form-item"
          label="Email"
          id="email"
          v-model:value="contactData.email"
          :defaultValue="contactData.email"
        />
        <GroupAdd @getGroupTags="handleGetGroupTags" />
        <button class="contacts-add__form-button button-primary">Add</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import GroupAdd from "@/components/GroupAdd.vue";
import FormInput from "@/components/UI/FormInput.vue";
import { reactive } from "vue";

interface IContactData {
  fio: string;
  phone: string;
  email: string;
  groups: string[];
}

const contactData = reactive<IContactData>({
  fio: "",
  phone: "",
  email: "",
  groups: [],
});

const handleGetGroupTags = (array: any): any => {
  contactData.groups = array;
};
</script>

<style scoped lang="scss">
.contacts-add {
  margin: 50px 0;

  &__title {
    margin-bottom: 20px;
  }

  &__form {
    width: 500px;

    &-select {
      margin-bottom: 10px;
    }

    &-button {
      width: 100%;
    }
  }
}
</style>