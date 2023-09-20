<template>
  <div>reports</div>
  <el-row>
    <el-col :span="8">
      <div class="left"><kindsOfBook /></div
    ></el-col>
    <el-col :span="8">
      <div class="center"><leftBooks /></div
    ></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <div class="thebox">
    <div class="top-right"></div>
    <div class="bottom"></div>
  </div>
</template>

<script setup>
import 'element-plus/theme-chalk/display.css'
import leftBooks from '@/echarts/leftBooks.vue'
import kindsOfBook from '@/echarts/kindsOfBook.vue'
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.left {
  width: 150px;
  height: 200px;
}
.center {
  width: 200px;
  height: 200px;
}
</style>
