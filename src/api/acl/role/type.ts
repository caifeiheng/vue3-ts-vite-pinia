// 定义返回数据类型公共部分
export interface ResponseData{
  code: number,
  message: string,
  ok: boolean
}
//定义一个角色
export interface RoleData{
  id?: number,
  createTime?:string,
  updateTime?: string,
  roleName:string,
  remark?: unknown
}
//定义所有角色
export type AllRoleData = RoleData[]
//定义获取角色返回结果
export interface RoleResponseData extends ResponseData{
  data: {
    records: AllRoleData,
    total: number,
    size: number,
    current: number,
    orders?: [],
    optimizeCountSql?:boolean,
    hitCount?: boolean,
    countId?: null,
    maxLimit?: null,
    searchCount?:boolean,
    pages: number
  },
}
//定义角色权限数据类型
export interface RolePower{
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
  children?:RolePowerChild,
  select:boolean
}
export type RolePowerChild = RolePower[]
export interface RolePowerResponseData extends ResponseData{
  data:RolePowerChild
}