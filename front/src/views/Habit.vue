<template>
  <div class="habit">
    <div class="habit-top">
      <PageHeader msg="习惯打卡" class="pageHeader" />
      <div class="habit-nav">
        <p>进行中</p>
        <p>已归档</p>
      </div>
    </div>
    <div class="habit-page">
      <i class="el-icon-circle-plus-outline add-habit-button"></i>
      <HabitCard
        class="habit-card"
        v-for="item in cards"
        :key="item"
        :icon="item.icon"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HabitCard from "@/components/habit/HabitCard.vue";

export default {
  name: "Habit",
  data() {
    return {
      data: {
        progress: 55,
        activeTabName: "first",
      },
      cards1: [],
      cards2: [],
      cards: [
        {
          title: "跑步",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "背单词",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "早起",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "每日总结",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "喝水",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "跑步",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "背单词",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "早起",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "每日总结",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "喝水",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "跑步",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "背单词",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "早起",
          icon: "el-icon-bicycle",
          today: false,
          status: false,
        },
        {
          title: "每日总结",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
        {
          title: "喝水",
          icon: "el-icon-bicycle",
          today: false,
          status: true,
        },
      ],
    };
  },
  components: {
    PageHeader,
    HabitCard,
  },
};
</script>

<style lang="less">
.habit {
  width: 100%;
  height: 100%;
  .habit-top {
    width: 100%;
    display: flex;
    border-radius: 4px;
    .habit-nav {
      height: 60px;
      width: 100px;
      background-color: var(--card-bg-color);
      border-radius: 4px;
      p {
        width: 100%;
        text-align: center;
        color: var(--font-color);
        font-size: 15px;
        line-height: 29px;
      }
      p:first-child {
        border-bottom: 2px solid rgba(0, 0, 0, 0.08);
      }
      p:hover {
        cursor: pointer;
      }
    }
    .pageHeader {
      flex: 1;
    }
  }
  .habit-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    width: 100%;
    height: calc(100% - 70px);
    background-color: var(--card-bg-color);
    border-radius: 4px;
    .add-habit-button {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 80px;
      color: var(--theme-color);
    }
    .habit-card {
      width: 120px;
      height: 120px;
      margin: 10px;
      border-radius: 20px;
      background-color: pink;
    }
  }
}
</style>