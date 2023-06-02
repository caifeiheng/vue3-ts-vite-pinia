//引入封装的axios
import request from "@/utils/request";
//引入分类相关的ts类型
import type {CategoryResponseData} from './type'

enum API{
  C1_URL ='/admin/product/getCategory1',
  C2_URL = '/admin/product/getCategory2/',
  C3_URL = '/admin/product/getCategory3/'
}
export const getc1Data = () => request.get<any,CategoryResponseData>(API.C1_URL)
export const getc2Data = (category1Id:number|string)=>request.get<any,CategoryResponseData>(API.C2_URL + category1Id)
export const getc3Data = (category2Id:number|string)=>request.get<any,CategoryResponseData>(API.C3_URL + category2Id)