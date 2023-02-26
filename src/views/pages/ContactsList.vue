<template>
  <section class="contacts-list">
    <div class="container">
      <h1 class="contacts-list__title">Contacts</h1>
      <div class="contacts-list__row">
        <Search v-model:value="searchFieldValue" @onSearch="handleOnSearch" />
        <select class="contracts-list__filter" v-model="filterSelectValue">
          <option :value="null" disabled selected>Select</option>
          <option :value="group.id" v-for="group in GROUP_LIST">
            {{ group.title }}
          </option>
        </select>
      </div>
      <div class="contacts-list__container">
        <template v-if="contactsList">
          <Contact
            v-for="(contact, index) in contactsList"
            :key="index"
            :contact="contact"
          />
        </template>
        <h2 v-else>Empty</h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { ContactApi, fetchContacts } from "@/api";
import Contact from "@/components/Contact.vue";
import Search from "@/components/UI/Search.vue";
import { IContactData } from "@/utils/types";
import { GROUP_LIST } from "@/utils/constants/groups";

const contactsList = ref<IContactData[]>([]);
const searchFieldValue = ref<string>("");
const filterSelectValue = ref(null);

watch(filterSelectValue, () => {
  filterByGroup()
});

const filterByGroup = () => {
  contactsList.value = contactsList.value.filter((contact) => {
    if (contact.groups.includes(filterSelectValue.value!)) {
      return contact;
    }
  });
};

const fetchContactList = async () => {
  try {
    const response = await fetchContacts();
    console.log(response);
    contactsList.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const handleOnSearch = () => {
  ContactApi.searchContact(searchFieldValue.value)
    .then((response) => {
      contactsList.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  fetchContactList();
});
</script>

<style scoped lang="scss">
.contacts-list {
  margin: 20px 0;
  &__title {
    margin-bottom: 20px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__search {
    width: 100%;
  }

  select {
    width: 200px;
  }
}
</style>