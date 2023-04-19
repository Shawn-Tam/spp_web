<template>
  <div class="login-container">
    <div class="login-form">
      <h2 class="login-title">欢迎登录</h2>
      <el-form :model="form" ref="form" label-position="left" label-width="80px" class="form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login", 
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      // 这里实现登录逻辑
    }
  }
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
