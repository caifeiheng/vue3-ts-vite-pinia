<script setup lang="ts">
import {Check} from '@element-plus/icons-vue';
import {ref} from 'vue'
let num = ref(123)
</script>

<template>
  <h1>{{num}}</h1>
  <el-button type='success' :icon="Check" @click="num++"></el-button>
  <svgIcon color="red" name="home" width="50px" height="50px"></svgIcon>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
h1{
  color:$color;
}
</style>
// @color : red;
