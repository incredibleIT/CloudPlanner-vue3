<template>
  <div class="login-page">
    <el-card class="login-card" shadow="hover">
      <h2 class="login-title">登录</h2>


      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>


    </el-card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';

export default {
  name: 'LoginPage',
  setup() {
    const loginForm = reactive({
      username: '',
      password: '',
    });

    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
      ],
    };

    const loginFormRef = ref(null);
    const loading = ref(false);

    const onSubmit = () => {
      loginFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;
          // 模拟登录请求
          setTimeout(() => {
            loading.value = false;
            ElMessage.success('登录成功！');
          }, 1500);
        } else {
          ElMessage.error('请检查输入内容');
        }
      });
    };

    const onReset = () => {
      loginFormRef.value.resetFields();
    };

    return {
      loginForm,
      rules,
      loginFormRef,
      loading,
      onSubmit,
      onReset,
    };
  },
};
</script>

<style scoped>
/*全局去除默认样式*/
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
</style>
