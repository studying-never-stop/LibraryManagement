<template>
  <div>reports</div>
  <el-row>
    <el-col :span="8"> <kindsOfBook /></el-col>
    <el-col :span="8">
      <div class="center">center<leftBooks /></div
    ></el-col>
    <el-col :span="8"> <div class="right">right</div></el-col>
  </el-row>
  <el-row>
    <el-col class="col-bottom">
      <div class="bottom">bottom</div>
    </el-col>
  </el-row>
</template>

<script setup>
import 'element-plus/theme-chalk/display.css'
import leftBooks from '@/echarts/leftBooks.vue'
import kindsOfBook from '@/echarts/kindsOfBook.vue'
import userMakeUp from '@/echarts/userMakeUp.vue'
import monthChange from '@/echarts/monthChange.vue'
</script>

<style lang="scss" scoped>
.el-row {
  margin: 5 10px;
  height: 300px;
}
.el-col {
  border-radius: 4px;
  width: 300px;
  height: 300px;
}
.left {
  width: 300px;
  height: 300px;
}

.col-bottom {
  height: 200px;
}
.center {
  width: 300px;
  height: 300px;
}
.right {
  width: 300px;
  height: 300px;
}

#main {
  height: 300px;
}
</style>
