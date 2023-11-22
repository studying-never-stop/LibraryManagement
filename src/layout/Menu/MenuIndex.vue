<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
    :collapse="!$store.getters.siderType"
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <!-- 如果使用的是全局定义的elicon -->
        <el-icon><component :is="iconList[item.icon]"></component></el-icon>
        <!-- <el-icon><location /></el-icon> -->
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
        ><el-icon><component :is="iconList2[it.icon]" /></el-icon
        >{{ it.authName }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { computed, ref } from 'vue'
import {
  User,
  Menu,
  Setting,
  PieChart,
  Tickets,
  HomeFilled,
  UserFilled,
  Reading,
  Management,
  TrendCharts,
  List,
  House,
  Notebook
} from '@element-plus/icons-vue'

//如果是全局导入elicon则适用如下语句
const iconList = ref(['User', 'Reading', 'PieChart', 'Tickets', 'HomeFilled'])
const iconList2 = ref([
  'UserFilled',
  'Management',
  'TrendCharts',
  'List',
  'Setting',
  'House',
  'Notebook'
])
// const icon = ref('menu')

// 规定初始定向页面
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menusList = ref([])
const initmenuList = async () => {
  menusList.value = await menuList()
  // const ref = await menuList()
  // console.log(menusList.value)
}
initmenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped></style>
