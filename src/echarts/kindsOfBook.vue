<template>
  <!-- 如果是组件页面id不能相同,否则会导致加载到同一区域 -->
  <div id="kind" style="height: 300px; width: 300px"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: [
      '总类',
      '哲学',
      '宗教',
      '科学',
      '应用科学',
      '社会科学',
      '史地',
      '中国史地',
      '世界史地',
      '语文',
      '艺术'
    ]
  },
  series: [
    {
      name: 'keep',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [32, 30, 30, 10, 20, 30, 40, 50, 40, 30, 10]
    },
    {
      name: 'sell',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [12, 13, 10, 10, 20, 30, 40, 50, 40, 30, 20]
    },
    {
      name: 'lend',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [22, 18, 19, 10, 20, 30, 40, 50, 40, 30, 10]
    }
  ]
}

onMounted(() => {
  let chartDom = document.getElementById('kind')
  let myChart = echarts.init(chartDom)
  option && myChart.setOption(option)
})
</script>

<style lang="scss" scoped></style>
