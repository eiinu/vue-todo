<template>
  <div id="navigation">
    <div>
      <img src="@/assets/logo.png" alt="" class="nav-logo" />
    </div>
    <ul>
      <li>
        <router-link to="/" @click="routerLink('home')">
          <div
            class="nav-item"
            :class="navChoosen == 'home' ? 'nav-item-current' : 'nav-item'"
          >
            <img src="@/assets/icon/check-item.svg" alt="" class="nav-icon" />
            <p>清单</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/habit" @click="routerLink('habit')">
          <div
            class="nav-item"
            :class="navChoosen == 'habit' ? 'nav-item-current' : 'nav-item'"
          >
            <img src="@/assets/icon/calendar.svg" alt="" class="nav-icon" />
            <p>习惯</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/summary" @click="routerLink('summary')">
          <div
            class="nav-item"
            :class="navChoosen == 'summary' ? 'nav-item-current' : 'nav-item'"
          >
            <img src="@/assets/icon/chart-pie.svg" alt="" class="nav-icon" />
            <p>数据</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/mine" @click="routerLink('mine')">
          <div
            class="nav-item"
            :class="navChoosen == 'mine' ? 'nav-item-current' : 'nav-item'"
          >
            <img src="@/assets/icon/user.svg" alt="" class="nav-icon" />
            <p>我的</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navChoosen: "home",
    };
  },
  methods: {
    routerLink: function (msg) {
      this.navChoosen = msg;
    },
  },
};
</script>

<style>
.web-big #navigation .nav-item,
.web-big #navigation .nav-item-current,
.web-mid #navigation .nav-item,
.web-mid #navigation .nav-item-current {
  padding: 10px;
  width: 60px;
  height: 60px;
  text-align: center;
}

.nav-item-current {
  background-color: #f5f5f5;
}

.nav-item:hover {
  background-color: #f5f5f5;
}

a,
a:visited,
a:hover,
a:link,
a:active {
  color: #000;
  text-decoration: none;
}

.web-big #navigation .nav-logo,
.web-mid #navigation .nav-logo {
  width: 60px;
  height: 60px;
}
.nav-icon {
  width: 25px;
  height: 25px;
}

.web-big #navigation,
.web-mid #navigation {
  padding-top: 20px;
  padding-bottom: 20px;
}
.web-big #navigation li,
.web-mid #navigation li {
  padding-top: 20px;
}

.web-small .nav-logo {
  display: none;
}
.web-small #navigation ul {
  height: 80px;
  width: 100%;
  display: flex;
}
.web-small #navigation li {
  display: flex;
  flex: 1;
  float: left;
  list-style: none;
}
.web-small #navigation .nav-item {
  width: 25vw;
  height: 60px;
  padding: 10px 0 10px 0;
}
</style>