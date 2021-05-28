<template>
  <div class="navigation">
    <i class="el-icon-news nav-logo"></i>
    <div class="nav-nav">
      <router-link to="/" active-class="active-tab">
        <div class="nav-border">
          <div class="nav-item" title="清单">
            <i class="el-icon-notebook-1 nav-icon"></i>
          </div>
        </div>
      </router-link>
      <router-link to="/habit" active-class="active-tab">
        <div class="nav-border">
          <div class="nav-item" title="打卡">
            <i class="el-icon-date nav-icon"></i>
          </div>
        </div>
      </router-link>
      <router-link to="/summary" active-class="active-tab">
        <div class="nav-border">
          <div class="nav-item" title="统计">
            <i class="el-icon-pie-chart nav-icon"></i>
          </div>
        </div>
      </router-link>
      <router-link to="/mine" active-class="active-tab">
        <div class="nav-border">
          <div class="nav-item" title="我的">
            <i class="el-icon-user nav-icon"></i>
          </div>
        </div>
      </router-link>
    </div>
    <i title="切换主题" @click="changeTheme" :class="dataThemeClass"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navChoosen: "home",
      dataThemeClass: ["data-theme", "el-icon-sunny"],
    };
  },
  methods: {
    changeTheme: function () {
      // 全局切换夜间模式
      let html = document.getElementById("html");
      if (html.attributes["data-theme"].nodeValue == "dark") {
        html.attributes["data-theme"].nodeValue = "light";
        this.dataThemeClass[1] = "el-icon-sunny";
      } else {
        html.attributes["data-theme"].nodeValue = "dark";
        this.dataThemeClass[1] = "el-icon-moon";
      }
    },
  },
};
</script>

<style lang="less">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card-bg-color);
  .nav-logo {
    margin-left: 30px;
    font-size: 40px;
    color: var(--icon-color);
  }
  .data-theme {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 30px;
    color: var(--icon-color);
    &:hover {
      cursor: pointer;
    }
  }
  .nav-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    color: var(--font-color);

    .active-tab .nav-item .nav-icon {
      color: var(--theme-color);
    }
    a {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      .nav-border {
        display: flex;
        height: 100%;
        align-items: center;
      }
      .nav-item {
        width: 70px;
        border-radius: 6px;
        padding: 5px;
        text-align: center;
        .nav-icon {
          font-size: 30px;
          color: var(--icon-color);
        }
      }
      .nav-item:hover {
        background-color: var(--hover-bg-color);
      }
    }
  }
}
</style>