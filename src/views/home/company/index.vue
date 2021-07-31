<template>
  <div>
    <tree />
    <q-btn @click="go">详情</q-btn>
  </div>
</template>

<script>
import Tree from "@/components/Home/Tree";
export default {
  components: {
    Tree,
  },
  methods: {
    go() {
      this.$router.push("/home/story");
    },
  },
};
</script>

<style></style>
template
