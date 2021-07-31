<template>
  <q-card
    flat
    class="
      cursor-pointer
      q-ma-md q-pa-md
      bg-light-blue-1
      cursor-pointer
      text-bold
    "
  >
    <div class="row justify-between">
      <q-chip dense color="teal" text-color="white">{{
        detail.storyId
      }}</q-chip>
      <q-chip dense color="orange" text-color="white">{{
        detail.priority | priorityfilter
      }}</q-chip>
    </div>
    <div class="q-py-md">
      <div class="row justify-between">
        <div class="col text-left">故事标题：</div>
        <div>{{ detail.storyTitle }}</div>
      </div>
      <div class="row justify-between">
        <div class="col text-left">负责人</div>
        <div>111</div>
      </div>
    </div>
  </q-card>
</template>
<script>
export default {
  props: {
    detail: Object,
    status: String,
  },
  filters: {
    priorityfilter: (val) => {
      const obj = {
        0: "低",
        1: "中",
        2: "高",
        3: "极高",
      };
      return obj[val];
    },
  },
};
</script>
<style lang="stylus"></style>
