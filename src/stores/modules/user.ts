// 引入创建仓库宏函数
import { defineStore } from "pinia";
// 引入登陆请求接口
import {reqLogin,reqUserInfo,reqLogout} from '@/api/user/index'
//引入用户相关的数据类型
import type {loginFormData,loginResponseData,userInforResponseData} from '@/api/user/type'
//引入路由数据
import {constantRoute} from '@/router/routers'
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
  //声明变量接收用户昵称和头像
  let username = ref('')
  let avatar = ref('')
  const userInfor = async()=>{
    let res:userInforResponseData = await reqUserInfo()
    if(res.code == 200){
      username.value = res.data.name
      avatar.value = res.data.avatar
      return 'ok'
    }else{
      return Promise.reject(new Error(res.message))
    }
  }
  const menuRoutes = constantRoute
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
