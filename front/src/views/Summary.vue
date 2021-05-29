<template>
  <div class="summary">
    <PageHeader msg="数据统计" class="pageHeader" />
    <div class="summary-page">
      <div id="echart"></div>
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
    let myChart = this.$echarts.init(document.getElementById("echart"));
    let option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="less">
.summary {
  width: 100%;
  height: 100%;
  .summary-page {
    width: 100%;
    background-color: var(--card-bg-color);
    border-radius: 4px;
  }
}
#echart {
  padding: 20px;
  width: 100%;
  height: 500px;
}
</style>