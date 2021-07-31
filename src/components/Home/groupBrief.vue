<template>
  <q-card class="bg-light-blue-1" flat style="width: 20vw">
    <q-card-section class="row items-center q-gutter-x-lg text-subtitle2">
      <div>{{ data.name_cn || "" }}</div>
      <div>by John Doe</div>
      <div>{{ data.id }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    data: {},
  },
};
</script>

<style></style>
template
