<template>
  <div class="todoList">
    <div class="input-add" v-if="projectId != 'favorite'">
      <el-input
        v-model="addInput"
        placeholder="输入内容添加任务"
        @keyup.enter="addNewItem()"
      ></el-input>
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
          :title="item.title"
          :status="item.status"
          :ctime="item.ctime"
          :favorite="item.favorite"
          @click-button="
            item.status = 1;
            changeItem(item);
            dataChange();
          "
          @click-favorite="
            item.favorite = item.favorite == 1 ? 0 : 1;
            changeItem(item);
          "
          @contextmenu.prevent.stop="this.changeCard(item, $event)"
        />
      </div>
      <span class="category-done">已完成</span>
      <div class="todo-list">
        <TodoItem
          class="todo-item"
          v-for="item in data.list"
          :key="item"
          v-show="item.status == 1"
          :title="item.title"
          :status="item.status"
          :ctime="item.ctime"
          :favorite="item.favorite"
          @click-button="
            item.status = 0;
            changeItem(item);
            dataChange();
          "
          @click-favorite="
            item.favorite = item.favorite == 1 ? 0 : 1;
            changeItem(item);
          "
          @contextmenu.prevent.stop="this.changeCard(item, $event)"
        />
      </div>
    </div>
    <div
      class="change-card-bg"
      v-if="changeCardShow"
      @click="this.closeChangeCard($event)"
      @contextmenu.prevent.stop="this.closeChangeCard($event)"
    >
      <div
        ref="changeCardMsk"
        class="item-change-card"
        :style="changeCardData.style"
        v-if="changeCardShow"
      >
        <ul>
          <li class="card-item delete-card" @click="deleteItem()">
            <span>删除</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/home/TodoItem.vue";
export default {
  data() {
    return {
      addInput: "",
      changeCardShow: false,
      changeCardData: {
        itemIndex: 0,
        cid: "",
        title: "",
        ctime: 0,
        style: {
          width: "100px",
          height: "44px",
          left: "0px",
          top: "0px",
        },
      },
      data: {
        progress: 33,
        sum: 3,
        done: 1,
        list: [
          {
            pid: "",
            cid: "",
            title: "第一个任务",
            ctime: 1,
            status: 1,
            favorite: 1,
          },
          {
            pid: "",
            cid: "",
            title: "第二个任务",
            ctime: 1,
            status: 0,
            favorite: 1,
          },
          {
            pid: "",
            cid: "",
            title: "第三个任务",
            ctime: 1,
            status: 0,
            favorite: 0,
          },
        ],
      },
    };
  },
  components: {
    TodoItem,
  },
  props: {
    projectId: String,
  },
  emits: ["clickButton", "clickFavorite"],
  methods: {
    changeCard(item, event) {
      const cWidth = document.body.clientWidth;
      const cHeight = document.body.clientHeight;
      const cardWidth = parseInt(this.changeCardData.style.width);
      const cardHeight = parseInt(this.changeCardData.style.height);
      if (event.clientX + cardWidth > cWidth) {
        let left = event.clientX > cardWidth ? event.clientX - cardWidth : 0;
        this.changeCardData.style.left = left + "px";
      } else {
        this.changeCardData.style.left = event.clientX + "px";
      }

      if (event.clientY + cardHeight > cHeight) {
        let top = event.clientY > cardHeight ? event.clientY - cardHeight : 0;
        this.changeCardData.style.top = top + "px";
      } else {
        this.changeCardData.style.top = event.clientY + "px";
      }
      this.changeCardData.cid = item.cid;
      this.changeCardData.title = item.title;
      this.changeCardData.ctime = item.ctime;
      if (!this.changeCardShow) this.changeCardShow = true;
    },
    closeChangeCard(event) {
      if (!this.$refs.changeCardMsk.contains(event.target)) {
        this.changeCardShow = false;
      }
    },
    deleteItem() {
      let index = 0;
      for (let i = 0; i < this.data.list.length; ++i) {
        if (this.data.list[i].cid == this.changeCardData.cid) {
          index = i;
          break;
        }
      }
      this.$axios
        .post("api/deleteitem", {
          uid: "windmill",
          pid: this.data.list[index].pid,
          cid: this.data.list[index].cid,
        })
        .then((res) => {
          console.log(res.data.data);
          this.data.list.splice(index, 1);
          this.dataChange();
          this.changeCardShow = false;
        });
    },
    addNewItem() {
      if (this.addInput != "") {
        this.$axios
          .post("api/additem", {
            uid: "windmill",
            pid: this.projectId,
            title: this.addInput,
          })
          .then((res) => {
            this.data.list.push(res.data.data);
            this.dataChange();
            console.log(res.data.data);
          });
        this.addInput = "";
      }
    },
    changeItem(item) {
      this.$axios
        .post("api/changeitem", {
          uid: "windmill",
          pid: item.pid,
          cid: item.cid,
          status: item.status,
          favorite: item.favorite,
          title: item.title,
          ctime: item.ctime,
        })
        .then((res) => {
          console.log(res.data.data);
        });
    },
    dataChange() {
      this.data.sum = this.data.list.length;
      let count = 0;
      for (let i = 0; i < this.data.sum; ++i) {
        if (this.data.list[i].status == 1) count++;
      }
      this.data.done = count;
      if (this.data.sum == 0) this.data.progress = 0;
      else
        this.data.progress = Math.floor((this.data.done / this.data.sum) * 100);
    },
  },
  watch: {
    projectId: {
      handler(newVal) {
        if (newVal) {
          this.$axios
            .get("api/getitem", {
              params: {
                uid: "windmill",
                pid: newVal,
              },
            })
            .then((res) => {
              this.data.list = res.data.data;
              this.dataChange();
            });
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less">
.todoList {
  color: var(--font-color);
  padding: 10px;
  display: block;
  overflow: auto;
  .el-input__inner {
    background-color: var(--card-bg-color);
  }
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
  .el-progress-bar__outer {
    background-color: var(--progress-bg-color);
  }
  .el-progress-bar__inner.el-progress-bar__inner.el-progress-bar__inner {
    background-color: var(--theme-color);
  }
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
  height: 50px;
  background: var(--card-bg-color);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
}
.todo-item:hover {
  background-color: var(--hover-bg-color);
}
.item-change-card {
  position: fixed;
  z-index: 99999;
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}
.change-card-bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: transparent;
}
.card-item {
  width: 100%;
  padding: 10px;
  background-color: var(--card-bg-color);
}
.card-item:hover {
  background-color: var(--hover-bg-color);
}
</style>