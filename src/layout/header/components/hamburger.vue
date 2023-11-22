<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const store = useStore()
const toggleClick = () => {
  store.commit('app/changeSiderType')
}

const icon = computed(() => {
  //   console.log(store.getters.siderType)
  return store.getters.siderType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
  height: 16px;
  width: 16px;
}
</style>
