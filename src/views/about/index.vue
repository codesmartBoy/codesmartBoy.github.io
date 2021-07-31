<template>
  <div class="row q-gutter-y-md flex-center">
    <div
      class="col-xs-11 col-sm-6 col-md-3"
      :class="status.id | groupstatus"
      v-for="(status, ind) in statuses"
      :key="status.id"
    >
      <div class="sortlabel text-weight-regular bg-white">
        {{ status.statusName }}
      </div>
      <q-scroll-area
        class="area"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
      >
        <draggable
          :id="status.id"
          :disabled="!hasAuth"
          v-model="storyLists[ind]"
          class="drag-slot"
          group="stories"
        >
          <story-card
            :detail="story"
            v-for="story in storyLists[ind]"
            :key="story.storyId"
          ></story-card>
        </draggable>
      </q-scroll-area>
    </div>
  </div>
</template>
<script>
import StoryCard from "@/components/About/storyCard.vue";
import draggable from "vuedraggable";
export default {
  name: "about",
  order: 6,
  components: { StoryCard, draggable },
  data() {
    return {
      statuses: [
        { id: "0", statusName: "待实施" },
        { id: "1", statusName: "实施中" },
        { id: "2", statusName: "已完成" },
        { id: "3", statusName: "已拒绝" },
      ],
      stories: [
        {
          storyId: "#1",
          priority: "0",
          storyTitle: "用户故事1",
          storyStatus: "0",
        },
        {
          storyId: "#6",
          priority: "0",
          storyTitle: "用户故事6",
          storyStatus: "0",
        },
        {
          storyId: "#2",
          priority: "1",
          storyTitle: "用户故事2",
          storyStatus: "1",
        },
        {
          storyId: "#3",
          priority: "2",
          storyTitle: "用户故事3",
          storyStatus: "2",
        },
        {
          storyId: "#4",
          priority: "3",
          storyTitle: "用户故事4",
          storyStatus: "3",
        },
      ],
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },
      storyLists: [],
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
      hasAuth: true,
    };
  },

  filters: {
    groupstatus(status) {
      return "cardgroup_" + status;
    },
  },
  methods: {
    initData() {
      this.showStatus = this.statuses.map((status) => status.id);
      this.storyLists = this.showStatus.map((id) =>
        this.stories.filter((story) => story.storyStatus === id)
      );
      console.log(this.storyLists);
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style lang="stylus" scoped>
base=1px solid #ECEFF1
status0=4px solid #76909E
status1=4px solid #33A1FB
status2=4px solid #FFA900
status3=4px solid #60BD62
.cardgroup
  &_0
    border base
    border-top status0
  &_1
    border base
    border-top status1
  &_2
    border base
    border-top status2
  &_3
    border base
    border-top status3
.sortlabel
  display flex
  align-items center
  padding 16px 20px
  border-bottom  1px solid #ECEFF1;
  font-size: 16px;
  color: #37474F;
  text-align: center;
  line-height: 28px;
.area
  height 750px
.drag-slot
  min-height 600px
</style>
