<template>
  <div>
    <h1>这是home页面</h1>
  </div>
</template>

<script setup lang="ts">
//引入用户相关的仓库
import {useLoginStore} from '@/stores/modules/user'
let loginStore = useLoginStore()

loginStore.userInfor()

</script>

<style scoped>

</style>