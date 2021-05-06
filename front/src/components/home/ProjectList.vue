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
          @contextmenu.prevent=""
        />
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
      projectOrder: "time",
      data: [
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
      ],
    };
  },
  created() {
    this.$axios
      .get("api/getproject", {
        params: {
          uid: "windmill",
        },
      })
      .then((res) => {
        this.data = res.data.data;
      });
  },
  name: "Project",
  components: {
    ProjectItem,
  },
  methods: {
    addNewProject() {
      if (this.addInput != "") {
        this.$axios
          .post("api/addproject", {
            uid: "windmill",
            title: this.addInput,
          })
          .then((res) => {
            this.data.push(res.data.data);
          });
        this.addInput = "";
      }
    },
  },
};
</script>

<style>
.project-page {
  margin: 10px;
}
.project-input {
  margin-bottom: 20px;
}
</style>