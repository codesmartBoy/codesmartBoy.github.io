<template>
  <q-layout view="hHh LpR fff">
    <q-header flat class="text-white shadow-3">
      <Header @shrink="shrinkMenu" @loginOut="quit" />
    </q-header>
    <q-drawer
      show-if-above
      :width="250"
      :breakpoint="1500"
      v-model="left"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      side="left"
      content-class="bg-grey-2 shadow-6"
    >
      <q-scroll-area style="height: calc(100%)">
        <side-menu />
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page class="q-pa-md bg-grey-1">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "./Header";
import sideMenu from "./sideMenu";
export default {
  components: {
    sideMenu,
    Header,
  },
  data() {
    return {
      left: false,
      miniState: true,
    };
  },
  methods: {
    shrinkMenu() {
      this.left = !this.left;
    },
    quit() {
      this.$router.replace("/login");
    },
  },
};
</script>
