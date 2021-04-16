<template>
  <div v-bind:class="screenMode">
    <div class="nav-layout">
      <Navigation />
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/layout/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      screenWidth: "",
      screenMode: "",
    };
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    if (this.screenWidth > 720) {
      this.screenMode = "web-big";
    } else if (this.screenWidth > 540) {
      this.screenMode = "web-mid";
    } else {
      this.screenMode = "web-small";
    }
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        if (this.screenWidth > 720) {
          this.screenMode = "web-big";
        } else if (this.screenWidth > 540) {
          this.screenMode = "web-mid";
        } else {
          this.screenMode = "web-small";
        }
      })();
    };
  },
};
</script>

<style>
#main {
  height: 100%;
  right: 0;
  text-align: center;
  position: fixed;
}
.web-big #main,
.web-mid #main {
  left: 80px;
}

.web-small #main {
  left: 0;
  width: 100%;
}

.web-big .nav-layout,
.web-mid .nav-layout {
  width: 80px;
  height: 100%;
  position: fixed;
  padding: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
  text-align: center;
}

.web-small .nav-layout {
  width: 100vw;
  height: 80px;
  position: fixed;
  padding: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
}
</style>