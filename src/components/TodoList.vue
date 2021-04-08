<template>
  <div class="todoList">
    <PageHeader msg="今日" />
    <div class="input">
      <el-input v-model="addInput" placeholder="输入内容添加项目"></el-input>
    </div>
    <div>
      <span class="category">任务进度</span>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="60"
        status="success"
      ></el-progress>
    </div>
    <div>
      <span class="category">未完成</span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <span class="category">已完成</span>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/page/PageHeader.vue";
export default {
  data() {
    return {
      activeName: "first",
      addInput: ""
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>

<style>
.todoList {
  padding: 10px;
}

.todoList .input {
  margin-top: 10px;
  margin-bottom: 10px;
}

.category {
  display: flex;
  text-align: left;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>