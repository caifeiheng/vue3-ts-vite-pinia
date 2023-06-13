import request from "@/utils/request";
//引入返回所有用户数据的ts类型
import type {AllUserData,UserData,AllRoleResponseData} from './type'

enum API{
  //获取所有用户信息接口
  ALLUSER_URL='/admin/acl/user/',
  //添加一个用户
  ADDUSER_URL = '/admin/acl/user/save',
  //修改用户
  UPDATEUSER_URL = '/admin/acl/user/update',
  //根据用户角色获取数据
  GETROLEDATA_URL='/admin/acl/user/toAssign/',
  //给用户添加角色
  USERADDROLE='/admin/acl/user/doAssignRole',
  //删除一个用户
  DELETEUSER_URL='/admin/acl/user/remove/',
  //删除选中用户
  DELETESELECTUSER_URL='/admin/acl/user/batchRemove'
}
//获取所有用户信息
export const getAllUser = (page:number,limit:number,username:string)=>request.get<any,AllUserData>(API.ALLUSER_URL+`${page}/${limit}/?username=${username}`)
//添加或修改用户
export const addOrUpdateUser=(data:UserData)=>{
  if(data.id){
    return request.put<any,any>(API.UPDATEUSER_URL,data)
  }else{
    return request.post<any,any>(API.ADDUSER_URL,data) 
  }
}
//获取角色数据
export const getRoleData=(adminId:number|string)=>request.get<any,AllRoleResponseData>(API.GETROLEDATA_URL+ adminId)
//给用户添加角色 
export const userAddRole = (data:any)=>request.post<any,any>(API.USERADDROLE,data)
//删除一个用户
export const deleteUser=(id:number)=>request.delete<any,any>(API.DELETEUSER_URL+id)
//删除选中用户
export const deleteSelectUser=(data:any)=>request.delete<any,any>(API.DELETESELECTUSER_URL,data)