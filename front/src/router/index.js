import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Habit from '../views/Habit.vue'
import Summary from '../views/Summary.vue'
import Mine from '../views/Mine.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/habit',
    name: 'Habit',
    component: Habit
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
