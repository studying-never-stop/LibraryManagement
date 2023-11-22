<template>
  <div id="leftBook" class="echart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { getData } from '@/api/switch'

onMounted(async () => {
  let chartDom = document.getElementById('leftBook')
  let myChart = echarts.init(chartDom)
  let msg = {
    request: 'leftbook'
  }

  let pieData = await getData(msg)
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
  option && myChart.setOption(option)
})
</script>

<style lang="scss" scoped>
.echart {
  height: 300px;
  width: 300px;
}
</style>
