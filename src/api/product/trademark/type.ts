//定义商品模块返回数据类型的公共类型
export interface ResponseData{
  code:number,
  message:string,
  ok:boolean
}
//定义已有品牌类型数据
export interface TradeMark{
  id?:number,
  createTime?: string,
  updateTime?: string,
  tmName: string,
  logoUrl:string
}
//包含全部品牌数据的ts类型
export type Records = TradeMark[]
//获取已有全部品牌的ts类型数据
export interface TradeMarkResponseData extends ResponseData{
  data:{
    records:Records,
    total: number,
    size: number,
    current: number,
    optimizeCountSql:boolean ,
    hitCount: boolean,
    countId: null,
    maxLimit: null,
    searchCount: boolean,
    pages: number
  }
}