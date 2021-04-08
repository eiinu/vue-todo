<template>
  <div id="bottom-nav">
    <ul>
      <li>
        <router-link to="/">
          <div class="nav-item">
            <img src="@/assets/icon/check-item.svg" alt="" class="nav-icon" />
            <br />
            <span>清单</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/habit">
          <div class="nav-item">
            <img src="@/assets/icon/calendar.svg" alt="" class="nav-icon" />
            <br />
            <span>习惯</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/summary">
          <div class="nav-item">
            <img src="@/assets/icon/chart-pie.svg" alt="" class="nav-icon" />
            <br />
            <span>总结</span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <div class="nav-item">
            <img src="@/assets/icon/user.svg" alt="" class="nav-icon" />
            <br />
            <span>我的</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#bottom-nav li {
    float: left;
}
#bottom-nav .nav-item {
    width: 25%;
    height: 60px;
    margin: 10px;
    border-radius: 9px;
    text-align: center
}
</style>