<template>
  <div>
    <q-tree :nodes="nodes" node-key="id" :selected.sync="selected">
      <template v-slot:default-header="prop">
        <div class="row items-center">
          <span class="q-mr-md">
            {{ prop.node.name }}
          </span>
        </div>
      </template>
    </q-tree>
    {{ selected }}
  </div>
</template>

<script>
import { DATA } from "@/utils/constants";
export default {
  data() {
    return {
      data: DATA,
      init: [],
      selected: "",
      nodes: [],
    };
  },
  watch: {
    selected(val) {
      console.log(val);
    },
  },
  methods: {
    initdata() {
      let { section, sectionChildGroup } = this.data;
      // let { id, name } = section;
      let root = [section];
      this.nodes = [];
      this.nodes = this.appendNode(root, sectionChildGroup);
      console.log(this.nodes);
    },
    appendNode(parent, set, depth) {
      // 当参数设置depth=2，限制层级最多为4级
      if (!Array.isArray(parent) || !Array.isArray(set)) {
        return [];
      }
      if (parent.length === 0 || set.length === 0) {
        return [];
      }
      if (depth === 0) {
        return parent;
      }
      const child = parent.reduce((pre, next) => {
        const nodes = set.filter((group) => group.parent_id === next.id);
        nodes.forEach((node) => (node.header = "nodes"));
        next.children = nodes;
        next.header = "nodes";
        return pre.concat(nodes);
      }, []);
      if (child.length > 0) {
        this.appendNode(child, set, --depth);
      }
      return parent;
    },
  },
  created() {
    this.initdata();
  },
};
</script>

<style></style>
template
