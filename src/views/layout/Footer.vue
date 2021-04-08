<template>
  <div id="bottom-nav">
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
            <p>统计</p>
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

}
</script>

<style>
#bottom-nav ul{
    height: 80px;
    width: 100%;
    display: flex;
}
#bottom-nav li {
    display: flex;
    flex: 1;
    float: left;
    list-style: none;
}
#bottom-nav .nav-item {
    width: 25vw;
    height: 60px;
    padding: 10px 0 10px 0;
}
</style>