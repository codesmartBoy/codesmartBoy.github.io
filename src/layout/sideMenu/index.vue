<template>
  <q-list class="q-pt-md">
    <q-item
      v-for="menuItem in menu"
      :key="menuItem.title"
      clickable
      v-ripple
      :to="menuItem.path"
      class="menuItem"
    >
      <q-item-section v-if="menuItem.icon" avatar>
        <q-icon :name="menuItem.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ menuItem.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { menuList } from "./constants";
export default {
  name: "sideMenu",
  data() {
    return {
      menu: menuList,
    };
  },
};
</script>
<style lang="stylus" scoped>
.menuItem {
  border-radius: 0 16px 16px 0
}
</style>
