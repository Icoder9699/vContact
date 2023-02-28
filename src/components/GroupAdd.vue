<template>
  <div class="group-add">
    <div class="group-add__row">
      <FormSelect v-model:value="selectedGroup" />
      <button
        class="group-add__button button-primary"
        type="button"
        @click="onAddGroup"
        :disabled="!selectedGroup"
      >
        Add group
      </button>
    </div>
    <div v-if="groups" class="group-add__groups row">
      <div v-for="(group, index) in groups" class="groups__item" :key="index">
        <span class="groups__close" @click="() => onRemoveGroup(group.id)"
          >&times;</span
        >
        {{ group.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormSelect from "@/components/UI/FormSelect.vue";
import { IContactData, IGroup } from "@/utils/types";

const emit = defineEmits(["getSelectedGroup", "removeSelectedGroup"]);

defineProps<{
  groups?: IGroup[];
}>();

const selectedGroup = ref<IContactData | null>();

const onAddGroup = () => {
  emit("getSelectedGroup", selectedGroup.value);
  selectedGroup.value = null;
};

const onRemoveGroup = (id: string | number) => {
  emit("removeSelectedGroup", id);
};
</script>

<style scoped lang="scss">
.group-add {
  &__row {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
  }

  &__item {
    width: 80%;
    input {
      padding: 50px !important;
      border-radius: $rounded-sm 0 0 $rounded-sm !important;
    }
  }

  &__button {
    width: 20%;
    border-radius: 0 $rounded-sm $rounded-sm 0;
  }

  &__groups {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
}

.groups__item {
  cursor: default;
  position: relative;
  margin: 0 10px 10px 0;
  padding: 10px;
  background-color: $primary;
  color: $light;
  border-radius: $rounded-sm;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  &:hover {
    .groups__close {
      opacity: 1;
    }
  }
}

.groups__close {
  @include transition();
  opacity: 0;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  top: -7px;
  right: -7px;
  border: 1px solid $error;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  color: $error;
  background: $light;
}
</style>