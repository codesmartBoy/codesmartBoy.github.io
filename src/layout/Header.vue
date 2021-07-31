<template>
  <q-toolbar class="header q-py-sm">
    <q-btn flat round @click="shrink" class="q-mr-md">
      <q-avatar size="42px">
        <img src="@/assets/myLogo.png" />
      </q-avatar>
    </q-btn>
    <span class="text-subtitle1">Ryoza的博客</span>
    <q-space />
    <q-select v-model="model" :options="options" label="Standard" filled />
    <q-btn flat round icon="assignment_ind">
      <q-menu
        anchor="bottom left"
        self="top left"
        transition-show="flip-right"
        transition-hide="flip-left"
      >
        <q-list dense style="min-width: 50px">
          <q-item clickable>
            <q-item-section>setting</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section @click="loginOut">Quit</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>
<script>
export default {
  name: "Header",
  methods: {
    shrink() {
      this.$emit("shrink");
    },
    loginOut() {
      this.$emit("loginOut");
    },
  },
};
</script>
<style lang="stylus">
.header {
  background: #24292e
}
</style>
