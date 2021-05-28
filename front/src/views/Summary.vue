<template>
  <div class="summary">
    <PageHeader msg="数据统计" class="pageHeader" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "Summary",
  components: {
    PageHeader,
  },
};
</script>

<style lang="less">
.summary {
  width: 100%;
  height: 100%;
}
</style>