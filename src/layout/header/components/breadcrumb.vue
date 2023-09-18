<template>
  <el-breadcrumb separator="/">
    <!-- 循环操作v-for -->
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        item.name
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        item.name
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
//获取当前路由的完整路由表
import { useRoute, useRouter } from 'vue-router'
//监听操作
import { watch, ref } from 'vue'
const route = useRoute()
const router = useRouter()

const breadcrumbList = ref([])

const initbreadcrumbList = () => {
  breadcrumbList.value = route.matched
  // console.log(breadcrumbList.value)
  console.log(route.matched)
}

const handleRedirect = (path) => {
  // console.log(path)
  router.push(path)
}

//监听操作：监听route，要干什么，需要深入和立刻开始监听(注意其他操作都要写在监听上面)
watch(
  route,
  () => {
    initbreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}

.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
