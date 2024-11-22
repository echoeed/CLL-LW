<template lang="pug">
.section2-container
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          DataAnalysis
        span.ml-2 2.2 污水处理程度计算

    .subsection
      el-alert(
        type="info"
        :closable="false"
        show-icon
      ).mb-3
        | 处理程度计算公式：(进水浓度 - 出水浓度) / 进水浓度

      // COD处理程度
      h3.subtitle
        el-icon
          Cpu
        span.ml-2 污水COD处理程度计算
      el-descriptions(:column="1" border)
        el-descriptions-item(label="进水浓度")
          | CODcr进水浓度（中等）：400mg/L
        el-descriptions-item(label="出水浓度")
          | 一级A标准：50mg/L
        el-descriptions-item(label="处理程度计算")
          el-tag(type="success") (400-50)/400 = 87.5%

      // BOD处理程度
      h3.subtitle.mt-4
        el-icon
          Cpu
        span.ml-2 污水BOD处理程度计算
      el-descriptions(:column="1" border)
        el-descriptions-item(label="进水浓度")
          | BOD5进水浓度（中等）：220mg/L
        el-descriptions-item(label="出水浓度")
          | 一级A标准：10mg/L
        el-descriptions-item(label="处理程度计算")
          el-tag(type="success") (220-10)/220 = 95.0%

      // SS处理程度
      h3.subtitle.mt-4
        el-icon
          Cpu
        span.ml-2 污水SS处理程度计算
      el-descriptions(:column="1" border)
        el-descriptions-item(label="进水浓度")
          | SS进水浓度（中等）：150mg/L
        el-descriptions-item(label="出水浓度")
          | 一级A标准：10mg/L
        el-descriptions-item(label="处理程度计算")
          el-tag(type="success") (150-10)/150 = 93.3%

      // 氨氮处理程度
      h3.subtitle.mt-4
        el-icon
          Cpu
        span.ml-2 污水氨氮处理程度计算
      el-descriptions(:column="1" border)
        el-descriptions-item(label="进水浓度")
          | TN进水浓度（中等）：40mg/L
        el-descriptions-item(label="出水浓度")
          | 一级A标准：15mg/L
        el-descriptions-item(label="处理程度计算")
          el-tag(type="success") (40-15)/40 = 62.5%

      // 污水处理程度汇总表
      h3.subtitle.mt-4
        el-icon
          List
        span.ml-2 表2-3 污水处理程度计算
      el-table(:data="treatmentEfficiency" border style="width: 100%")
        el-table-column(prop="indicator" label="指标" width="100")
        el-table-column(label="进水浓度(mg/L)")
          template(#default="scope")
            el-descriptions(:column="3" border size="small")
              el-descriptions-item(label="高") {{ scope.row.inflow.high }}
              el-descriptions-item(label="中") {{ scope.row.inflow.medium }}
              el-descriptions-item(label="低") {{ scope.row.inflow.low }}
        el-table-column(prop="outflow" label="出水浓度(mg/L)\n一级A标" width="120")
        el-table-column(label="处理程度" width="120")
          template(#default="scope")
            el-tag(type="success") {{ (scope.row.efficiency * 100).toFixed(1) }}%
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DataAnalysis, Cpu, List } from '@element-plus/icons-vue'

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
.section2-container {
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

  :deep(.el-table) {
    margin-top: 16px;
  }
}
</style>
