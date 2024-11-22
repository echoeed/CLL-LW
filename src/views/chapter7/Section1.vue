<template lang="pug">
.section-container
  h2.section-title 第7章 模拟运行数据分析

  // 7.1 进水水质模拟数据
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          DataLine
        span.ml-2 7.1 进水水质模拟数据
    .card-content
      el-table(:data="influentData" border style="width: 100%")
        el-table-column(prop="date" label="日期" width="120")
        el-table-column(prop="cod" label="COD (mg/L)" width="120")
        el-table-column(prop="bod" label="BOD5 (mg/L)" width="120")
        el-table-column(prop="ss" label="SS (mg/L)" width="120")
        el-table-column(prop="tn" label="TN (mg/L)" width="120")
        el-table-column(prop="tp" label="TP (mg/L)" width="120")
        el-table-column(prop="ph" label="pH" width="100")
      
      .chart-container.mt-4
        div(ref="influentChart" style="width: 100%; height: 400px")

  // 7.2 处理效率分析
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          TrendCharts
        span.ml-2 7.2 处理效率分析
    .card-content
      el-table(:data="efficiencyData" border style="width: 100%")
        el-table-column(prop="parameter" label="参数" width="150")
        el-table-column(prop="influent" label="进水 (mg/L)" width="120")
        el-table-column(prop="effluent" label="出水 (mg/L)" width="120")
        el-table-column(prop="efficiency" label="去除率 (%)" width="120")
        el-table-column(prop="standard" label="排放标准 (mg/L)" width="150")
        el-table-column(prop="status" label="达标状态")
          template(#default="scope")
            el-tag(:type="scope.row.status === '达标' ? 'success' : 'danger'") {{ scope.row.status }}

      .chart-container.mt-4
        div(ref="efficiencyChart" style="width: 100%; height: 400px")

  // 7.3 能耗分析
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Histogram
        span.ml-2 7.3 能耗分析
    .card-content
      el-row(:gutter="20")
        el-col(:span="12")
          h4 月度能耗统计
          div(ref="energyChart" style="width: 100%; height: 300px")
        el-col(:span="12")
          h4 能耗分布
          div(ref="energyPieChart" style="width: 100%; height: 300px")
      
      el-table.mt-4(:data="energyData" border style="width: 100%")
        el-table-column(prop="equipment" label="设备类型" width="150")
        el-table-column(prop="power" label="功率 (kW)" width="120")
        el-table-column(prop="runningTime" label="运行时间 (h/d)" width="150")
        el-table-column(prop="dailyConsumption" label="日耗电量 (kWh/d)" width="150")
        el-table-column(prop="monthlyConsumption" label="月耗电量 (kWh/m)" width="150")

  // 7.4 运行成本分析
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Money
        span.ml-2 7.4 运行成本分析
    .card-content
      el-row(:gutter="20")
        el-col(:span="12")
          h4 月度成本构成
          div(ref="costChart" style="width: 100%; height: 300px")
        el-col(:span="12")
          .cost-summary
            h4 成本汇总
            el-descriptions(:column="1" border)
              el-descriptions-item(label="电费支出") ¥ 45,000 /月
              el-descriptions-item(label="药剂费用") ¥ 15,000 /月
              el-descriptions-item(label="人工成本") ¥ 30,000 /月
              el-descriptions-item(label="维护费用") ¥ 10,000 /月
              el-descriptions-item(label="其他支出") ¥ 5,000 /月
              el-descriptions-item(label="总运行成本") 
                span.total-cost ¥ 105,000 /月
      
      el-divider 单位处理成本
      el-row(:gutter="20")
        el-col(:span="8")
          el-statistic(title="吨水处理成本" value="0.35" suffix="元/吨")
        el-col(:span="8")
          el-statistic(title="COD去除成本" value="1.25" suffix="元/kg")
        el-col(:span="8")
          el-statistic(title="污泥处理成本" value="180" suffix="元/吨")

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DataLine, TrendCharts, Histogram, Money } from '@element-plus/icons-vue'
import * as echarts from 'echarts'

