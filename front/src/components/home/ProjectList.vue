<template>
  <div class="project-page">
    <div class="project-input">
      <el-input
        v-model="addInput"
        placeholder="输入内容添加项目"
        @keyup.enter="addNewProject()"
      ></el-input>
    </div>
    <div class="project-containter">
      <div class="project-list">
        <ProjectItem
          projectName="今日"
          @click="$emit('clickProject', '今日', 'today')"
          @contextmenu.prevent=""
        />
        <ProjectItem
          projectName="全部"
          @click="$emit('clickProject', '全部', 'all')"
          @contextmenu.prevent=""
        />
        <ProjectItem
          projectName="收藏"
          @click="$emit('clickProject', '收藏', 'favorite')"
          @contextmenu.prevent=""
        />
      </div>
      <br />
      <div class="project-list">
        <ProjectItem
          v-for="item in data"
          :key="item"
          :projectName="item.title"
          @click="$emit('clickProject', item.title, item.pid)"
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
        ref="changeCardMsk2"
        class="item-change-card"
        :style="projectCard.style"
        v-if="changeCardShow"
      >
        <ul>
          <li class="card-item">
            <div>标题</div>
            <input type="text" :value="projectCard.title" />
          </li>
          <li class="card-item delete-card" @click="deleteProject()">
            <span>删除</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/home/ProjectItem.vue";
export default {
  data() {
    return {
      addInput: "",
      changeCardShow: false,
      projectOrder: "time",
      projectCard: {
        pid: "",
        title: "",
        ctime: "",
        style: {
          width: "200px",
          height: "100px",
          left: "0px",
          top: "0px",
        },
      },
      data: [],
    };
  },
  created() {
    this.$axios
      .get("api/getproject", {
        params: {
          uid: "windmill",
        },
      })
      .then(
        (res) => {
          this.data = res.data.data;
        },
        () => {
          this.data = [
            {
              uid: "",
              pid: "",
              title: "第一个清单",
              ctime: "",
            },
            {
              uid: "",
              pid: "",
              title: "第二个清单",
              ctime: "",
            },
            {
              uid: "",
              pid: "",
              title: "第三个清单",
              ctime: "",
            },
          ];
        }
      );
  },
  name: "Project",
  components: {
    ProjectItem,
  },
  methods: {
    changeCard(item, event) {
      const cWidth = document.body.clientWidth;
      const cHeight = document.body.clientHeight;
      const cardWidth = parseInt(this.projectCard.style.width);
      const cardHeight = parseInt(this.projectCard.style.height);
      if (event.clientX + cardWidth > cWidth) {
        let left = event.clientX > cardWidth ? event.clientX - cardWidth : 0;
        this.projectCard.style.left = left + "px";
      } else {
        this.projectCard.style.left = event.clientX + "px";
      }
      if (event.clientY + cardHeight > cHeight) {
        let top = event.clientY > cardHeight ? event.clientY - cardHeight : 0;
        this.projectCard.style.top = top + "px";
      } else {
        this.projectCard.style.top = event.clientY + "px";
      }
      this.projectCard.pid = item.pid;
      this.projectCard.title = item.title;
      this.projectCard.ctime = item.ctime;
      if (!this.changeCardShow) this.changeCardShow = true;
    },
    closeChangeCard(event) {
      if (!this.$refs.changeCardMsk2.contains(event.target)) {
        this.changeCardShow = false;
      }
    },
    deleteProject() {
      let index = 0;
      for (let i = 0; i < this.data.length; ++i) {
        if (this.data[i].pid == this.projectCard.pid) {
          index = i;
          break;
        }
      }
      this.$axios
        .post("api/deleteproject", {
          uid: "windmill",
          pid: this.data[index].pid,
        })
        .then((res) => {
          console.log(res.data.data);
          this.data.splice(index, 1);
          this.changeCardShow = false;
        });
    },
    addNewProject() {
      if (this.addInput != "") {
        this.$axios
          .post("api/addproject", {
            uid: "windmill",
            title: this.addInput,
          })
          .then((res) => {
            this.data.unshift(res.data.data);
            this.$message({
              type: "success",
              message: "添加成功!",
            });
          });
        this.addInput = "";
      }
    },
  },
};
</script>

<style lang="less">
.project-page {
  margin: 10px;
}
.project-input {
  margin-bottom: 20px;
  .el-input__inner {
    background-color: var(--card-bg-color);
  }
}
.project-containter {
  padding-bottom: 80px;
}
.delete-card:hover {
  cursor: pointer;
}
</style>