import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'
import * as filters from './filters'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
app.config.globalProperties.$filters = filters