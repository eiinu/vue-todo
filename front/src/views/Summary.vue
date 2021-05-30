<template>
  <div class="summary">
    <PageHeader msg="数据统计" class="pageHeader" />
    <div class="summary-page">
      <div id="echart1"></div>
      <div id="echart2"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "Summary",
  components: {
    PageHeader,
  },
  mounted() {
    this.initEchart1();
    this.initEchart2();
  },
  methods: {
    initEchart1() {
      let myChart = this.$echarts.init(document.getElementById("echart1"));
      let option = {
        title: {
          text: "最近一周任务数",
        },
        tooltip: {},
        legend: {
          data: ["个数"],
        },
        xAxis: {
          data: ["五天前", "四天前", "三天前", "前天", "昨天", "今天"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [5, 1, 0, 0, 0, 2, 3],
            color: getComputedStyle(document.documentElement).getPropertyValue(
              "--theme-color"
            ),
          },
        ],
      };
      myChart.setOption(option);
    },
    initEchart2() {
      let myChart = this.$echarts.init(document.getElementById("echart2"));
      let option = {
        title: {
          text: "最近一周打卡完成度",
        },
        angleAxis: {
          type: "category",
          data: [
            "六天前",
            "五天前",
            "四天前",
            "三天前",
            "前天",
            "昨天",
            "今天",
          ],
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: "polar",
            stack: "a",
            emphasis: {
              focus: "series",
            },
            color: getComputedStyle(document.documentElement).getPropertyValue(
              "--theme-color"
            ),
          },
        ],
        legend: {
          show: true,
          data: ["A"],
        },
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
.summary {
  width: 100%;
  height: 100%;
  .summary-page {
    width: 100%;
    height: calc(100% - 70px);
    background-color: var(--card-bg-color);
    border-radius: 4px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
#echart1,
#echart2 {
  padding: 20px;
  width: 100%;
  height: 500px;
}
</style>