// 引入封装的axios
import request from "@/utils/request";
// 引入返回数据的ts类型
import type {RoleMenuResponseData,AddOrUpdateMenu} from './type'
//枚举接口地址
enum API{
  // 获取菜单接口
  GETMENUDATA_URL = '/admin/acl/permission',
  // 添加菜单
  ADDMENU_URL='/admin/acl/permission/save',
  //更新菜单
  UPDATEMENU_URL='/admin/acl/permission/update',
  //删除菜单
  DELETEMENU_URL='/admin/acl/permission/remove/'
}
//获取菜单方法
export const getMenuData = ()=>request.get<any,RoleMenuResponseData>(API.GETMENUDATA_URL)
//添加或更新菜单
export const addOrUpdateMenu = (data:AddOrUpdateMenu)=>{
  if(data.id){
    return request.put<any,any>(API.UPDATEMENU_URL,data)
  }else{
    return request.post<any,any>(API.ADDMENU_URL,data)
  }
}
//删除菜单
export const deleteMenu = (id:number)=>request.delete<any,any>(API.DELETEMENU_URL+id)