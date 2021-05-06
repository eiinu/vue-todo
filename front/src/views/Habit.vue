<template>
  <div class="habit">
    <PageHeader msg="习惯打卡" />
    <div class="habit-page">
      <div class="habit-header">
        <span class="category">今日进度 </span>
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="data.progress"
          status="success"
          class="progressbar"
        ></el-progress>
      </div>
      <div class="habit-cards">
        <ul>
          <li class="habit-card">1</li>
          <li class="habit-card">2</li>
          <li class="habit-card">3</li>
          <li class="habit-card">4</li>
          <li class="habit-card">5</li>
          <li class="habit-card">6</li>
          <li class="habit-card">7</li>
          <li class="habit-card">8</li>
          <li class="habit-card">1</li>
          <li class="habit-card">2</li>
          <li class="habit-card">3</li>
          <li class="habit-card">4</li>
          <li class="habit-card">5</li>
          <li class="habit-card">6</li>
          <li class="habit-card">7</li>
          <li class="habit-card">8</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "Habit",
  data() {
    return {
      data: {
        progress: 55,
      },
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style>
/* * {
  outline: 1px solid #ff0000;
} */
.habit-page {
  box-sizing: border-box;
  position: fixed;
  top: 60px;
  height: calc(100% - 60px);
  padding: 10px;
  overflow: auto;
}
.habit-page:before,
.habit-page:after {
  content: "";
  display: table;
  clear: both;
}
.web-big .habit-page,
.web-mid .habit-page {
  width: calc(100% - 80px);
}
.web-small .habit-page {
  height: calc(100% - 140px);
  width: 100%;
}

.habit-header {
  margin-bottom: 10px;
}
.habit-card {
  float: left;
  box-sizing: border-box;
  margin: 5px;
  height: 150px;
  background-color: pink;
  border-radius: 10px;
}
.web-big .habit-card,
.web-mid .habit-card {
  width: 150px;
}

.web-small .habit-card {
  width: calc(100% / 3 - 10px);
}
</style>