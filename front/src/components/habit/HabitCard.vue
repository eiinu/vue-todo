<template>
  <div @click="changeTodayStatus()" @contextmenu.prevent.stop="rightClickCard">
    <i class="el-icon-circle-check" v-show="this.todayStatus"></i>
    <i :class="icon + ' card-icon'"></i>
    <span class="card-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    hid: String,
    icon: String,
    title: String,
    today: Boolean,
  },
  data() {
    return {
      data: [],
      hidCopy: this.hid,
      todayStatus: this.today,
    };
  },
  methods: {
    changeTodayStatus() {
      this.todayStatus = !this.todayStatus;
      this.$axios
        .post("api/habit/changestatus", {
          hid: this.hidCopy,
          today: this.todayStatus,
        })
        .then(
          (res) => {
            console.log(res.data.data);
            if (this.todayStatus === true) {
              this.$message({
                type: "success",
                message: "打卡成功!",
              });
            } else {
              this.$message({
                type: "success",
                message: "取消打卡",
              });
            }
          },
          () => {
            console.log("error");
          }
        );
    },
    rightClickCard() {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post("api/habit/deletecard", {
              hid: this.hidCopy,
            })
            .then((res) => {
              if (res.data.code === 200) {
                this.$emit("delete-card", this.hidCopy);
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less">
.habit-card {
  position: relative;
  border-radius: 20px;
  background-color: var(--card-bg-color);
  &:hover {
    cursor: pointer;
  }
  .el-icon-circle-check {
    font-size: 20px;
    position: absolute;
    left: 5px;
    top: 5px;
    color: var(--theme-color);
  }
  .card-icon {
    color: var(--font-color);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    font-size: 80px;
  }
  .card-title {
    position: absolute;
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10%);
  }
}
</style>