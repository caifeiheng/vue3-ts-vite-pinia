<template>
  <div class="box">
     <img src="../../assets/images/error_images/404.png" alt="">
     <el-button type="primary" @click="goHome" class="returnHome">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
let $router = useRouter();
const goHome = ()=>{
 $router.push('/home')
}
</script>

<style scoped lang="scss">
.box{
width: 100vw;
height: 100vh;
background: skyblue;
display: flex;
justify-content: center;
img{
  width: 800px;
  height: 400px;
  margin-top:10%;
}
}
.returnHome{
  margin-top: 15%;
}
</style>