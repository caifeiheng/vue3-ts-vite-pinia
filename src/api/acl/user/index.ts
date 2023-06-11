import request from "@/utils/request";
//引入返回所有用户数据的ts类型
import type {AllUserData,UserData} from './type'

enum API{
  //获取所有用户信息接口
  ALLUSER_URL='/admin/acl/user/',
  //添加一个用户
  ADDUSER_URL = '/admin/acl/user/save',
  //修改用户
  UPDATEUSER_URL = '/admin/acl/user/update'
}
//获取所有用户信息
export const getAllUser = (page:number,limit:number)=>request.get<any,AllUserData>(API.ALLUSER_URL+`${page}/${limit}`)
//添加或修改用户
export const addOrUpdateUser=(data:UserData)=>{
  if(data.id){
    return request.put<any,any>(API.UPDATEUSER_URL,data)
  }else{
    return request.post<any,any>(API.ADDUSER_URL,data) 
  }
}
