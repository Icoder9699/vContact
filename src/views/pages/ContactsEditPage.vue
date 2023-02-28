<template>
  <section class="contact-edit">
    <div class="contact-edit__container container">
      <form class="contact-edit__form" @submit.prevent="onSubmitForm">
        <h1 class="contact-edit__title">Edit contact</h1>
        <FormInput
          class="contact-edit__form-item"
          label="Full name"
          id="fio"
          v-model:value="contactData.fio"
          :defaultValue="contactData.fio"
        />
        <FormInput
          class="contact-edit__form-item"
          label="Phone number"
          id="phone"
          :mask="'+998 ## ### ## ##'"
          v-model:value="contactData.phone"
          :defaultValue="contactData.phone"
        />
        <FormInput
          class="contact-edit__form-item"
          label="Email"
          id="email"
          v-model:value="contactData.email"
          :defaultValue="contactData.email"
        />
        <GroupAdd
          @removeSelectedGroup="handleRemoveGroup"
          @getSelectedGroup="handleGetGroupTags"
          :groups="contactData.groups"
        />
        <button class="contact-edit__form-button button-primary">Add</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ContactApi } from "@/api";
import GroupAdd from "@/components/GroupAdd.vue";
import FormInput from "@/components/UI/FormInput.vue";
import { IContactData } from "@/utils/types";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const toast = useToast();

let contactData = reactive<IContactData>({
  id: null,
  fio: "",
  phone: "",
  email: "",
  groups: [],
});

const contactId = router.currentRoute.value.params.id;

const handleGetGroupTags = (selectedGroup: any) => {
  contactData.groups.push(selectedGroup);
};

const handleRemoveGroup = (id: string | number) => {
  contactData.groups = contactData.groups.filter((group) => group.id != id);
};

const fetchContactById = async () => {
  try {
    const { data } = await ContactApi.fetchContactById(Number(contactId));
    Object.assign(contactData, data);
  } catch (error) {
    console.log(error);
  }
};

const onSubmitForm = async () => {
  try {
    const response = await ContactApi.editContactById(Number(contactId), contactData);
    if (response.status === 200) {
      toast.success("Successfuly edited", { timeout: 2000 });
      router.push("/");
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchContactById();
});
</script>

<style scoped lang="scss">
.contact-edit {
  margin: 50px 0;

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