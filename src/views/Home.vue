<template>
  <div class="home">
    <div class="left-todo">nothing</div>
    <div class="right-todo">
      <PageHeader msg="今日" leftButton="1" class="pageHeader" />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import PageHeader from "@/components/page/PageHeader.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    PageHeader,
  },
};
</script>

<style>
.web-big .home,
.web-mid .home {
  display: flex;
  height: 100%;
}

.web-big .home .left-todo,
.web-mid .home .left-todo {
  width: 360px;
  height: 100%;
  float: left;
  border-right: 1px solid #f0f0f0;
}
.web-small .home .left-todo {
  display: none;
}

.web-big .home .right-todo,
.web-mid .home .right-todo {
  width: 100%;
  height: 100%;
}
.web-small .home .right-todo {
  width: 100%;
  height: 100%;
}

.pageHeader {
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
}
</style>