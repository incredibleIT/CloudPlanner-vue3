<template>
  <div class="all">


    <el-container style="height: 100vh;">


      <el-header class="header1">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <div class="aaa">任务管理系统</div>

          <el-menu-item index="1">任务管理</el-menu-item>

          <el-menu-item index="2">账务管理</el-menu-item>

          <el-menu-item index="3">账单流水明细</el-menu-item>

          <el-button type="default" @click="getAllTask">dian</el-button>
          <el-button type="default" @click="testJwt">dian</el-button>
        </el-menu>
      </el-header>

      <el-container>


        <el-aside width="200px" class="aside1">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="setActivePage('taskList')">
              <el-icon>
                <location />
              </el-icon>
              <span>任务列表</span>
            </el-menu-item>


            <el-menu-item index="2" @click="setActivePage('taskForm')">
              <el-icon>
                <plus />
              </el-icon>
              <span>添加待做任务</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main class="main1">

          <template v-if="activePage === ''">
            <el-empty description="暂无任务" />
          </template>
<!--          如果点击的是任务列表就展示任务列表-->
          <template v-if="activePage === 'taskList'">
            <!-- 任务列表 -->
            <el-row :gutter="20">
              <el-col v-for="(card, index) in column1" :key="'col1-' + index" :span="8">
                    <el-card
                        class="box-card"
                        :style="{ backgroundColor: getPriorityColor(card.priority)}"
                        shadow="hover"
                        
                    >
                      <template #header>
                        <div class="card-header">
                          <span>{{ card.title }}</span>
                        </div>
                      </template>

                      <div class="card-content">
                        {{card.content}}
                      </div>


                      <template #footer>
                        <el-space>
                          <el-button @click="getTaskDetailById(card.id)" type="default" :icon="Search" circle />
                          <el-button @click="deleteCardById(card.id)" type="danger" :icon="Delete" circle />
                        </el-space> 
                      </template>
                    </el-card>


              </el-col>
            </el-row>

          </template>
<!--          如果点击的是添加待做任务就展示各种表单-->
          <template v-if="activePage === 'taskForm'">
            <el-form :model="form" label-width="100px">
              <el-form-item label="任务标题">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="任务内容">
                <el-input v-model="form.content" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="优先级">
                <el-select v-model="form.priority" placeholder="请选择">
                  <el-option label="缓" value="low"></el-option>
                  <el-option label="一般" value="medium"></el-option>
                  <el-option label="急" value="high"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="测试任务id">
                <el-input v-model="form.id" type="text"></el-input>
              </el-form-item>



              <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="setActivePage('taskList')">取消</el-button>
              </el-form-item>
            </el-form>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Location, Plus, Edit, Search, Delete, UserFilled } from '@element-plus/icons-vue';
import { jwtDecode } from "jwt-decode";

const activeIndex = ref('1');
const activePage = ref(''); // 当前显示页面
const form = ref({
  id: '',
  title: '',
  content: '',
  priority: '',
});

const column1 = ref([]);

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

const setActivePage = (page) => {
  activePage.value = page;
};

const getPriorityColor = (priority) => {
  if (priority === 'low') return '#e4e4e7'; // 缓 - 绿色
  if (priority === 'medium') return '#353839'; // 一般 - 黄色
  if (priority === 'high') return '#353839'; // 急 - 红色
  return '#333333'; // 默认 - 白色
};

const submitForm = () => {
  if (!form.value.title || !form.value.content || !form.value.priority) {
    alert('请完整填写任务信息');
    return;
  }
  column1.value.unshift({
    id: form.value.id,
    title: form.value.title,
    content: form.value.content,
    priority: form.value.priority,
  });
  form.value = { id: '', title: '', content: '', priority: '' };
  activePage.value = 'taskList';
};



function getTaskDetailById(taskId) {

  console.log(taskId);

}

function deleteCardById(taskId) {
  console.log(taskId);
}


function getAllTask() {
  fetch("http://127.0.0.1:8001/task/list", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'userid': '1',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxIn0.f1Hu4hVXlTWlD8takJC9__axUKl_t2bR7432287VbDA'
    }
  })
  .then(response => response.json())
  .then(data => data.data.forEach(task => {
    console.log(task)
  }))
}


function testJwt() {
  console.log(jwtDecode(localStorage.getItem("token")).userid);
}
</script>

<style scoped>

.all {
  background-color: #333;
}
.header1 {
  background-color: #e9b4b1;
  padding: 0;
}

.aside1 {
  width: 200px;
}

.main1 {
  color: white;
  padding: 20px;
}

.el-menu-vertical-demo {
  height: 100vh;
}

.box-card {
  margin-bottom: 20px;
  height: 200px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.box-card:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* 鼠标悬浮时阴影加深 */
  transform: translateY(-5px); /* 鼠标悬浮时轻微上浮 */
}

.el-card__header {
  background-color: #f4f4f4;
  font-weight: bold;
}
.test2 {
  height: 10px;
}
.aaa {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100%;            /* 让 div 高度填满其父元素 */
  font-size: 20px;         /* 设置字体大小 */
  color: #333;             /* 设置字体颜色 */
  margin: 0 60px 0 0;
  padding-left: 20px;
}

</style>
