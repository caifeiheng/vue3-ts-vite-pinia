//引入axios
import request from "@/utils/request";
//引入用户相关的数据类型
import type {loginFormData,loginResponseData,userInforResponseData} from './type'
// 统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL='/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}
//登陆接口
export const reqLogin = (data:loginFormData)=>request.post<any,loginResponseData>(API.LOGIN_URL,data)
//获取用户信息
export const reqUserInfo = ()=>request.get<any,userInforResponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = ()=>request.post<any,any>(API.LOGOUT_URL)