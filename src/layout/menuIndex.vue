<template>
  <div>
    <el-container class="app-wrapper">
      <el-aside :width="asidewith" class="sidebar-container">
        <MenuIndex />
      </el-aside>
      <el-container class="container" :class="{hidderContainer: !$store.getters.siderType}">
        <el-header><headerIndex /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MenuIndex from './Menu/MenuIndex'
import headerIndex from './header/headIndex'
import usersIndex from '../views/users/usersIndex'
import { computed } from 'vue'
import { useStore} from 'vuex'

const store = useStore()
const asidewith = computed(() =>{
  return store.getters.siderType ? '210px' : '67px'
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
