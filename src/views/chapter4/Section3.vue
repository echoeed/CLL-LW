<template lang="pug">
.pump-station-section
  h2.section-title 4.3 提升泵站
  
  // 集水池设计
  el-card.mb-4
    .card-header(slot="header")
      h3 （1）集水池设计
    
    .design-description
      p 集水池的有效容积一般按照不小于最大一台泵5分钟的出水量计算。当水泵机组为人工管理时，每小时水泵开停次数不宜多于3次；当水泵组为自动控制时，每小时开起停泵次数，要求不超过6次，同时集水池尺寸不应过大，以免造成维护上的困难。
      p 水泵组一般设有污泥斗，池底做成不小于0.01的斜坡，坡向污泥斗。从平台到池底，应设置供上下用之附体。台上应有供吊泥用的梁勾、滑车等。

    // 泵站计算表
    el-table(:data="pumpStationData" border style="margin-top: 20px")
      el-table-column(prop="parameter" label="参数" width="180")
      el-table-column(prop="value" label="数值" width="120")
      el-table-column(prop="unit" label="单位")
    
    // 进水管信息
    h4.sub-title 进水管基本信息
    el-table(:data="inletPipeData" border style="margin-top: 10px")
      el-table-column(prop="parameter" label="参数" width="180")
      el-table-column(prop="value" label="数值" width="120")
      el-table-column(prop="unit" label="单位")

    // 高程信息
    h4.sub-title 高程信息
    el-table(:data="elevationData" border style="margin-top: 10px")
      el-table-column(prop="parameter" label="参数" width="180")
      el-table-column(prop="value" label="数值" width="120")
      el-table-column(prop="unit" label="单位")

  // 水泵总扬程估算
  el-card.mb-4
    .card-header(slot="header")
      h3 （2）水泵总扬程估算

    .formula-block
      p.formula Hs ≥ h₁ + h₂ + h₃ + h₄ (m)
      p.formula-caption 公式（4-23）
      .formula-explanation
        p h₁——泵站内管线水头损失
        p h₂——泵站外管线水头损失
        p h₃——集水池最低工作水位与所需提升的最高水位之间的高差
        p h₄——自由水头，m，按0.5~1.0m计

      p.formula h₂=（出水管线水平长度+竖向长度）× i × 1.3
      p.formula-caption 公式（4-24）

    // 水泵总扬程计算表
    el-table(:data="pumpHeadData" border style="margin-top: 20px")
      el-table-column(prop="parameter" label="参数" width="180")
      el-table-column(prop="value" label="数值" width="120")
      el-table-column(prop="unit" label="单位")

  // 选泵
  el-card
    .card-header(slot="header")
      h3 （3）选泵
    
    // 水泵型号表
    el-table(:data="pumpModelData" border style="margin-top: 20px")
      el-table-column(prop="model" label="水泵型号" width="150")
      el-table-column(prop="gap" label="栅条间隙" width="120")
      el-table-column(prop="pollution" label="节流污染物" width="150")

    .pump-selection
      p.conclusion 根据栅条间隙为20mm，≤20mm，所以选用2½PWL型号的水泵

  // 泵站示意图
  el-card.mt-4
    .drawing-container
      svg.technical-drawing(viewBox="0 0 800 600")
        // 集水池
        rect(x="100" y="200" width="600" height="300" fill="none" stroke="#333" stroke-width="2")
        
        // 进水管
        path(d="M50,250 L150,250" stroke="#4a9eff" stroke-width="4")
        
        // 水泵
        circle(cx="400" cy="150" r="30" fill="none" stroke="#333" stroke-width="2")
        rect(x="385" y="120" width="30" height="60" fill="none" stroke="#333" stroke-width="2")
        
        // 出水管
        path(d="M650,250 L750,250" stroke="#4a9eff" stroke-width="4")
        
        // 水位线
        line(x1="100" y1="350" x2="700" y2="350" stroke="#4a9eff" stroke-width="1" stroke-dasharray="5,5")
        
        // 标注
        text(x="400" y="400" text-anchor="middle") 集水池
        text(x="400" y="100" text-anchor="middle") 水泵
        text(x="100" y="230" text-anchor="middle") 进水
        text(x="700" y="230" text-anchor="middle") 出水
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 泵站计算数据
const pumpStationData = ref([
  { parameter: '平均秒流量', value: '1157.41', unit: 'L/s' },
  { parameter: '最大秒流量', value: '1736.111', unit: 'L/s' },
  { parameter: '泵站台数', value: '3', unit: '台' },
  { parameter: '每台泵站水容量', value: '578.70', unit: 'm³' },
  { parameter: 'W集水池容积', value: '208.33', unit: 'm³' },
  { parameter: '有效水深', value: '2', unit: 'm' },
  { parameter: '集水池面积', value: '104.17', unit: 'm²' },
  { parameter: '水头损失', value: '0.09', unit: 'm' }
])

