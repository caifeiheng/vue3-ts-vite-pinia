<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>蔡某人的项目</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" :prefix-icon="Lock" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="isLoading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
//引入输入框图标
import { User, Lock } from '@element-plus/icons-vue';
// 引入响应式函数
import {reactive,ref} from 'vue'
// 引入pinia仓库
import {useLoginStore} from '@/stores/modules/user'
// 引入element plus
import { ElMessage,ElNotification } from 'element-plus';
// 引入路由
import { useRouter,useRoute } from 'vue-router';
// 引入获取当前时间的函数
import {getTime} from '@/utils/times'
// 控制加载效果
let isLoading = ref(false)
//获取form表单实例对象
let loginForms = ref()
//获取路由器
let $router = useRouter()
//获取路由信息
let $route = useRoute()
//收集账号密码的数据
let loginForm = reactive({username:'admin',password:'111111'})
//使用仓库发送请求
const useLogin = useLoginStore()
//自定义用户名校验规则
const validatorUserName = (rule:any,value:any,callback:any)=>{
  // rule校验规则
  // value输入框的值
  // callback是否放行
  if(value.length<=10 && value.length>=5){
    callback()
  }else{
    callback(new Error('用户名长度应为5-10位'))
  }
}
//自定义密码校验规则
const validatorPassword = (rule:any,value:any,callback:any)=>{
  if(value.length<=15 && value.length>=6){
    callback()
  }else{
    callback(new Error('用户名长度应为6-15位'))
  }
}
//表单校验规格
let rules = {
  username:[
  // {required:true,min:5,max:10,message:'用户名长度应为5-10位',trigger:'change'}, //基础校验规则
  {trigger:'change',validator:validatorUserName}
  ],
  password:[
  // {required:true,min:6,max:15,message:'用户名长度应为6-15位',trigger:'change'},//基础校验规则
  {trigger:'change',validator:validatorPassword}
  ],
}
//登录回调
const login = async ()=>{
  await loginForms.value.validate()
  isLoading.value = true
  // 点击登录使用仓库发送请求
  useLogin.userLogin(loginForm).then(val=>{
    ElNotification({
      type:'success',
      message:'欢迎回来',
      title:'Hi ! '+ getTime()
    })
    let redirect:any = $route.query.redirect
    $router.push({path:redirect||'/'})
    isLoading.value = false
  },reason=>{
    ElMessage.error(reason)
    isLoading.value = false
  })

}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>