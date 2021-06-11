<template>
  <div class="user-card">
    <img :src="pic" class="user-pic" alt="头像" />
    <div class="user-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    pic: String,
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style lang="less">
.user-card {
  text-align: center;
  padding: 10px;
  .user-pic {
    width: 100px;
    border-radius: 50%;
    border: 1px solid var(--theme-color);
  }
  .user-name {
    margin-top: 5px;
    font-size: 15px;
    color: var(--font-color);
  }
}
</style>