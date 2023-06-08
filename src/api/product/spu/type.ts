//服务器全部接口返回的数据类型
export interface ResponseData{
  code:number,
  message:string,
  ok:boolean
}
//spu数据的ts类型：需要修改
export interface SpuData{
  id?:number,
  spuName:string,
  description:string,
  category3Id:string|number,
  tmId:number |string,
  spuSaleAttrList:null | SpuImg[],
  spuImageList:null | SaleAttr[],
}
//数组：元素都是已有的spu数据类型
export type Records = SpuData[]
//定义获取已有的spu接口返回的数据ts类型
export interface HasSpuResponseData extends ResponseData{
  data:{
    records:Records,
    total:number,
    size:number,
    current:number,
    searchCount:boolean,
    pages:number
  }
}
//定义全部品牌的ts数据类型
export interface TradeMarkData{
  id?: number,
  createTime?: string,
  updateTime?: string,
  tmName: string,
  logoUrl: string
}
export interface GetAllTradeMark extends ResponseData{
  data:TradeMarkData[]
}
//商品图片的ts类型
export interface SpuImg{
  id?:number,
  createTime?: string,
  updateTime?: string,
  imgName?: string,
  spuId?:number,
  imgUrl?:string,
  name?:string,
  url?:string
}
//已有的spu的照片墙数据
export interface SpuHasImg extends ResponseData{
  data:SpuImg[]
}
// 已有销售属性值对象ts类型
export interface SaleAttrValue{
  id?:number,
  createTime?:null,
  updateTime?:null,
  spuId?:number,
  baseSaleAttrId:number | string,
  saleAttrValueName:string,
  saleAttrName?:string,
  isChecked?:null
}
//存储已有属性值
export type SpuSaleAttrValueList = SaleAttrValue[]
// 销售属性对象ts类型
export interface SaleAttr{
  id?:number,
  createTime?:null,
  updateTime?:null,
  spuId?:number,
  baseSaleAttrId:number | string,
  saleAttrName:string,
  spuSaleAttrValueList:SpuSaleAttrValueList,
  flag?:boolean,
  saleAttrValue?:string
}
// 销售属性数据
export interface SaleAttrResponseData extends ResponseData{
  data:SaleAttr[]
}
//全部销售属性
export interface AllSaletAttr{
  id:number,
  name:string,
  createTime?:string,
  updateTime?:string,
}
export interface AllSaletAttrResponseData extends ResponseData{
  data:AllSaletAttr[]
}