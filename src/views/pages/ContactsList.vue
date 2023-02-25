<template>
   <div class="contacts-list">
      <div class="contacts-list__container container">
         <h1 class="contacts-list__title">vContacts</h1>
         <Contact/>
         <Contact/>
      </div>
   </div>
</template>

<script setup lang="ts">
import Contact from '@/components/Contact.vue';

</script>

<style scoped lang="scss">
.contacts-list{
   margin: 50px 0;
   &__title {
      margin-bottom: 30px;
   }
}

</style>