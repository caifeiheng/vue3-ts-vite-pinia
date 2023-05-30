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
//引入element plus 错区信息提示
export const useLoginStore =  defineStore('login',()=>{
  let token
  const userLogin= async (data:loginForm)=>{
    let result:loginResponseData = await reqLogin(data) 
    token = localStorage.getItem('TOKEN') || ''
    if (result.code == 200) {
      token = (result.data.token as string)
      localStorage.setItem('TOKEN',token)
      return '登录成功' 
    }else{
      return Promise.reject(result.data.message)
    } 
    
  }
  const userInfor = async()=>{
    let res = await reqUserInfo()
    console.log(res);
  }
  const menuRoutes = constantRoute
  return {userLogin,userInfor,menuRoutes,token}
})
