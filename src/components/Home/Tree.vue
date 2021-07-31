<template>
  <div class="q-pa-md row">
    <q-tree
      :nodes="simple"
      node-key="id"
      :tick-strategy="leaf"
      :duration="300"
      control-color="light-blue-13"
      color="black"
      no-connectors
      selected-color="primary"
      :selected.sync="selected"
      :ticked.sync="ticked"
      no-nodes-label="No nodes to show!"
    >
      <!-- 根节点 -->
      <template v-slot:header-root="prop">
        <div class="row items-center">
          <q-icon :name="prop.node.icon || 'group'" size="xs" class="q-mr-sm" />
          {{ prop.node.name_cn }}
          <q-badge
            outline
            color="orange-5"
            class="q-ml-sm"
            v-if="prop.node.count"
          >
            <span> {{ prop.node.count }}人 </span>
          </q-badge>
          <q-badge color="red-6" class="q-ml-sm">{{ prop.node.id }}</q-badge>
          <q-badge color="red-6" class="q-ml-sm">New!</q-badge>
        </div>
      </template>
      <!-- 子节点 -->
      <template v-slot:default-header="prop">
        <div class="row items-center q-gutter-x-sm">
          <q-icon :name="prop.node.icon || 'group'" size="xs" class="q-mr-sm" />
          <span>
            {{ prop.node.name_cn || prop.node.label }}
          </span>
          <q-badge color="orange-5" v-if="prop.node.count">
            <span> {{ prop.node.count }}人 </span>
          </q-badge>
          <q-badge color="red-6">{{ prop.node.id }}</q-badge>
          <q-btn
            flat
            color="primary"
            icon="add"
            label="新增"
            @click="onClick"
          />
          <q-btn
            flat
            color="primary"
            icon="edit"
            label="编辑"
            @click="onClick"
          />
          <q-btn
            flat
            color="primary"
            icon="delete"
            label="删除"
            @click="onClick"
          />
        </div>
      </template>
      <template v-slot:default-body="prop">
        <div class="q-ml-xl">
          <groupBrief :data="prop.node" v-if="!prop.node.children" />
        </div>
      </template>
    </q-tree>
  </div>
</template>
<script>
import groupBrief from "./groupBrief";
import { COMPANY_STRUCT } from "@/utils/constants";
export default {
  components: {
    groupBrief,
  },
  data() {
    return {
      simple: COMPANY_STRUCT,
      selected: "",
    };
  },
  beforeUpdate() {
    console.log(this.tickStrategy);
    console.log("msg");
  },
  updated() {
    console.log("试图更新");
  },
  mounted() {
    console.log("mounted");
  },
  destroyed() {},
};
</script>
