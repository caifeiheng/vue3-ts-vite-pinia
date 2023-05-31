import request from '@/utils/request'

enum API{
  TRADEMARK_URL='/admin/product/baseTrademark/'
}
export const getHasTrademark = (pageNo:number,limit:number)=>request<any,any>(API.TRADEMARK_URL+`${pageNo}/${limit}`)