<template>
  <div class="select">
    <label>Contact group</label>
    <select class="group-add__item" @change="onChangeSelect">
      <option value="null" disabled selected>Select</option>
      <option v-for="(group, index) in groups" :key="index" :value="index">
        {{ group.title }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { GROUP_LIST } from "@/utils/constants/groups";
import { reactive } from "vue";

const emit = defineEmits(["update:value"]);

const groups = reactive(GROUP_LIST);

const onChangeSelect = (e: any) => {
  emit("update:value", groups[e.target.value]);
};
</script>

<style scoped lang="scss">
.select {
  width: 80%;

  label {
    display: block;
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    padding: 10px 5px;
  }
}
</style>