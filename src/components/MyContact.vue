<template>
  <div class="contact">
    <div class="contact__row row">
      <strong>{{ contact.id }}. &nbsp;</strong>
      <div
        class="contact__info"
        @click="$router.push(`contacts/edit/${contact.id}`)"
      >
        <p>
          <strong>Full name: </strong>
          {{ contact.fio }}
        </p>
        <p><strong>Phone number: </strong>{{ contact.phone }}</p>
      </div>
      <p class="contact__tags">
        <span v-for="group in contact.groups" class="group-tag">{{
          group.title
        }}</span>
      </p>
      <input
        class="contact__check"
        type="checkbox"
        @change="(e:any) => $emit('onCheckContact', contact.id, e.target.checked)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  contact: any;
}>();

defineEmits(["onCheckContact"]);
</script>

<style scoped lang="scss">
.contact {
  cursor: pointer;
  border: 1px solid $primary;
  padding: 20px 10px;
  border-radius: $rounded-sm;
  margin-bottom: 20px;

  &__check {
    margin-left: auto;
    height: 18px;
    width: 18px;
    accent-color: green;
    color: $light;
  }

  &__tags {
    margin-left: auto;
  }
  .group-tag {
    font-size: 10px;
    padding: 5px;
    border: 1px solid $primary;
    border-radius: $rounded-sm;
    margin-right: 10px;
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
}
</style>