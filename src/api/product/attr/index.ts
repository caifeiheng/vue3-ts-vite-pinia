//引入封装的axios
import request from "@/utils/request";
//引入分类相关的ts类型
import type {CategoryResponseData,AttrPersonseData,Attr} from './type'

enum API{
  C1_URL ='/admin/product/getCategory1',
  C2_URL = '/admin/product/getCategory2/',
  C3_URL = '/admin/product/getCategory3/',
  ATTR_URL= '/admin/product/attrInfoList/',
  ADDORUPDATE_URL = '/admin/product/saveAttrInfo',
  DELETE_URL='/admin/product/deleteAttr/'
}
export const getc1Data = () => request.get<any,CategoryResponseData>(API.C1_URL)
export const getc2Data = (category1Id:number|string)=>request.get<any,CategoryResponseData>(API.C2_URL + category1Id)
export const getc3Data = (category2Id:number|string)=>request.get<any,CategoryResponseData>(API.C3_URL + category2Id)
//获取属性接口
export const getAttrData = (category1Id:number|string,category2Id:number|string,category3Id:number|string)=>request.get<any,AttrPersonseData>(API.ATTR_URL+`${category1Id}/${category2Id}/${category3Id}`)
//添加或编辑某个属性
export const addOrUpdataAttr = (data:Attr)=>request.post<any,any>(API.ADDORUPDATE_URL,data)
//删除某个属性的接口
export const removeAttr = (id:number|string)=>request.delete<any,any>(API.DELETE_URL+id)
