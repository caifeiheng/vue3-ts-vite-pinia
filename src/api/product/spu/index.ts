//引入axios二次封装
import request from "@/utils/request";
//引入数据请求返回的ts数据类型
import type {AllSkuData,SkuData,SpuData, HasSpuResponseData,GetAllTradeMark,SpuHasImg,SaleAttrResponseData,AllSaletAttrResponseData} from './type'

enum API{
  //获取spu基本数据
  GETSPUDATA_URL='/admin/product/',
  //获取全部品牌的数据
  GETALLTRADEMARK_URL='/admin/product/baseTrademark/getTrademarkList',
  //获取spu图片
  GETSPUIMG_URL ='/admin/product/spuImageList/',
  //获取销售属性数据
  GETSALEATTR_URL = '/admin/product/spuSaleAttrList/',
  //获取全部销售属性
  GETALLSALEATTR_URL='/admin/product/baseSaleAttrList',
  //添加spu
  ADDSPU_URL='/admin/product/saveSpuInfo',
  //修改spu
  AMENDSPU_URL='/admin/product/updateSpuInfo',
  //添加sku接口
  ADDSKU_URL='/admin/product/saveSkuInfo',
  //获取所有sku数据
  GETSKUDATA_URL='/admin/product/findBySpuId/'
}
//获取spu基本数据方法
export const getSpuData = (page:number,limit:number,category3Id:number|string)=>request.get<any,HasSpuResponseData>(API.GETSPUDATA_URL+`${page}/${limit}?category3Id=${category3Id}`)
//获取全部品牌的方法
export const getAllTradeMark = ()=>request.get<any,GetAllTradeMark>(API.GETALLTRADEMARK_URL)
//获取照片墙数据
export const getSpuImg = (spuId:number)=>request.get<any,SpuHasImg>(API.GETSPUIMG_URL+spuId)
//获取已有销售属性方法
export const getSaleAttr = (spuId:number)=>request.get<any,SaleAttrResponseData>(API.GETSALEATTR_URL+spuId)
//获取全部销售属性方法
export const getAllSaleAttr = ()=>request.get<any,AllSaletAttrResponseData>(API.GETALLSALEATTR_URL)
//添加或修改spu
export const addOrAmendSpu=(data:SpuData)=>{
  if(data.id){
    return request.post<any,any>(API.AMENDSPU_URL,data)
  }else{
    return request.post<any,any>(API.ADDSPU_URL,data)
  }
}
//添加sku
export const addSku=(data:SkuData)=>request.post<any,any>(API.ADDSKU_URL,data)
// 获取所有sku
export const getSkuData = (spuId:number|string)=>request.get<any,AllSkuData>(API.GETSKUDATA_URL+spuId)
