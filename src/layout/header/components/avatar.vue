<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <el-avatar shape="square" :size="40" :src="squareUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
            <el-dropdown-item disabled>Action 2</el-dropdown-item>
            <el-dropdown-item disabled>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <!-- <el-dropdown-item divided>Action 5</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<script setup>
import store from '@/store'
import { ref } from 'vue'
import { useStore } from 'vuex'

const ustore = useStore() 

const squareUrl = ref('https://img1.baidu.com/it/u=2402176946,3321697151&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687539600&t=f0dafc2670590b525c91ccedb94ea1c6')

const logout = () => {
    store.dispatch('app/logout')
}

</script>

<style lang="scss" scoped>
.el-dropdown-menu__item {
    white-space: nowrap;
}
</style>