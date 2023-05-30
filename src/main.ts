import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components/index'
import '@/styles/index.scss'
import './permisstion'
import pinia from './stores/index'

const app = createApp(App)

app.use(gloablComponent)

app.use(pinia)
app.use(router)

app.mount('#app')
