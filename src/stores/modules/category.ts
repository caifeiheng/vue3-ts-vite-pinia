//定义 category 的小仓库
//引入创建仓库的方法
import {defineStore} from 'pinia'
//引入响应式
import {reactive, ref} from 'vue'
//引入获取一级分类方法
import { getc1Data,getc2Data,getc3Data } from '@/api/product/attr'
//引入分类相关的ts类型
import type { CategoryResponseData } from '@/api/product/attr/type'
// 导出小仓库
export const useCategoryStore = defineStore('Category',()=>{
  //一级分类id
  let c1Id = ref<number | string>('')
  //一级分类数据
  let c1Arr = ref()
  //二级分类id
  let c2Id = ref<number | string>('')
  //二级分类数据
  let c2Arr = ref()
  //三级分类id
  let c3Id = ref<number | string>('')
  //三级分类数据
  let c3Arr = ref()
  // 获取一级分类的数据
  const getC1 = async()=>{
    let result:CategoryResponseData = await getc1Data()
    if(result.code == 200){
      c1Arr.value = result.data
    }else{}
  }
  // 获取二级分类的数据
  const getC2 = async()=>{
    let result:CategoryResponseData = await getc2Data(c1Id.value)
    if(result.code == 200){
      c2Arr.value = result.data
    }else{}
  }
  // 获取三级分类的数据
  const getC3 = async()=>{
    let result:CategoryResponseData = await getc3Data(c2Id.value)
    if(result.code == 200){
      c3Arr.value = result.data
    }else{}
  }
  return{c1Id,c1Arr,c2Id,c2Arr,c3Id,c3Arr,getC1,getC2,getC3}
})

