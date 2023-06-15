<template>
  <div class="logo" v-if="setting.logoHidden">
      <img src="https://tupian.qqw21.com/article/UploadPic/2020-5/20205622141367241.jpg" alt="">
      <!-- {{ setting.logo }} -->
      <p>{{setting.title}}</p>
  </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting';
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
  p{
     font-size: $base-logo-title-fontSize; 
     margin-left: 10px;
     transition: width 0.3s;
    }
}
</style>