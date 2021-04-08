<template>
  <div id="left-nav">
    <div>
      <img
        src="http://pp.myapp.com/ma_icon/0/icon_11214121_1612157069/256"
        alt=""
        class="nav-logo"
      />
    </div>
    <ul>
      <li>
        <router-link to="/">
          <div class="nav-item">
            <img src="@/assets/icon/check-item.svg" alt="" class="nav-icon" />
            <p>清单</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/habit">
          <div class="nav-item">
            <img src="@/assets/icon/calendar.svg" alt="" class="nav-icon" />
            <p>习惯</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/summary">
          <div class="nav-item">
            <img src="@/assets/icon/chart-pie.svg" alt="" class="nav-icon" />
            <p>数据</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <div class="nav-item">
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
};
</script>

<style>
#left-nav .nav-item {
  padding: 10px;
  width: 60px;
  height: 60px;
  text-align: center
}
.nav-item:hover {
  background-color: #D3D3D3;
}

a,
a:visited,
a:hover,
a:link,
a:active  {
    color: #000;
    text-decoration: none;
}

.nav-logo {
  width: 60px;
  height: 60px;
}
.nav-icon {
  width: 25px;
  height: 25px;
}

#left-nav {
  padding-top: 20px;
  padding-bottom: 20px;
}
#left-nav li {
  padding-top: 20px;
}

#router-link {
  color: blue;
}
</style>