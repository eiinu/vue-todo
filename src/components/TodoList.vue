<template>
  <div class="todoList">
    <div class="input-add">
      <el-input v-model="addInput" placeholder="输入内容添加项目"></el-input>
    </div>
    <div>
      <span class="category">任务进度 </span>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="data.progress"
        status="success"
        class="progressbar"
      ></el-progress>
    </div>
    <div class="todo-containter">
      <span class="category-do">未完成</span>
      <div class="todo-list">
        <TodoItem
          class="todo-item"
          v-for="item in data.list"
          :key="item"
          v-show="item.status == 0"
          :name="item.name"
          :status="item.status"
          :ddlTime="item.ddlTime"
          @click-button="
            item.status = 1;
            data.done += 1;
            data.progress = Math.floor((data.done / data.sum) * 100);
          "
        />
      </div>
      <span class="category-done">已完成</span>
      <div class="todo-list">
        <TodoItem
          class="todo-item"
          v-for="item in data.list"
          :key="item"
          v-show="item.status == 1"
          :name="item.name"
          :status="item.status"
          :ddlTime="item.ddlTime"
          @click-button="
            item.status = 0;
            data.done -= 1;
            data.progress = Math.floor((data.done / data.sum) * 100);
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  data() {
    return {
      addInput: "",
      data: {
        progress: 46,
        sum: 13,
        done: 6,
        list: [
          {
            name:
              "这一项任务的名字是超级长的，还不够长，再加点这一项任务的名字是超级长的，还不够长，再加点",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "写作业",
            desc: "编译原理作业",
            ddlTime: 1618572859,
            status: 1,
          },
          {
            name: "洗衣服",
            desc: "",
            ddlTime: 1618572859,
            status: 1,
          },
          {
            name: "做实验",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 1,
          },
          {
            name: "写作业",
            desc: "编译原理作业",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "洗衣服",
            desc: "",
            ddlTime: 1618572859,
            status: 1,
          },
          {
            name: "做实验",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "做实验",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "做实验",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "做实验",
            desc: "编译原理实验",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "写作业",
            desc: "编译原理作业",
            ddlTime: 1618572859,
            status: 0,
          },
          {
            name: "洗衣服",
            desc: "",
            ddlTime: 1618572859,
            status: 1,
          },
          {
            name: "这是最后一项任务",
            desc: "编译原理作业",
            ddlTime: 1618572859,
            status: 1,
          },
        ],
      },
    };
  },
  components: {
    TodoItem,
  },
  props: {
    listId: String,
  },
  emits: ["clickButton"],
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.todoList {
  padding: 10px;
  display: block;
  overflow: auto;
  padding-bottom: 100px;
}

.todoList .input-add {
  margin-top: 10px;
  margin-bottom: 10px;
}

.category,
.category-do,
.category-done {
  display: flex;
  text-align: left;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.progressbar {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 4px;
}

.filters {
  display: flex;
  margin: 20px 2px;
  font-size: 16px;
}

.filters .filter {
  margin-right: 10px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}

.todo-list {
  margin-left: 10px;
  margin-right: 10px;
}

.todo-item {
  height: 30px;
  background: white;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
}
.todo-item:hover {
  background-color: #f5f5f5;
}
</style>