// 引入创建仓库宏函数
import { defineStore } from "pinia";
// 引入登陆请求接口
import {reqLogin,reqUserInfo,reqLogout} from '@/api/user/index'
//引入用户相关的数据类型
import type {loginFormData,loginResponseData,userInforResponseData} from '@/api/user/type'
//引入路由(常量路由)
import { constantRoute, asnycRoute, anyRoute } from '@/router/routers'

//引入深拷贝方法
import cloneDeep from 'lodash/cloneDeep'
import router from '@/router'
//用于过滤当前用户需要展示的异步路由
function filterAsyncRoute(asnycRoute: any, routes: any) {
  return asnycRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        //硅谷333账号:product\trademark\attr\sku
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}
//引入响应式
import {ref} from 'vue'
export const useLoginStore =  defineStore('login',()=>{
  const userLogin= async (data:loginFormData)=>{
    let result:loginResponseData = await reqLogin(data) 
    let token = localStorage.getItem('TOKEN')
    if (result.code == 200) {
      token = (result.data as string)
      localStorage.setItem('TOKEN',token)
      return 'ok' 
    }else{
      return Promise.reject(result.data)
    } 
  }
  let menuRoutes = ref(constantRoute)
  
  //声明变量接收用户昵称和头像
  let username = ref('')
  let avatar = ref('')
  const userInfor = async()=>{
    let result:userInforResponseData = await reqUserInfo()
    if(result.code == 200){
      username.value = result.data.name
      avatar.value = result.data.avatar
       //计算当前用户需要展示的异步路由
       const userAsyncRoute = filterAsyncRoute(
        cloneDeep(asnycRoute),
        result.data.routes,
      )
      //菜单需要的数据整理完毕
      menuRoutes.value = [...constantRoute, ...userAsyncRoute, anyRoute]
      //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
      ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
        router.addRoute(route)
      })
      return 'ok'
    }else{
      return Promise.reject(new Error(result.message))
    }
  }

  //退出登录逻辑
  const userLogout = async ()=>{
    let res = await reqLogout()
    if(res.code == 200){
      username.value = ''
      avatar.value = ''
      localStorage.removeItem('TOKEN')
      return 'ok'
    }else{
      return Promise.reject(new Error(res.message))
    }
  }
  return {userLogin,userInfor,userLogout,menuRoutes,username,avatar}
})
