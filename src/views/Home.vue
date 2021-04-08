<template>
  <div class="home">
    <section class="left-todo">
      <span>ceshi</span>
      <TodoList/>
    </section>
    <section class="right-todo">
      <TodoList/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>

<style>
.web-big .home,
.web-mid .home {
  display: flex;
}

.web-big .home .left-todo,
.web-mid .home .left-todo{
  width: 240px;
  height: 100vh;
}
.web-small .home .left-todo {
  display: none;
}

.web-big .home .right-todo,
.web-mid .home .right-todo,
.web-small .home .right-todo {
  width: 75%;
  height: 100vh;
}
</style>