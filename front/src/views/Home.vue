<template>
  <div class="home">
    <el-drawer
      v-model="drawer"
      size="60%"
      :withHeader="false"
      :show-close="false"
      direction="ltr"
      :before-close="handleClose"
      destroy-on-close
    >
      <div class="el-drawer">
        <ProjectList class="drawer-body" @click-Project="onClickProject" />
      </div>
    </el-drawer>
    <div class="left-todo">
      <ProjectList @click-Project="onClickProject" />
    </div>
    <div class="right-todo">
      <PageHeader
        :msg="currentProjectName"
        class="pageHeader"
        showMenu="1"
        @menu-drawer="drawer = true"
      />
      <TodoList class="right-todo-list" :projectId="currentProjectId" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/home/TodoList.vue";
import PageHeader from "@/components/PageHeader.vue";
import ProjectList from "@/components/home/ProjectList.vue";

export default {
  name: "Home",
  data() {
    return {
      drawer: false,
      currentProjectId: "all",
      currentProjectName: "全部",
    };
  },
  emits: ["menuDrawer", "clickPorject"],
  components: {
    TodoList,
    PageHeader,
    ProjectList,
  },
  methods: {
    handleClose() {
      this.drawer = false;
    },
    onClickProject(projectName, projectId) {
      this.drawer = false;
      this.currentProjectName = projectName;
      this.currentProjectId = projectId;
    },
  },
};
</script>

<style lang="less">
.home {
  display: flex;
  height: 100%;
  .left-todo {
    flex: 1;
    border-radius: 4px;
    border-right: 1px solid var(--border-color);
    overflow: auto;
    margin-right: 10px;
    background-color: var(--card-bg-color);
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .right-todo {
    flex: 3;
    border-radius: 4px;
    .right-todo-list {
      width: 100%;
      height: calc(100% - 70px);
      border-radius: 4px;
      overflow: auto;
      background-color: var(--card-bg-color);
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
.el-drawer {
  width: 100%;
  height: 100%;
  display: flex;
  .el-drawer {
    background-color: var(--card-bg-color);
  }
}
.drawer-body {
  overflow: auto;
}
.drawer-body::-webkit-scrollbar {
  width: 0;
}
</style>