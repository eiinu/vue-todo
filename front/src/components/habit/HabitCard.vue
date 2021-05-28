<template>
  <div>
    <i :class="icon + ' card-icon'"></i>
    <span class="card-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style lang="less">
.habit-card {
  position: relative;
  .card-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    font-size: 80px;
  }
  .card-title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>