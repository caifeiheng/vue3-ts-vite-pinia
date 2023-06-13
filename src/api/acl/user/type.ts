import type { ResponseData } from "@/api/user/type"

//定义返回数公共据类型
export interface RequestData{
  code:number,
  message:string,
  ok:boolean
}
//定义某个用户信息类型
export interface UserData{
  id?: number,
  createTime?:string,
  updateTime?: string,
  username?: string,
  password?: string,
  name?: string,
  phone?: any,
  roleName?:string
}
// 定义所有用户数据类型
export type AllUSer = UserData[]
//定义所有数据返回的数据类型
export interface AllUserData extends RequestData{
  data: {
    records: AllUSer,
    total: number,
    size: number,
    current: number,
    orders?:[],
    optimizeCountSql?: boolean,
    hitCount?: boolean,
    countId?: null,
    maxLimit?: null,
    searchCount?: boolean,
    pages: number
  },
}
//代表一个职位的ts类型
export interface RoleData{
  id?: number,
  createTime?: string,
  updateTime?: string,
  roleName: string,
  remark: null
}
//全部职位的列表
export type AllRole = RoleData[]
//获取全部职位接口返回的数据类型
export interface AllRoleResponseData extends ResponseData{
  data:{
    assignRoles:AllRole,
    allRolesList:AllRole
  }
}