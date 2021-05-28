<template>
  <div :class="status == 0 ? 'item-undo' : 'item-done'">
    <img
      class="icon-check"
      src="@/assets/icon/circle-undo.svg"
      alt=""
      @click="$emit('clickButton')"
      v-show="status == 0"
    />
    <img
      class="icon-check"
      src="@/assets/icon/circle-done.svg"
      alt=""
      @click="$emit('clickButton')"
      v-show="status == 1"
    />
    <!-- <input class="todo-name" type="text" :value="title" /> -->
    <span class="todo-name">{{ title }}</span>
    <i
      class="el-icon-star-off icon-favorite icon-favorite0"
      @click="$emit('clickFavorite')"
      v-if="favorite == 0"
    ></i>
    <i
      class="el-icon-star-on icon-favorite icon-favorite1"
      @click="$emit('clickFavorite')"
      v-if="favorite == 1"
    ></i>
    <span class="todo-time">{{ stampToTime(ctime) }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
    status: Number,
    ctime: Number,
    favorite: Number,
  },
  methods: {
    stampToTime(ctime) {
      let date = new Date(ctime);
      let m = date.getMonth() + 1;
      let d = date.getDate();
      if (d < 10) {
        d = " " + d;
      }
      return m + "月 " + d + "日";
    },
  },
};
</script>

<style lang="less">
.todo-item img {
  /* vertical-align: middle; */
  box-sizing: border-box;
  padding: 5px;
  height: 100%;
}
.todo-item .icon-check {
  float: left;
}
.todo-item .icon-favorite {
  float: right;
  text-align: center;
  &.icon-favorite0 {
    font-size: 24px;
    padding: 3px;
  }
  &.icon-favorite1 {
    font-size: 30px;
  }
}

.todo-name {
  margin-left: 10px;
  vertical-align: middle;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  float: left;
}

.todo-time {
  vertical-align: middle;
  line-height: 30px;
  font-size: 15px;
  width: 80px;
  float: right;
}
.item-done .todo-name {
  text-decoration: line-through;
}
</style>