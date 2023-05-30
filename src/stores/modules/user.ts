// 引入创建仓库宏函数
import { defineStore } from "pinia";
// 引入请求数据类型
import type {loginForm,loginResponseData} from '@/api/user/type'
// 引入token数据类型
// import type {userState} from './types/type'
// 引入登陆请求接口
import {reqLogin,reqUserInfo} from '@/api/user/index'
//引入路由数据
import {constantRoute} from '@/router/routers'
//引入响应式
import {ref} from 'vue'
export const useLoginStore =  defineStore('login',()=>{
  const userLogin= async (data:loginForm)=>{
    let result:loginResponseData = await reqLogin(data) 
    let token = localStorage.getItem('TOKEN') || ''
    if (result.code == 200) {
      token = (result.data.token as string)
      localStorage.setItem('TOKEN',token)
      return '登录成功' 
    }else{
      return Promise.reject(result.data.message)
    } 
  }
  //声明变量接收用户昵称和头像
  let username = ref('')
  let avatar = ref('')
  const userInfor = async()=>{
    let res = await reqUserInfo()
    if(res.code == 200){
      username.value = res.data.checkUser.username
      avatar.value = res.data.checkUser.avatar
      return 'ok'
    }else{
      return Promise.reject('')
    }
  }
  const menuRoutes = constantRoute
  //退出登录逻辑
  const userLogout = ()=>{
    username.value = ''
    avatar.value = ''
    localStorage.removeItem('TOKEN')
  }
  return {userLogin,userInfor,userLogout,menuRoutes,username,avatar}
})
