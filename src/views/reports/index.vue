<template>
  <el-row>
    <el-col :span="8"> 各类书籍余量<kindsOfBook /></el-col>
    <el-col :span="8">
      <div class="center">书籍借售情况<leftBooks /></div
    ></el-col>
    <el-col :span="8">
      <div class="right">用户新增数量<userMakeUp /></div
    ></el-col>
  </el-row>
  <el-row>
    <el-col class="col-bottom">
      <div class="bottom"><monthChange /></div>
    </el-col>
  </el-row>
</template>

<script>
import 'element-plus/theme-chalk/display.css'
import leftBooks from '@/echarts/leftBooks.vue'
import kindsOfBook from '@/echarts/kindsOfBook.vue'
import userMakeUp from '@/echarts/userMakeUp.vue'
import monthChange from '@/echarts/monthChange.vue'

export default {
  data() {
    return {
      currentPage: null
    }
  },
  methods: {
    showPage(page) {
      this.currentPage = page
    }
  },
  components: {
    leftBooks,
    kindsOfBook,
    userMakeUp,
    monthChange
  }
}
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
  margin-top: 20px;
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
