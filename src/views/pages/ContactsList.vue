<template>
  <section class="contacts-list">
    <div class="contacts-list__container container">
      <h1 class="contacts-list__title">vContacts</h1>
      <template v-if="contactList">
         <Contact v-for="contact in contactList" :key="contact.id" :contact="contact"/>
      </template>
      <h2 v-else>Empty</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { fetchContacts } from "@/api";
import Contact from "@/components/Contact.vue";

let contactList = reactive([]);

const fetchContactList = async () => {
  try {
    const response = await fetchContacts();
    console.log(response);
    contactList = response.data
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchContactList();
});
</script>

<style scoped lang="scss">
.contacts-list {
  margin: 50px 0;
  &__title {
    margin-bottom: 30px;
  }
}
</style>