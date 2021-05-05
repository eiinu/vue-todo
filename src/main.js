import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './registerServiceWorker'

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
import axios from 'axios'
// import VueAxios from 'vue-axios'
// app.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:3001/'
app.config.globalProperties.$axios = axios