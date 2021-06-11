<template>
  <div class="mine">
    <PageHeader msg="我的" class="pageHeader" />
    <div class="mine-page">
      <UserCard pic="/userpic.png" name="水风车" />
      <SetCard />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import UserCard from "@/components/mine/UserCard.vue";
import SetCard from "@/components/mine/SetCard.vue";

export default {
  name: "Mine",
  components: {
    PageHeader,
    UserCard,
    SetCard,
  },
};
</script>

<style lang="less">
.mine {
  width: 100%;
  height: 100%;
  .mine-page {
    width: 100%;
    height: calc(100% - 70px);
    background-color: var(--card-bg-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }
}
</style>