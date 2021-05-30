import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './registerServiceWorker'
import * as echarts from 'echarts'

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
app.config.globalProperties.$echarts = echarts
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'
app.config.globalProperties.$axios = axios
localStorage.themeColor = localStorage.themeColor ? localStorage.themeColor : '#ef8833'
localStorage.theme = localStorage.theme ? localStorage.theme : 'light'