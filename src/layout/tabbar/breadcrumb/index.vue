<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right:10px" @click="tabbarStore.changeFlod()">
      <component :is="tabbarStore.flod?'Expand':'Fold'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
      <!-- 面包动态展示路由名字与标题 -->
      <el-breadcrumb-item v-for="(item,index) in $route.matched" v-show="item.meta.title" :key="index" :to="item.path">
          <!-- 图标 -->
          <el-icon>
              <component :is="item.meta.icon" v-if="item.meta.icon"></component>
          </el-icon>
          <!-- 面包屑展示匹配路由的标题 -->
          <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
// 引入tabbar 相关的仓库
import {useTabbarStore} from '@/stores/modules/tabbar' 

//获取layout配置相关的仓库
let tabbarStore = useTabbarStore();
//获取路由对象
let $route = useRoute();
</script>
<script lang="ts">
export default {
  name: "Breadcrumb"
}
</script>

<style scoped></style>