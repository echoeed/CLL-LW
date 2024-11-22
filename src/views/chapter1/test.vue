<template lang="pug">
.section5-container
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Histogram
        span.ml-2 2.1 设计污水水量计算

    .subsection
      h3.subtitle
        el-icon
          DataAnalysis
        span.ml-2 平均污水量计算
      el-descriptions(:column="1" border)
        el-descriptions-item(label="平均设计流量")
          el-tag(type="success") 10万 m³/d

      h3.subtitle.mt-4
        el-icon
          TrendCharts
        span.ml-2 设计最大污水量计算
      el-alert(
        type="info"
        :closable="false"
        show-icon
      ).mb-3
        | 当平均日流量 1736.111L/s > 1000L/s时，综合生活污水量总变化系数为1.5
      
      el-descriptions(:column="1" border)
        el-descriptions-item(label="计算公式")
          | Qmax = Q̅ × KZ = 100000 × 1.5 = 150000m³/d = 1.736m³/s = 1736.111L/s

      // 变化系数表格
      h4.mt-4 表2-1 综合生活污水量总变化系数
      el-table(:data="variationCoefficients" border style="width: 100%")
        el-table-column(prop="flow" label="平均日流量(L/s)")
        el-table-column(prop="coefficient" label="变化系数")

      // 最大日污水量表格
      h4.mt-4 表2-2 计算最大日污水量
      el-table(:data="maxDailyFlow" border style="width: 100%")
        el-table-column(prop="type" label="类型")
        el-table-column(prop="m3d" label="水量(m³/d)")
        el-table-column(prop="ls" label="水量(L/s)")
        el-table-column(prop="m3s" label="水量(m³/s)")
        el-table-column(prop="kz" label="Kz")

  el-card.mt-4
    template(#header)
      .card-header
        el-icon
          PieChart
        span.ml-2 2.2 污水处理程度计算

    .subsection
      el-alert(
        type="info"
        :closable="false"
        show-icon
      ).mb-3
        | 处理程度计算公式：(进水浓度 - 出水浓度) / 进水浓度
      
      // 处理程度表格
      el-table(:data="treatmentEfficiency" border style="width: 100%")
        el-table-column(prop="indicator" label="指标")
        el-table-column(label="进水浓度(mg/L)")
          template(#default="scope")
            el-descriptions(:column="3" border size="small")
              el-descriptions-item(label="高") {{ scope.row.inflow.high }}
              el-descriptions-item(label="中") {{ scope.row.inflow.medium }}
              el-descriptions-item(label="低") {{ scope.row.inflow.low }}
        el-table-column(prop="outflow" label="出水浓度(mg/L)\n一级A标")
        el-table-column(prop="efficiency" label="处理程度")
          template(#default="scope")
            el-tag(type="success") {{ (scope.row.efficiency * 100).toFixed(1) }}%
</template>

<script setup lang="ts">
import { ref } from 'vue'

const variationCoefficients = ref([
  { flow: '5', coefficient: '2.7' },
  { flow: '15', coefficient: '2.4' },
  { flow: '40', coefficient: '2.1' },
  { flow: '70', coefficient: '2.0' },
  { flow: '100', coefficient: '1.9' },
  { flow: '200', coefficient: '1.8' },
  { flow: '500', coefficient: '1.6' },
  { flow: '≥1000', coefficient: '1.5' }
])

const maxDailyFlow = ref([
  { 
    type: '平均日污水量',
    m3d: '100000',
    ls: '1157.407',
    m3s: '1.157',
    kz: '1.5'
  },
  { 
    type: '最大日污水量',
    m3d: '150000',
    ls: '1736.111',
    m3s: '1.736',
    kz: '-'
  }
])

const treatmentEfficiency = ref([
  {
    indicator: 'BOD5',
    inflow: { high: 400, medium: 220, low: 110 },
    outflow: 10,
    efficiency: 0.955
  },
  {
    indicator: 'CODcr',
    inflow: { high: 1000, medium: 400, low: 250 },
    outflow: 50,
    efficiency: 0.875
  },
  {
    indicator: 'TN',
    inflow: { high: 85, medium: 40, low: 20 },
    outflow: 15,
    efficiency: 0.625
  },
  {
    indicator: 'TP',
    inflow: { high: 15, medium: 8, low: 4 },
    outflow: 0.5,
    efficiency: 0.9375
  },
  {
    indicator: 'SS',
    inflow: { high: 350, medium: 150, low: 100 },
    outflow: 10,
    efficiency: 0.933
  }
])
</script>

<style lang="scss" scoped>
.section5-container {
  padding: 20px;

  .card-header {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }

  .subtitle {
    display: flex;
    align-items: center;
    color: #409EFF;
    margin-bottom: 16px;
  }

  .subsection {
    padding: 16px;
  }

  :deep(.el-descriptions__label) {
    font-weight: bold;
    color: #606266;
  }

  .mb-3 {
    margin-bottom: 12px;
  }

  .mb-4 {
    margin-bottom: 16px;
  }

  .mt-4 {
    margin-top: 16px;
  }

  .ml-2 {
    margin-left: 8px;
  }
}
</style>
