//引入axios封装
import request from "@/utils/request";
//引入返回数据的ts类型
import type {RoleResponseData,RoleData} from './type'
//枚举接口地址
enum API{
  //获取角色列表
  GETROLEDATA_URL='/admin/acl/role/',
  //添加角色
  ADDROLE_URL='/admin/acl/role/save',
  //编辑角色
  UPDATEROLE_URL='/admin/acl/role/update'
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