<template>
  <div class="nav">
    <Navigation />
  </div>
  <div class="main">
    <router-view class="main-router" />
  </div>
</template>

<script>
import Navigation from "@/views/Navigation.vue";
export default {
  name: "app",
  components: {
    Navigation,
  },
};
</script>

<style lang="less">
:root {
  --card-bg-color: #ffffff;
  --page-bg-color: #f5f5f5;
  --font-color: #333333;
  --hover-bg-color: #f2f2f2;
  --icon-color: #000;
  --border-color: #f5f5f5;
  --progress-bg-color: #ebeef5;
  --theme-color: #ef8833;
}
html[data-theme="dark"] {
  --card-bg-color: #16161a;
  --page-bg-color: #0c0c0c;
  --font-color: #d3d3d3;
  --hover-bg-color: #25252b;
  --icon-color: #fff;
  --border-color: #202025;
  --progress-bg-color: #202025;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--page-bg-color);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--font-color);
}
li {
  list-style: none;
}
a,
a:visited,
a:hover,
a:link,
a:active {
  color: #000;
  text-decoration: none;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.nav {
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 999;
}
.main {
  display: flex;
  width: 100%;
  position: fixed;
  padding: 10px;
  height: calc(100% - 60px);
  top: 60px;
  justify-content: space-around;
  background-color: var(--page-bg-color);
}

@media screen and (max-width: 579px) {
  .nav {
    bottom: 0;
    .nav-logo,
    .data-theme {
      display: none;
    }
    .nav-nav {
      width: 100%;
      .active-tab .nav-border {
        border-top: 2px solid #ef8833;
      }
    }
  }
  .main {
    top: 0;
    padding: 0;
    height: calc(100% - 60px);
    .main-router {
      width: 100%;
    }
  }
  .left-todo {
    display: none;
  }
}
@media screen and (min-width: 580px) {
  .nav {
    top: 0;
    border-top: 2px solid var(--theme-color);
    .nav-nav {
      width: 100%;
      .active-tab .nav-border {
        border-bottom: 2px solid var(--theme-color);
      }
    }
  }
  .main {
    .main-router {
      width: 100%;
    }
    .habit {
      width: 570px;
    }
  }
  .pageHeader {
    margin-bottom: 10px;
    i {
      display: none;
    }
  }
  .habit-nav {
    margin-left: 10px;
  }
}
@media screen and (min-width: 980px) {
  .nav {
    top: 0;
    border-top: 2px solid var(--theme-color);
    .nav-nav {
      width: 970px;
      .active-tab .nav-border {
        border-bottom: 2px solid var(--theme-color);
      }
    }
  }
  .main {
    .main-router {
      width: 970px;
    }
  }
  .pageHeader {
    margin-bottom: 10px;
    i {
      display: none;
    }
  }
  .habit-nav {
    margin-left: 10px;
  }
}
</style>
