<template>
  <div>
    <div id="l1"></div>
  </div>
</template>

<script>
import { registerTheme, Chart } from "@antv/g2";
export default {
  data() {
    return {
      chart: null,
      year: [
        { year: "1951 年", sales: 38 },
        { year: "1952 年", sales: 52 },
        { year: "1956 年", sales: 61 },
        { year: "1957 年", sales: 145 },
        { year: "1958 年", sales: 48 },
        { year: "1959 年", sales: 38 },
        { year: "1960 年", sales: 38 },
        { year: "1962 年", sales: 38 },
      ],
    };
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart() {
      registerTheme("customTheme", {
        defaultColor: "red",
      });
      //new Chart() 创建 Chart 图表对象，指定图表所在的容器 id、图表的宽高、边距等信息；
      const chart = new Chart({
        container: "l1",
        autoFit: true,
        height: 500,
        syncViewPadding: true,
      });
      // 载入图表数据源；
      chart.data(this.year);
      chart.scale("sales", {
        alias: "销售量",
      });
      chart.axis("sales", {
        title: {},
      });
      chart.scale("year", {
        alias: "年份",
      });
      chart.axis("year", {
        title: {},
      });
      // chart.tooltip(false);
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
      });
      // chart.interaction("active-region");
      chart.interval().position("year*sales").label("sales");
      this.chart = chart;
      this.chart.render();
    },
  },
};
</script>
<style scoped></style>
