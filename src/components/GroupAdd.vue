<template>
  <div class="group-add">
    <div class="group-add__row row">
      <FormInput
        class="group-add__item"
        label="Contact group"
        id="email"
        v-model:value="groupName"
        :defaultValue="groupName"
      />
      <button
        class="group-add__button button-primary"
        type="button"
        @click="onAddGroup"
        :disabled="!groupName.length"
      >
        Add group
      </button>
    </div>
    <div v-if="groups" class="group-add__groups row">
      <div v-for="(group, index) in groups" class="groups__item" :key="index">
        {{ group }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import FormInput from "./UI/FormInput.vue";

const emit = defineEmits<{
  (e: "getGroupTags"): string[];
}>();

const groups = reactive<string[]>([]);
const groupName = ref<string>("");

const onAddGroup = () => {
  groups.push(groupName.value);
  groupName.value = "";
  emit("getGroupTags", groups);
};
</script>

<style scoped lang="scss">
.group-add {
  &__row {
    display: flex;
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
    margin-top: 4px;
    border-radius: 0 $rounded-sm $rounded-sm 0;
  }

  &__groups {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
}

.groups__item {
  margin: 0 10px 10px 0;
  padding: 10px;
  background-color: $primary;
  color: $light;
  border-radius: $rounded-sm;

  &:nth-last-child(1) {
    margin-right: 0;
  }
}
</style>