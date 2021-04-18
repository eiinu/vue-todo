<template>
  <div class="home">
    <el-drawer
      v-model="drawer"
      size="60%"
      :withHeader="false"
      :show-close="false"
      :direction="direction"
      :before-close="handleClose"
      destroy-on-close
    >
      <TodoList class="drawer-body" />
    </el-drawer>
    <div class="left-todo">
      <TodoList />
    </div>
    <div class="right-todo">
      <PageHeader
        msg="今日"
        leftButton="1"
        class="pageHeader"
        @menu-drawer="drawer = true"
      />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import PageHeader from "@/components/page/PageHeader.vue";

export default {
  name: "Home",
  data() {
    return {
      drawer: false,
      direction: "ltr",
      booleanFalse: false,
    };
  },
  emits: ["menuDrawer"],
  components: {
    TodoList,
    PageHeader,
  },
  methods: {
    handleClose() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.web-big .home,
.web-mid .home,
.web-small .home {
  display: flex;
  height: 100%;
}

.web-big .home .left-todo,
.web-mid .home .left-todo {
  width: 250px;
  height: 100%;
  border-right: 1px solid #f0f0f0;
}
.web-small .home .left-todo {
  display: none;
}

.web-big .home .right-todo,
.web-mid .home .right-todo {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.web-small .home .right-todo {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.pageHeader {
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
}

.drawer-body {
  overflow: auto;
}
</style>