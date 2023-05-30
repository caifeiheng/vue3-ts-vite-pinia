<template>
  <div>
    <h1>这是home页面---{{ loginStore.username }}</h1>
  </div>
</template>

<script setup lang="ts">
//引入用户相关的仓库
import {useLoginStore} from '@/stores/modules/user'
//
import {onMounted} from 'vue'
let loginStore = useLoginStore()
onMounted(() => {
  loginStore.userInfor()
})

</script>

<style scoped>

</style>