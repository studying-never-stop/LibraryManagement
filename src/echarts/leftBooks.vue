<template>
  <div id="leftBook" style="height: 300px; width: 300px"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { getData } from '@/api/switch'

let msg = {
  request: 'leftbook'
}

let pieData = getData(msg)
console.log(getData(msg))
let option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: pieData
    }
  ]
}

onMounted(() => {
  let chartDom = document.getElementById('leftBook')
  let myChart = echarts.init(chartDom)
  option && myChart.setOption(option)
})
</script>

<style lang="scss" scoped></style>
