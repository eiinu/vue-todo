<template>
  <div class="add-card">
    <div class="add-card-header">
      <el-input
        @keyup.enter="onEnterPressed()"
        v-model="addInput"
        placeholder="输入习惯名称"
      ></el-input>
      <el-button @click="onEnterPressed()">确认</el-button>
    </div>

    <div class="select-icon">
      <i
        v-for="item in icons"
        :key="item"
        :class="[item, 'icon', item == selectedIcon ? 'selected-icon' : ' ']"
        @click="selectCard(item)"
      ></i>
      <i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i
      ><i class="blank-icon"></i><i class="blank-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCard",
  data() {
    return {
      data: {},
      selectedIcon: "el-icon-help",
      icons: [
        "el-icon-help",
        "el-icon-bell",
        "el-icon-mouse",
        "el-icon-coordinate",
        "el-icon-video-camera",
        "el-icon-picture-outline-round",
        "el-icon-cpu",
        "el-icon-connection",
        "el-icon-discount",
        "el-icon-present",
        "el-icon-bank-card",
        "el-icon-money",
        "el-icon-thumb",
        "el-icon-chat-dot-round",
        "el-icon-message",
        "el-icon-postcard",
        "el-icon-time",
        "el-icon-odometer",
        "el-icon-crop",
        "el-icon-aim",
        "el-icon-discover",
        "el-icon-trophy",
        "el-icon-medal",
        "el-icon-place",
        "el-icon-watch",
        "el-icon-lock",
        "el-icon-key",
        "el-icon-service",
        "el-icon-bicycle",
        "el-icon-truck",
        "el-icon-ship",
        "el-icon-basketball",
        "el-icon-football",
        "el-icon-soccer",
        "el-icon-baseball",
        "el-icon-wind-power",
        "el-icon-sunny",
        "el-icon-cloudy",
        "el-icon-dish",
        "el-icon-food",
        "el-icon-chicken",
        "el-icon-fork-spoon",
        "el-icon-knife-fork",
        "el-icon-burger",
        "el-icon-tableware",
        "el-icon-sugar",
        "el-icon-dessert",
        "el-icon-ice-cream",
        "el-icon-hot-water",
        "el-icon-water-cup",
        "el-icon-coffee-cup",
        "el-icon-cold-drink",
        "el-icon-goblet",
        "el-icon-goblet-full",
        "el-icon-refrigerator",
        "el-icon-grape",
        "el-icon-watermelon",
        "el-icon-cherry",
        "el-icon-apple",
        "el-icon-pear",
        "el-icon-orange",
        "el-icon-coffee",
        "el-icon-ice-tea",
        "el-icon-ice-drink",
        "el-icon-milk-tea",
        "el-icon-potato-strips",
        "el-icon-lollipop",
        "el-icon-ice-cream-round",
      ],
      addInput: "",
    };
  },
  methods: {
    selectCard(item) {
      this.selectedIcon = item;
    },
    onEnterPressed() {
      if (this.addInput !== "") {
        this.$emit("add-new-card", [this.addInput, this.selectedIcon]);
        this.addInput = "";
      }
    },
  },
};
</script>

<style lang="less">
.el-dialog.el-dialog {
  background-color: var(--card-bg-color);
}
.el-dialog__title.el-dialog__title {
  color: var(--font-color);
}
.el-button.el-button.el-button {
  color: var(--font-color);
  background-color: var(--card-bg-color);
}
.add-card {
  .el-input__inner.el-input__inner {
    background-color: var(--card-bg-color);
  }
  .add-card-header {
    display: flex;
    .el-input {
      margin-right: 10px;
    }
  }
  .select-icon {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .icon {
      color: var(--font-color);
      font-size: 50px;
      padding: 5px;
      border-radius: 4px;
      &:hover {
        cursor: pointer;
      }
    }
    .blank-icon {
      width: 60px;
    }
    .selected-icon {
      background-color: var(--theme-color);
    }
  }
}
</style>