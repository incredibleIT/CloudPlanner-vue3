<template>

  <div class="input-div">

    <!-- 任务标题, 任务详情, 任务优先级, 任务开始日期时间, 任务截至日期时间 -->

    <el-form :model="formData">

      <el-form-item label="任务标题" prop="taskTitle">
        <el-input v-model="formData.taskTitle" placeholder="标题是什么呢"/>
      </el-form-item>

      <el-form-item label="任务详情" prop="taskDetail">
        <el-input v-model="formData.taskDetail" placeholder="内容是什么呢"/>
      </el-form-item>

      <el-form-item label="优先级" prop="taskP">
        <el-radio-group v-model="formData.taskP">
          <el-radio label="ji">急</el-radio>
          <el-radio label="jiaoji">较急</el-radio>
          <el-radio label="huan">缓</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="开始日期" prop="taskBeginDate">
        <el-date-picker v-model="formData.taskBeginDate" type="date" />
      </el-form-item>
      <el-form-item label="开始时间" prop="taskBeginTime">
        <el-time-picker v-model="formData.taskBeginTime"/>
      </el-form-item>
      <el-form-item label="结束日期" prop="taskEndDate">
        <el-date-picker v-model="formData.taskEndDate" type="date" />
      </el-form-item>
      <el-form-item label="结束时间" prop="taskEndTime">
        <el-time-picker v-model="formData.taskEndTime"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

    </el-form>

    

  </div>
  
  <div class="cal-div">
    <vue-cal
      class="vuecal--blue-theme"
      :events="events"
      locale="zh-cn"
      active-view="month"
      show-time-in-cells
    />
  </div>
</template>


<script setup>




import 'vue-cal/dist/vuecal.css';
import VueCal from 'vue-cal';
import {ref} from 'vue';
import {format} from 'date-fns';


const formData = ref({
  taskTitle: '',
  taskDetail: '',
  taskP: '',
  taskBeginDate: '',
  taskBeginTime: '',
  taskEndDate: '',
  taskEndTime: '',


})


const events = ref([
  {
    start: '2023-11-19 10:35',
    end: '2023-11-19 11:30',
    title: '上课不要迟到'
  },  
  {
    start: '2023-11-19 10:35',
    end: '2023-11-19 11:30',
    title: '上课不要迟到'
  },
  {
    start: '2023-11-19 10:35',
    end: '2023-11-19 11:30',
    title: '上课不要迟到'
  },
  {
    start: '2023-11-19 10:35',
    end: '2023-11-19 11:30',
    title: '上课不要迟到'
  },
  {
    start: '2023-11-19 10:35',
    end: '2023-11-19 11:30',
    title: '上课不要迟到'
  },
])


function submitForm() {
  console.log(formData.value.taskBeginDate)
  console.log(format(formData.value.taskBeginDate, 'yy-MM-dd'))
}

</script>



<style>




.input-div {
  height: 45vh;
  background-color: rgba(155, 199, 255, 0.484);
  padding: 30px 40px 0;
}

.cal-div {
  height: 40vh;
}








</style>