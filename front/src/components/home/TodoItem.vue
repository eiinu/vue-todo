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
    <img
      class="icon-favorite"
      src="@/assets/icon/favorite.svg"
      @click="$emit('clickFavorite')"
      alt=""
      v-show="favorite == 0"
    />
    <img
      class="icon-favorite"
      src="@/assets/icon/favorite-black.svg"
      @click="$emit('clickFavorite')"
      alt=""
      v-show="favorite == 1"
    />
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
      return m + "月" + d + "日";
    },
  },
};
</script>

<style>
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