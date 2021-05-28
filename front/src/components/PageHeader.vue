<template>
  <div class="pageHeader">
    <i
      class="el-icon-notebook-2 menu-button"
      v-if="showMenu == '1'"
      @click="$emit('menuDrawer')"
    ></i>
    <span class="headerTitle">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String,
    showMenu: String,
  },
};
</script>

<style lang="less">
.pageHeader {
  height: 60px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--card-bg-color);
  .menu-button {
    vertical-align: middle;
    height: 40px;
    color: var(--font-color);
    font-size: 30px;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
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
}

.headerTitle {
  color: var(--font-color);
  text-align: left;
  font-size: 30px;
  overflow: hidden;
  line-height: 40px;
}
</style>