<template>
  <div class="mine">
    <PageHeader msg="我的" class="pageHeader" />
    <TodoList class="right-todo-list" :projectId="currentProjectId" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "Mine",
  components: {
    PageHeader,
  },
};
</script>

<style lang="less">
.mine {
  width: 100%;
  height: 100%;
}
</style>