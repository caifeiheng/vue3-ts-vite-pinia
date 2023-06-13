// 定义返回数据类型公共部分
export interface ResponseData{
  code: number,
  message: string,
  ok: boolean
}
//定义菜单数据类型
export interface RoleMenu{
  id:number,
  createTime:string,
  updateTime:string,
  pid:number,
  name:string,
  code:string,
  toCode:string,
  type:number,
  status:null,
  level:number,
  children?:RoleMenuChild,
  select:boolean
}
export type RoleMenuChild = RoleMenu[]
export interface RoleMenuResponseData extends ResponseData{
  data:RoleMenuChild
}
//添加或更新菜单数据类型
export interface AddOrUpdateMenu{
  "code":string,
  "id"?: number,
  "level": number,
  "name": string,
  "pid": number,
}