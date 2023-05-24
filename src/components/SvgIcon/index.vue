<template>
  <div>
    <svg :style='{width,height}'>
      <use :xlink:href="prefix+name" :fill="color"></use>
    </svg> 
  </div>
</template>

<script setup lang="ts">
defineProps({
  //图标前缀 默认#icon
  prefix:{
    type:String,
    default:'#icon-'
  },
  //name 图标名字 必传项
  name:{
    type:String,
    required:true
  },
  // 图标颜色
  color:{
    type:String,
    default:''
  },
  // 图标宽度
  width:{
    type:String,
    default:'16px',
  },
  // 图标高度
  height:{
    type:String,
    default:'16px'
  }
})
</script>

<style scoped>

</style>