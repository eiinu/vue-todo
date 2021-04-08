<template>
  <section id="left-nav-layout" v-if="screenWidth > 720">
    <Aside />
  </section>

  <el-container>
    <el-main id="left-main">
      <router-view />
    </el-main>
  </el-container>

  <section id="bottom-nav-layout" v-if="screenWidth < 720">
    <Footer />
  </section>
</template>

<script>
import Aside from '@/views/layout/Aside.vue'
import Footer from '@/views/layout/Footer.vue'
export default {
  components: {
    Aside,
    Footer
  },
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

#left-nav-layout {
  width: 80px;
  height: 100vh;
  position: fixed;
  padding: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
  text-align: center;
}

#bottom-nav-layout {
  width: 100vh;
  height: 80px;
  position: fixed;
  padding: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
}
</style>