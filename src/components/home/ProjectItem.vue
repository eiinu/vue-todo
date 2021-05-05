<template>
  <div class="project-item">
    <span class="project-name">{{ projectName }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    projectName: String,
  },
};
</script>

<style>
.project-item {
  height: 50px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  text-align: left;
  font-size: 20px;
  line-height: 50px;
  text-indent: 1em;
  overflow: hidden;
  border-radius: 18px;
  background-color: #ffffff;
  margin: 10px 0;
}
.project-item:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>