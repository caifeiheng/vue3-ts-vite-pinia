import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components/index'

const app = createApp(App)
app.use(gloablComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
