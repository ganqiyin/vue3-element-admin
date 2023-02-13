<template>
    <div class="login_wrap">
      <div class="form_wrap">
        <el-form ref="formRef" :model="loginData" label-width="100px" class="demo-dynamic">
          <el-form-item prop="username" label="用户名" 
            :rules="[
              {
                required: true,
                message: '此项为必填项',
                trigger: 'blur',
              },
            ]"
          >
            <el-input v-model="loginData.username" />
          </el-form-item>
  
          <el-form-item prop="password" label="密码"
            :rules="[
              {
                required: true,
                message: '此项为必填项',
                trigger: 'blur',
              },
            ]"
          >
            <el-input type="password" v-model="loginData.password" />
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
            <!-- <el-button @click="addDomain">New domain</el-button>
                 <el-button @click="resetForm(formRef)">Reset</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script>
    import { reactive, toRefs } from "vue";
    export default {
      name: "LoginView",
      setup() {
        const data = reactive({
          loginData: {
            username: "",
            password: "",
          },
        });
        return {
          ...toRefs(data),
        };
      },
    };
  </script>

  <style scoped>
    .login_wrap {
      width: 100%;
      height: 100vh;
      background: #2d3761;
      position: relative;
    }

    .form_wrap {
      position: fixed;
      top: 50%;
      transform: translate(130%, -50%);
      background: #fff;
      padding: 30px 50px;
      border-radius: 5px;
    }
  </style>