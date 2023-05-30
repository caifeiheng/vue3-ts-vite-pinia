<template>
  <div>
    <RouterView v-slot="{Component}">
      <Transition name="fade">
        <component :is="Component" v-if="flag"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
  //引入监视属性 nextTick在页面加载后执行
  import {watch,ref,nextTick} from 'vue'
  //引入tabbar仓库
  import { useTabbarStore } from '@/stores/modules/tabbar';
  //声明控制内容销毁创建变量
  let flag = ref(true)
  let tabbarStore = useTabbarStore()
  watch(()=>tabbarStore.refresh,()=>{
    flag.value = false
    nextTick(()=>{
      flag.value = true
    })
  })
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all .3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>