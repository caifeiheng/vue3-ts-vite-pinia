import { defineStore} from 'pinia'
import {ref} from 'vue'
export const useTabbarStore = defineStore('tabbar',()=>{
  //是否折叠变量
  let flod = ref(false)
  //是否折叠方法
  const changeFlod = ()=>{
    flod.value = ! flod.value
  }
  //是否刷新变量
  let refresh = ref(false)
  //是否刷新方法
  const clickRefresh = ()=>{
    refresh.value = !refresh.value
  }
  return{flod,refresh,changeFlod,clickRefresh}
})