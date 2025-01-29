<script setup lang="ts">

import { Document } from '@element-plus/icons-vue';



</script>

<template>

  <div class="all">

    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
        class="el-menu-vertical-demo"
        >

        <h3 class="h3">任务管理系统</h3>
        
        <el-menu-item>
          <router-link to="/task" class="link">
            <el-icon><Document /></el-icon>
            <span>日常任务管理</span>
          </router-link>
        </el-menu-item>

        <el-menu-item>
          <router-link to="/other1" class="link">
            <el-icon><Document /></el-icon>
            <span>添加待做任务</span>
          </router-link>
          
        </el-menu-item>

        <el-menu-item>
          <el-icon><Document /></el-icon>
          <span>日常任务管理</span>
        </el-menu-item>
    
    
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>

</template>


<style scoped>

.all {
  background-color: rgb(255, 255, 255);
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-container {
  display: flex;
  height: 100%;
}

.aside {
  background-color: rgba(119, 178, 255, 0.484);
  height: 100%;
  padding: 0;
  margin: 0;
}

.el-menu-vertical-demo {
  background-color: rgba(155, 199, 255, 0.484);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  background-color:rgba(119, 178, 255, 0.484);
}

.main {
  background-color: rgba(255, 255, 255);
  flex-grow: 1;
}
.h3 {
  margin-left: 20px;
}

.link {
  text-decoration: none;  /* 去掉下划线 */
  color: #f9f9f9;  /* 设置字体颜色 */
  display: flex;  /* 让内容显示为块级元素，使其填满整个菜单项 */
  align-items: center;  /* 垂直居中 */
}
</style>