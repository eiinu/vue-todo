<template>
  <div :class="status == 0 ? 'item-undo' : 'item-done'">
    <img
      src="@/assets/icon/circle-undo.svg"
      alt=""
      @click="$emit('clickButton')"
      v-show="status == 0"
    />
    <img
      src="@/assets/icon/circle-done.svg"
      alt=""
      @click="$emit('clickButton')"
      v-show="status == 1"
    />
    <span class="todo-name">{{ name }}</span>
    <span class="todo-time">{{ stampToTime(ddlTime) }}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    name: String,
    status: Number,
    ddlTime: Number,
  },
  methods: {
    stampToTime(ddlTime) {
      let date = new Date(ddlTime * 1000);
      let m = date.getMonth() + 1;
      let d = date.getDay();
      return m + "月" + d + "日";
    },
  },
};
</script>

<style>
.todo-item img {
  vertical-align: middle;
  text-align: left;
  height: 20px;
  float: left;
}

.todo-name {
  margin-left: 10px;
  vertical-align: middle;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  margin-right: 80px;
}

.todo-time {
  vertical-align: middle;
  line-height: 30px;
  font-size: 15px;
  position: absolute;
  width: 80px;
  right: 0;
}
.item-done .todo-name {
  text-decoration: line-through;
}
</style>