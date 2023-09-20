<template>
  <div id="usermakeup" style="height: 300px; width: 300px"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

let option = {
  //这是添加辅助说明的工具
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
    type: 'category',
    data: ['common', 'vip']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Q1',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302]
    },
    {
      name: 'Q2',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132]
    },
    {
      name: 'Q3',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182]
    },
    {
      name: 'Q4',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212]
    }
  ]
}

onMounted(() => {
  let chartDom = document.getElementById('usermakeup')
  let myChart = echarts.init(chartDom)
  option && myChart.setOption(option)
})
</script>

<style lang="scss" scoped></style>
