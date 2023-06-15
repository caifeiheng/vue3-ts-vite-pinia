import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components/index'
import '@/styles/index.scss'
import './permisstion'
import pinia from './stores/index'
import element from 'element-plus'
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(gloablComponent)
app.use(element, { locale })
app.use(pinia)
app.use(router)

app.mount('#app')