// 进水管数据
const inletPipeData = ref([
  { parameter: '管径', value: '0.90', unit: 'm' },
  { parameter: '充满度h/D', value: '0.52', unit: '-' },
  { parameter: '流速', value: '1.72', unit: 'm/s' },
  { parameter: '坡度', value: '4.1', unit: '‰' }
])

// 高程数据
const elevationData = ref([
  { parameter: '地面高程', value: '0', unit: 'm' },
  { parameter: '最低水位', value: '-2.25', unit: 'm' },
  { parameter: '管径上端高程', value: '-2.55', unit: 'm' },
  { parameter: '管径中间高程', value: '-3', unit: 'm' },
  { parameter: '管径下端高程', value: '-3.45', unit: 'm' },
  { parameter: '最低高程', value: '-3.75', unit: 'm' },
  { parameter: '最高水位', value: '3', unit: 'm' },
  { parameter: '水位高差', value: '5.25', unit: 'm' }
])

// 水泵总扬程数据
const pumpHeadData = ref([
  { parameter: '出水管中心埋深', value: '3.00', unit: 'm' },
  { parameter: '地面高程', value: '0.00', unit: 'm' },
  { parameter: '出水水面高程', value: '3.00', unit: 'm' },
  { parameter: '出水管线水平长度', value: '0.60', unit: 'm' },
  { parameter: 'h₂泵站外水头损失', value: '0.034', unit: 'm' },
  { parameter: 'h₁泵站内水头损失', value: '1.50', unit: 'm' },
  { parameter: 'h₄自由水头', value: '1.00', unit: 'm' },
  { parameter: 'h₃水位高差', value: '5.25', unit: 'm' },
  { parameter: 'Hs总扬程', value: '7.78', unit: 'm' }
])

// 水泵型号数据
const pumpModelData = ref([
  { model: '2½PW、2½PWL', gap: '≤20', pollution: '人工：4~5\n机械：5~6' },
  { model: '4PW、4PWL', gap: '≤40', pollution: '2.7' },
  { model: '6PWL', gap: '≤70', pollution: '0.8' },
  { model: '8PWL', gap: '≤90', pollution: '0.5' },
  { model: '10PWL', gap: '≤110', pollution: '<0.5' },
  { model: '32PWL', gap: '≤150', pollution: '<0.5' }
])
</script>

<style scoped lang="scss">
.pump-station-section {
  padding: 20px;

  .section-title {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }

  .mb-4 {
    margin-bottom: 16px;
  }

  .mt-4 {
    margin-top: 16px;
  }

  .sub-title {
    margin: 20px 0 10px;
    font-size: 18px;
    color: #333;
  }

  .design-description {
    margin: 16px 0;
    line-height: 1.6;
    color: #666;
  }

  .formula-block {
    padding: 16px;
    background-color: #f8f9fa;
    border-radius: 4px;

    .formula {
      font-family: "Times New Roman", serif;
      font-size: 18px;
      margin-bottom: 8px;
    }

    .formula-caption {
      color: #666;
      font-size: 14px;
      margin-bottom: 12px;
    }

    .formula-explanation {
      margin-top: 12px;
      font-size: 14px;
      color: #666;

      p {
        margin: 4px 0;
      }
    }
  }

  .pump-selection {
    margin-top: 16px;
    
    .conclusion {
      font-weight: bold;
      color: #409EFF;
    }
  }

  .drawing-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .technical-drawing {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
