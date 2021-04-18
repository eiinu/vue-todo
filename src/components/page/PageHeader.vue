<template>
  <div class="pageHeader">
    <img
      src="@/assets/icon/menu.svg"
      v-show="leftButton == '1'"
      alt=""
      @click="$emit('menuDrawer')"
    />
    <span class="headerTitle">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String,
    leftButton: String,
  },
};
</script>

<style>
.pageHeader {
  height: 40px;
  display: flex;
  padding: 10px;
}

.pageHeader img {
  margin-right: 10px;
  vertical-align: middle;
  height: 40px;
}
.pageHeader img:hover {
  background: #f5f5f5;
  cursor: pointer;
}

.web-big .pageHeader img,
.web-mid .pageHeader img {
  display: none;
}
.headerTitle {
  color: black;
  text-align: left;
  font-size: 30px;
  overflow: hidden;
  line-height: 40px;
}
</style>