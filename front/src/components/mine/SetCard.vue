<template>
  <div class="set-card">
    <div class="set-line">
      <span>夜间模式</span>
      <el-switch
        v-model="theme"
        :active-color="themeColor"
        inactive-color="#d3d3d3"
        @change="changeTheme"
      >
      </el-switch>
    </div>
    <div class="set-line">
      <span>设置主题颜色</span>
      <el-color-picker
        v-model="themeColor"
        @change="changeThemeColor"
      ></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetCard",
  data() {
    return {
      data: [],
      theme: localStorage.theme === "dark",
      themeColor: localStorage.themeColor,
    };
  },
  methods: {
    changeTheme: function (newVal) {
      // 全局切换夜间模式
      const html = document.getElementById("html");
      const themeIcon = document.getElementById("theme-icon");
      if (newVal && localStorage.theme === "light") {
        localStorage.theme = "dark";
        html.attributes["data-theme"].nodeValue = "dark";
        themeIcon.className = "data-theme el-icon-moon";
      } else {
        localStorage.theme = "light";
        html.attributes["data-theme"].nodeValue = "light";
        themeIcon.className = "data-theme el-icon-sunny";
      }
    },
    changeThemeColor: function (newVal) {
      document.documentElement.style.setProperty("--theme-color", newVal);
      this.themeColor = newVal;
      localStorage.themeColor = newVal;
    },
  },
};
</script>

<style lang="less">
.set-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .set-line {
    display: flex;
    padding: 10px;
    font-size: 20px;
    line-height: 40px;
    color: var(--font-color);
    border-top: 1px solid var(--border-color);
    justify-content: space-between;
    .el-switch {
      margin: auto 0;
    }
    .el-color-picker__trigger {
      border: none;
      .el-color-picker__color {
        border: none;
      }
      .el-icon-arrow-down::before {
        content: "";
      }
    }
  }
}
</style>