// 进水水质数据
const influentData = ref([
  { date: '2023-12-01', cod: 380, bod: 180, ss: 220, tn: 45, tp: 5.5, ph: 7.2 },
  { date: '2023-12-02', cod: 360, bod: 170, ss: 200, tn: 42, tp: 5.2, ph: 7.3 },
  { date: '2023-12-03', cod: 400, bod: 190, ss: 240, tn: 48, tp: 5.8, ph: 7.1 },
  { date: '2023-12-04', cod: 370, bod: 175, ss: 210, tn: 44, tp: 5.4, ph: 7.2 },
  { date: '2023-12-05', cod: 390, bod: 185, ss: 230, tn: 46, tp: 5.6, ph: 7.3 },
])

// 处理效率数据
const efficiencyData = ref([
  { parameter: 'COD', influent: 380, effluent: 38, efficiency: 90, standard: 50, status: '达标' },
  { parameter: 'BOD5', influent: 180, effluent: 12, efficiency: 93, standard: 10, status: '达标' },
  { parameter: 'SS', influent: 220, effluent: 15, efficiency: 93, standard: 10, status: '达标' },
  { parameter: 'TN', influent: 45, effluent: 12, efficiency: 73, standard: 15, status: '达标' },
  { parameter: 'TP', influent: 5.5, effluent: 0.4, efficiency: 93, standard: 0.5, status: '达标' },
])

// 能耗数据
const energyData = ref([
  { equipment: '鼓风机', power: 75, runningTime: 24, dailyConsumption: 1800, monthlyConsumption: 54000 },
  { equipment: '水泵', power: 45, runningTime: 20, dailyConsumption: 900, monthlyConsumption: 27000 },
  { equipment: '搅拌机', power: 22, runningTime: 24, dailyConsumption: 528, monthlyConsumption: 15840 },
  { equipment: '污泥脱水机', power: 15, runningTime: 8, dailyConsumption: 120, monthlyConsumption: 3600 },
  { equipment: '其他设备', power: 30, runningTime: 12, dailyConsumption: 360, monthlyConsumption: 10800 },
])

// 图表引用
const influentChart = ref(null)
const efficiencyChart = ref(null)
const energyChart = ref(null)
const energyPieChart = ref(null)
const costChart = ref(null)

