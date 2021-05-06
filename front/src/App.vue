<template>
  <div>
    <Layout />
  </div>
</template>

<script>
import Layout from "@/views/layout/Index.vue";
export default {
  name: "app",
  components: {
    Layout,
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
</style>
