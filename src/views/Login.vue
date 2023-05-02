<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="login-title">欢迎登录</h2>
      <el-form :model="form" ref="form" label-position="left" label-width="80px" class="form">
        <el-form-item label="用户名" prop="stuNumber">
          <el-input v-model="form.stuNumber" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" v-if="form.openCaptcha" prop="captcha">
          <el-row>
            <el-col :span="12">              
              <el-input
                v-model="form.captcha"
                placeholder="请输入验证码"
                size="large"
                style="flex:1;padding-right: 20px;"
              /></el-col>
              <el-col :offset="2" :span="10">
                <div class="vPic">
                <img
                  v-if="picPath"
                  :src="picPath"
                  alt="请输入验证码"
                  @click="loginVerify()"
                >
              </div>
              </el-col>
          </el-row>
            <div class="vPicBox">


            </div>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { captcha, userLogin } from '@/serve/api.js'
export default{
  name: "Login", 
  data() {
    return {
      picPath: "",
      form: {
        stuNumber: '',
        password: '',
        captcha: '',
        captchaId: "",
        openCaptcha: true
      }
    };
  },
  created(){
    this.loginVerify()
  },
  methods: {
    login() {
      try {
        console.log(this.form);
        userLogin(this.form).then(res => {        
          if (res.code == 0) {
            localStorage.setItem("token",res.data.token);
            this.$router.push('/home');
          } else {
            this.$message.error(res.message);
          }
        })
        
      } catch (error) {
        console.log(error);
        this.$message.error('登录过程中发生错误，请稍后再试');
      }
    },
    loginVerify() {
      captcha({}).then(async(ele) => {
        this.picPath = ele.data.picPath
        this.form.captchaId = ele.data.captchaId
        this.form.openCaptcha = ele.data.openCaptcha
      })
    }
  },
  computed: {

  },

};
</script>

<style scoped>
.login-container {
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vPic img {
  width: 100%;
  height: 40px;
}

.login-form {
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  padding: 30px;
  background-color: #fff;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  margin-top: 20px;
}

.login-btn {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  margin-top: 20px;
  background-color: #409eff;
  border-color: #409eff;
}

.login-btn:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}
</style>
