<template>
  <div class="habit">
    <div class="habit-top">
      <PageHeader msg="习惯打卡" class="pageHeader" />
    </div>
    <div class="habit-page">
      <i
        class="el-icon-circle-plus-outline add-habit-button"
        @click="dialogVisible = true"
      ></i>
      <HabitCard
        class="habit-card"
        v-for="item in cards"
        :key="item"
        :icon="item.icon"
        :title="item.title"
        :today="item.today"
        :hid="item.hid"
        @delete-card="deleteCard"
      />
      <i class="blank-card"></i><i class="blank-card"></i
      ><i class="blank-card"></i><i class="blank-card"></i
      ><i class="blank-card"></i><i class="blank-card"></i>
    </div>
    <div class="habit-add-page">
      <el-dialog title="添加习惯" v-model="dialogVisible" width="75%">
        <AddCard @add-new-card="addNewCard" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HabitCard from "@/components/habit/HabitCard.vue";
import AddCard from "@/components/habit/AddCard.vue";

export default {
  name: "Habit",
  data() {
    return {
      data: {},
      dialogVisible: false,
      cards: [],
    };
  },
  created() {
    this.$axios.get("api/habit/getall").then(
      (res) => {
        this.cards = res.data.data[0];
        let r = res.data.data[1];
        let todays = [];
        for (let i = 0; i < r.length; i++) {
          todays.push(r[i].hid);
        }
        for (let i = 0; i < this.cards.length; i++) {
          if (todays.indexOf(this.cards[i].hid) > -1) {
            this.cards[i].today = true;
          } else {
            this.cards[i].today = false;
          }
        }
      },
      () => {
        this.cards = [
          {
            ctime: 1622273983158,
            hid: "08732560c05111eb87da6fe11c1b9dfb",
            icon: "el-icon-tableware",
            status: 1,
            title: "好好干饭",
            today: true,
          },
          {
            ctime: 1622274034561,
            hid: "27169f10c05111eb87da6fe11c1b9dfb",
            icon: "el-icon-message",
            status: 1,
            title: "查看邮件",
            today: false,
          },
          {
            ctime: 1622274935562,
            hid: "402076a0c05311eb87da6fe11c1b9dfb",
            icon: "el-icon-coffee-cup",
            status: 1,
            title: "喝水",
            today: true,
          },
        ];
      }
    );
  },
  emits: ["add-new-card", "delete-card"],
  components: {
    PageHeader,
    HabitCard,
    AddCard,
  },
  methods: {
    addNewCard(args) {
      this.dialogVisible = false;
      this.$axios
        .post("api/habit/createhabit", {
          title: args[0],
          icon: args[1],
        })
        .then((res) => {
          this.cards.unshift(res.data.data);
        });
    },
    deleteCard(arg) {
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].hid === arg) {
          this.cards.splice(i, 1);
          break;
        }
      }
    },
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
      // background-color: pink;
      &:hover {
        cursor: pointer;
      }
      position: absolute;
      z-index: 99999;
      right: 10px;
      bottom: 10px;
      font-size: 80px;
      color: var(--theme-color);
    }
    .habit-card {
      width: 120px;
      height: 120px;
      margin: 10px;
      &:hover {
        background-color: var(--hover-bg-color);
      }
    }
    .blank-card {
      width: 120px;
      margin: 10px;
    }
  }
}
</style>