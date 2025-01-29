<script setup>
import 'vue-cal/dist/vuecal.css';
import VueCal from 'vue-cal';
</script>


<template>


<div class="div1">

  <div class="div2" >
    <!-- <el-calendar class="cal"></el-calendar> -->
    <vue-cal
    class="vuecal--blue-theme"
      :events="events"
      locale="zh-cn"
      active-view="month"
      show-time-in-cells
      style="height: 60vh"
    />
  </div>
  


  <el-carousel height="34vh" motion-blur type="card" class="test3">
    <el-carousel-item v-for="item in 4" :key="item" class="eli">
      <h1>hello world</h1>
    </el-carousel-item>
  </el-carousel>


</div>

</template>


<style>

.div1 {
  background-color: rgba(255, 255, 255, 0.484);
}

.eli {
  background-color: rgba(118, 152, 255, 0.218);
  display: flex;                /* 使用 Flexbox 布局 */
  align-items: center;          /* 垂直居中 */
  justify-content: center;      /* 水平居中 */
  height: 100%;  
}


.test3 {
  background-color: aliceblue;

}

.h {
  align-items: center;
  justify-content: center;

}
</style>

