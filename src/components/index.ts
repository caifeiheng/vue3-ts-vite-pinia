import SvgIcon from '@/components/SvgIcon/index.vue'
//引入全部路由组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGloablComponent:any ={SvgIcon}
export default{
  install(app:any){
    Object.keys(allGloablComponent).forEach(key=>{
      app.component(key , allGloablComponent[key])
    })
    //全部注册成全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}