import request from '@/utils/request'
//引入商品数据请求返回的ts数据类型
import type { TradeMarkResponseData,TradeMark } from './type'
enum API{
  TRADEMARK_URL='/admin/product/baseTrademark/',
  ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
  UPDATETRADEMARK_URL='/admin/product/baseTrademark/update',
  DELETE_URL = '/admin/product/baseTrademark/remove/'
}
export const reqHasTrademark = (pageNo:number,limit:number)=>request.get<any,TradeMarkResponseData>(API.TRADEMARK_URL+`${pageNo}/${limit}`)
export const reqAddOrUpdateTrademark = (data:TradeMark)=>{
  if(data.id){
    return request.put<any,any>(API.UPDATETRADEMARK_URL,data) 
  }else{
    return request.post<any,any>(API.ADDTRADEMARK_URL,data)
  }
}
export const reqDeleteTrademark = (id:number)=>request.delete<any,any>(API.DELETE_URL + `${id}`)