onMounted(() => {
  // 初始化进水水质趋势图
  const influentChartInstance = echarts.init(influentChart.value)
  influentChartInstance.setOption({
    title: { 
      text: '进水水质趋势',
      textStyle: { fontSize: 14 }
    },
    tooltip: { 
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: { 
      data: ['COD', 'BOD5', 'SS', 'TN', 'TP'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: { 
      type: 'category',
      data: influentData.value.map(item => item.date),
      axisLabel: { rotate: 15 }
    },
    yAxis: { 
      type: 'value',
      name: '浓度 (mg/L)',
      nameLocation: 'middle',
      nameGap: 40
    },
    series: [
      { 
        name: 'COD',
        type: 'line',
        smooth: true,
        data: influentData.value.map(item => item.cod),
        itemStyle: { color: '#FF6B6B' }
      },
      { 
        name: 'BOD5',
        type: 'line',
        smooth: true,
        data: influentData.value.map(item => item.bod),
        itemStyle: { color: '#4ECDC4' }
      },
      { 
        name: 'SS',
        type: 'line',
        smooth: true,
        data: influentData.value.map(item => item.ss),
        itemStyle: { color: '#45B7D1' }
      },
      { 
        name: 'TN',
        type: 'line',
        smooth: true,
        data: influentData.value.map(item => item.tn),
        itemStyle: { color: '#96CEB4' }
      },
      { 
        name: 'TP',
        type: 'line',
        smooth: true,
        data: influentData.value.map(item => item.tp),
        itemStyle: { color: '#D4A5A5' }
      }
    ]
  })

  // 初始化处理效率对比图
  const efficiencyChartInstance = echarts.init(efficiencyChart.value)
  efficiencyChartInstance.setOption({
    title: { 
      text: '污染物去除效率',
      textStyle: { fontSize: 14 }
    },
    tooltip: { 
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: { 
      data: ['进水', '出水', '去除率'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: { 
      type: 'category',
      data: efficiencyData.value.map(item => item.parameter),
      axisLabel: { interval: 0 }
    },
    yAxis: [
      { 
        type: 'value',
        name: '浓度 (mg/L)',
        position: 'left',
        axisLine: { show: true },
        axisLabel: { formatter: '{value}' }
      },
      { 
        type: 'value',
        name: '去除率 (%)',
        max: 100,
        position: 'right',
        axisLine: { show: true },
        axisLabel: { formatter: '{value}%' }
      }
    ],
    series: [
      {
        name: '进水',
        type: 'bar',
        data: efficiencyData.value.map(item => item.influent),
        itemStyle: { color: '#FF9F43' }
      },
      {
        name: '出水',
        type: 'bar',
        data: efficiencyData.value.map(item => item.effluent),
        itemStyle: { color: '#28C76F' }
      },
      {
        name: '去除率',
        type: 'line',
        yAxisIndex: 1,
        data: efficiencyData.value.map(item => item.efficiency),
        itemStyle: { color: '#5A8DEE' },
        smooth: true,
        lineStyle: { width: 3 },
        symbol: 'circle',
        symbolSize: 8
      }
    ]
  })

  // 初始化能耗柱状图
  const energyChartInstance = echarts.init(energyChart.value)
  energyChartInstance.setOption({
    title: { 
      text: '设备能耗分布',
      textStyle: { fontSize: 14 }
    },
    tooltip: { 
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: { 
      type: 'category',
      data: energyData.value.map(item => item.equipment),
      axisLabel: { interval: 0, rotate: 15 }
    },
    yAxis: { 
      type: 'value',
      name: 'kWh/月'
    },
    series: [{
      type: 'bar',
      data: energyData.value.map(item => item.monthlyConsumption),
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      }
    }]
  })

  // 初始化能耗饼图
  const energyPieChartInstance = echarts.init(energyPieChart.value)
  energyPieChartInstance.setOption({
    title: { 
      text: '能耗占比',
      textStyle: { fontSize: 14 }
    },
    tooltip: { 
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} kWh ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center'
    },
    series: [{
      name: '月度能耗',
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
          fontSize: '14',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: energyData.value.map(item => ({
        name: item.equipment,
        value: item.monthlyConsumption
      }))
    }]
  })

  // 初始化成本构成图
  const costChartInstance = echarts.init(costChart.value)
  costChartInstance.setOption({
    title: { 
      text: '运行成本构成',
      textStyle: { fontSize: 14 }
    },
    tooltip: { 
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}元 ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center'
    },
    series: [{
      name: '月度成本',
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
          fontSize: '14',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { 
          name: '电费支出',
          value: 45000,
          itemStyle: { color: '#FF9F43' }
        },
        { 
          name: '药剂费用',
          value: 15000,
          itemStyle: { color: '#28C76F' }
        },
        { 
          name: '人工成本',
          value: 30000,
          itemStyle: { color: '#5A8DEE' }
        },
        { 
          name: '维护费用',
          value: 10000,
          itemStyle: { color: '#EA5455' }
        },
        { 
          name: '其他支出',
          value: 5000,
          itemStyle: { color: '#A8A8A8' }
        }
      ]
    }]
  })

  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    influentChartInstance.resize()
    efficiencyChartInstance.resize()
    energyChartInstance.resize()
    energyPieChartInstance.resize()
    costChartInstance.resize()
  })
})
</script>

<style scoped lang="scss">
.section-container {
  padding: 20px;

  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--el-text-color-primary);
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  .card-header {
    display: flex;
    align-items: center;

    .ml-2 {
      margin-left: 8px;
    }
  }

  h4 {
    margin: 1rem 0;
    color: var(--el-text-color-primary);
    font-weight: 500;
  }

  .chart-container {
    background-color: #fff;
    padding: 1rem;
    border-radius: 4px;
  }

  .cost-summary {
    padding: 1rem;
    background-color: var(--el-bg-color-page);
    border-radius: 4px;

    .total-cost {
      color: var(--el-color-danger);
      font-weight: bold;
      font-size: 1.2em;
    }
  }

  :deep(.el-descriptions__label) {
    width: 120px;
  }
}
</style>
