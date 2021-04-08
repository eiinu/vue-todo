<template>
  <div class="pageHeader">
      <img src="@/assets/icon/menu.svg" alt="" @click="clickMenu()">
      <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
  methods: {
    clickMenu:function() {
      console.log('clcik menu')
    }
  }
}
</script>

<style>
.pageHeader {
  height: 50px;
  display: flex;
}

.pageHeader img {
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
}
.pageHeader img:hover {
  background: #F5F5F5;
  cursor: pointer;
}

.web-big .pageHeader img,
.web-mid .pageHeader img {
  display: none;
}
.pageHeader span {
  color: black;
  text-align: left;
  font-size: 40px;
  overflow: hidden;
  margin: auto 10 auto 10;
}

</style>