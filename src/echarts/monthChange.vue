<template>
  <div id="monthchange" class="echart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

let option = {
  title: {
    text: '上周书籍出售情况'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['sell', 'lend']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'lend',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'sell',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}

onMounted(() => {
  let chartDom = document.getElementById('monthchange')
  let myChart = echarts.init(chartDom)
  option && myChart.setOption(option)
})
</script>

<style lang="scss" scoped>
.echart {
  height: 200px;
  width: 900px;
}
</style>
