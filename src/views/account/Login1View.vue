<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
               <li class="current">登录</li>
               <li>注册</li>
            </ul>
            <el-form ref="form">
                <el-form-item>
                    <label class="form-label">用户名</label>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item >
                    <label class="form-label">密码</label>
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >立即创建</el-button>
                </el-form-item>
                <el-form-item>
                    <label class="form-label">验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="14">
                        <el-input></el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="success" class="el-button-block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" class="el-button-block" disabled>登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

  #login 
  {
    height: 100vh;
    background-color: #344a5f;
  }
  .form-wrap
   {
    width: 320px;
    padding-top: 100px;
    margin: auto;
  }

  .menu-tab 
  {
    text-align: center;
    li 
    {
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        &.current 
        {
            background-color: rgba(0,0,0,.1);
        }
    }
  }

  .form-label
  {
     display: block;
     color: #fff;
     font-size: 14px;
  }
</style>