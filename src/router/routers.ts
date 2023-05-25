// 对外暴露配置路由
export const constantRoute = [{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
},{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
},{
  path: '/404',
  name: '404',
  component: () => import('@/views/404/index.vue'),
},{
  path: '/:pathMatch(.*)*',
  name: 'Any',
  redirect:'/404'
}]