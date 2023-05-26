//引入路由类型
import type { RouteLocationRaw } from "vue-router";
// 对外暴露配置路由
export const constantRoute = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta:{
    title:'登录',
    hidden:true
  },
},{
  path: '/layout',
  name: 'layout',
  component: () => import('@/layout/index.vue'),
  meta:{
    title:'layout',
    hidden:false
  },
  children:[{
    path:'/home',
    name:'home',
    component:()=> import('@/views/home/index.vue'),
    meta:{
      title:'首页',
      hidden:false
    },
  }]
},{
  path: '/404',
  name: '404',
  meta:{
    title:'404',
    hidden:true
  },
  component: () => import('@/views/404/index.vue'),
},{
  path: '/:pathMatch(.*)*',
  name: 'Any',
  redirect:'/404',
  meta:{
    title:'任意',
    hidden:true
  },
}]