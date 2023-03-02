<template>
  <section class="contacts-list">
    <div class="container">
      <div class="contacts-list__info">
        <h1 class="contacts-list__title">Contacts</h1>
        <h4>Selected Contacts: {{ checkedContactList.length }}</h4>
      </div>
      <div class="contacts-list__row">
        <MySearch v-model:value="searchFieldValue" @onSearch="handleOnSearch" />
        <select class="contracts-list__filter" v-model="filterSelectValue">
          <option :value="null" disabled selected>Select</option>
          <option :value="group.id" v-for="group in GROUP_LIST" :key="group.id">
            {{ group.title }}
          </option>
        </select>
      </div>
      <div class="contacts-list__container">
        <template v-if="contactsList">
          <ContactCard
            v-for="contact in contactsList"
            :key="contact.id!"
            :contact="contact"
            @onCheckContact="handleOnCheckContact"
          />
        </template>
        <h2 v-else>Empty</h2>
      </div>
      <button class="button-error" @click="onRemoveCheckedContacts">
        Remove
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ContactApi, fetchContacts } from "@/api";
import ContactCard from "@/components/ContactCard.vue";
import MySearch from "@/components/UI/MySearch.vue";
import { IContactData } from "@/utils/types";
import { GROUP_LIST } from "@/utils/constants/groups";

const contactsList = ref<IContactData[]>([]);
const checkedContactList = ref<number[]>([]);
const searchFieldValue = ref<string>("");
const filterSelectValue = ref(null);

watch(filterSelectValue, () => {
  filterByGroup();
});

const filterByGroup = () => {
  contactsList.value = contactsList.value.filter((contact) => {
    let hasGroup = false;
    if (contact.groups) {
      contact.groups.forEach((group) => {
        if (group.id === filterSelectValue.value) {
          hasGroup = true;
        }
      });
      return contact;
    }
    if (hasGroup) {
      return contact;
    }
  });
};

const onRemoveCheckedContacts = () => {
  contactsList.value = contactsList.value.filter((contact) => {
    if (!checkedContactList.value.includes(contact.id!)) {
      return contact;
    }
  });
  checkedContactList.value = [];
};

// remove from front
const handleOnCheckContact = (checkedContactId: number, checked: boolean) => {
  if (checked) {
    checkedContactList.value.push(checkedContactId);
    return;
  }
  checkedContactList.value = checkedContactList.value.filter(
    (contactId) => contactId != checkedContactId
  );
};

const handleOnSearch = () => {};
</script>

<style scoped lang="scss">
.contacts-list {
  margin: 20px 0;
  &__info {
    display: flex;
    justify-content: space-between;
  }
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