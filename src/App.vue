<template>
  <div>
    <section id="left-nav" v-if="screenWidth > 720">
      <nav>
        <li>
          <router-link to="/">清单</router-link>
        </li>
        <li>
          <router-link to="/habit">习惯</router-link>
        </li>
        <li>
          <router-link to="/summary">总结</router-link>
        </li>
        <li>
          <router-link to="/mine">我的</router-link>
        </li>
      </nav>
    </section>
    
    <el-container>
      <el-main id="left-main">
        <router-view />
      </el-main>
      <el-main id="right-main">
        <BlankPage />
      </el-main>
    </el-container>
    <section id="bottom-nav" v-if="screenWidth < 720">
      <nav>
        <router-link to="/">清单</router-link> |
        <router-link to="/habit">习惯</router-link> |
        <router-link to="/summary">总结</router-link> |
        <router-link to="/mine">我的</router-link>
      </nav>
    </section>
  </div>
</template>

<script>
import BlankPage from '@/components/Blank.vue'
export default {
  name: "index",
  components: BlankPage,
  data() {
    return {
      screenWidth: "",
      fullWidth: 0,
    };
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 19px;
  height: 100%;
  width: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

#left-main {
  background-color: #a3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}
#right-main {
  background-color: #b3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

#main {
  padding: 0;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  top: 0;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

#left-nav li {
  list-style: none;
}

#left-nav {
  width: 80px;
  position: fixed;
  padding: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

#bottom-nav {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: #d3dce6;
  z-index: 1000;
}
</style>
