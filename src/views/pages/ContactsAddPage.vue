<template>
  <section class="contacts-add">
    <div class="contacts-add__container container">
      <form class="contacts-add__form" @submit.prevent="onContractAdd">
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
        <GroupAdd
          @getSelectedGroup="handleGetSelectedGroup"
          @removeSelectedGroup="handleRemoveSelectedGroup"
          :groups="contactData.groups"
        />
        <button class="contacts-add__form-button button-primary">Add</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import GroupAdd from "@/components/GroupAdd.vue";
import FormInput from "@/components/UI/FormInput.vue";
import { reactive } from "vue";
import { IContactData } from "@/utils/types/index";
import { ContactApi } from "@/api";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();
const contactData = reactive<IContactData>({
  id: "",
  fio: "",
  phone: "",
  email: "",
  groups: [],
});

const handleGetSelectedGroup = (selectedGroup: any) => {
  contactData.groups.push(selectedGroup);
};

const handleRemoveSelectedGroup = (id: any) => {
  contactData.groups = contactData.groups.filter((group) => group.id != id);
};

const onContractAdd = async () => {
  try {
    contactData.phone.trim();
    const response = await ContactApi.addContact(contactData);
    if (response.status === 201) {
      toast.success("Successfuly added", { timeout: 2000 });
      router.push("/");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped lang="scss">
.contacts-add {
  margin: 20px 0;

  &__title {
    margin-bottom: 20px;
  }

  &__form {
    &-select {
      margin-bottom: 10px;
    }

    &-button {
      width: 100%;
    }
  }
}
</style>