<template>
  <div class="header">
    <div class="logo">
      <img src="https://www.hist.edu.cn/image/logo.png" alt="">
    </div>
    <div class="menu">
      <el-dropdown trigger="click">
        <img class="avatar" src="../assets/logo.png" alt="头像">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="gotoProfile">个人中心</el-dropdown-item>
          <el-dropdown-item @click="gotoChangePassword">修改密码</el-dropdown-item>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    gotoProfile() {
      // 这里实现跳转到个人中心的逻辑
    },
    gotoChangePassword() {
      // 这里实现跳转到修改密码的逻辑
    },
    logout() {
      // 这里实现退出登录的逻辑
    },
  },
}
</script>

<style scoped>
.header {
  height: 64px;
  background-color: #409EFF;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.logo img {
  width: 210px;
}

.menu {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 16px;
  cursor: pointer;
}
</style>
