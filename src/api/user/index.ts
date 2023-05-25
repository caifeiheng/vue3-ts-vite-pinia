//引入axios
import request from "@/utils/request";
// 引入登陆接口的ts类型
import type { loginForm,loginResponseData,userResponseData } from "./type";
// 统一管理接口
enum API{
  LOGIM_URL = '/user/login',
  USERINFO_URL = '/user/info'
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data:loginForm)=>request.post<any,loginResponseData>(API.LOGIM_URL,data)
//获取用户信息接口方法
export const reqUserInfo=()=>request.get<any,userResponseData>(API.USERINFO_URL)