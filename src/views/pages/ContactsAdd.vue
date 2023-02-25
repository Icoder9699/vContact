<template>
  <div class="contacts-add">
    <div class="contacts-add__container container">
      <form class="contacts-add__form">
        <h1 class="contacts-add__title">Add contact</h1>
        <FormInput
          class="contacts-add__form-item"
          label="Full name"
          id="email"
          v-model:value="conctactData.fio"
          :defaultValue="conctactData.fio"
        />
        <FormInput
          class="contacts-add__form-item"
          label="Phone number"
          id="email"
          v-model:value="conctactData.phone"
          :defaultValue="conctactData.phone"
        />
        <FormInput
          class="contacts-add__form-item"
          label="Email"
          id="email"
          v-model:value="conctactData.email"
          :defaultValue="conctactData.email"
        />
        <GroupAdd @getGroupTags="handleGetGroupTags" />
        <button class="contacts-add__form-button button-primary">Add</button>
      </form>
    </div>
  </div>
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

const conctactData = reactive<IContactData>({
  fio: "",
  phone: "",
  email: "",
  groups: [],
});

const handleGetGroupTags = (array: any): any => {
  conctactData.groups = array;
};
</script>

<style scoped lang="scss">
.contacts-add {
  margin: 50px 0;

  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  &__form {
    width: 500px;
    margin: auto;

    &-select {
      margin-bottom: 10px;
    }

    &-button {
      width: 100%;
    }
  }
}
</style>