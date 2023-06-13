//引入axios封装
import request from "@/utils/request";
//引入返回数据的ts类型
import type {RoleResponseData,RoleData,RolePowerResponseData} from './type'
//枚举接口地址
enum API{
  //获取角色列表
  GETROLEDATA_URL='/admin/acl/role/',
  //添加角色
  ADDROLE_URL='/admin/acl/role/save',
  //编辑角色
  UPDATEROLE_URL='/admin/acl/role/update',
  //获取角色权限
  GETROLEPOWER_URL='/admin/acl/permission/toAssign/',
  //给角色分配权限
  SETROLEPOWER_URL='/admin/acl/permission/doAssign/?',
  //删除角色
  DELETEROLE_URL='/admin/acl/role/remove/'
}
//获取角色列表
export const getRoleData = (page:number,limit:number,roleName:string)=>request.get<any,RoleResponseData>(API.GETROLEDATA_URL+`${page}/${limit}/?roleName=${roleName}`)
//添加或编辑角色
export const addOrUpdateRole=(data:RoleData)=>{
  if(data.id){
    return request.put<any,any>(API.UPDATEROLE_URL,data)
  }else{
    return request.post<any,any>(API.ADDROLE_URL,data)
  }
}
//获取角色权限
export const getRolePower = (roleId:number)=>request.get<any,RolePowerResponseData>(API.GETROLEPOWER_URL+roleId)
// 给角色分配权限
export const setRolePower = (roleId:number,permissionId:number[])=>request.post<any,any>(API.SETROLEPOWER_URL+`roleId=${roleId}&permissionId=${permissionId}`)
//删除角色
export const deleteRole = (id:number)=>request.delete<any,any>(API.DELETEROLE_URL+id)