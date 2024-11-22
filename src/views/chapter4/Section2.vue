<template lang="pug">
.fine-screen-section
  h2.section-title 4.2 细格栅
  
  // Main Design Parameters
  el-card.mb-4
    .card-header(slot="header")
      h3 （1）主要设计参数
    
    el-collapse
      // Channel Width
      el-collapse-item(title="1）栅槽宽度")
        .formula-block
          p.formula B = S(n − 1) + bn(m) 
          p.formula-caption 公式（4-12）
          .formula-explanation
            p S——栅条宽度，m
            p b——栅条间隙，m
            p n——栅条间隙数，个
          
          p.formula n = (Qmax × √sinα) / (bhv)（个）
          p.formula-caption 公式（4-13）
          .formula-explanation
            p Qmax——最大设计流量，m³/s
            p α——格栅倾角，（°）
            p h——栅前水深，m
            p v——过栅流速，m/s

      // Head Loss
      el-collapse-item(title="2）通过格栅的水头损失")
        .formula-block
          p.formula h₁ = h₀k (m)
          p.formula h₀ = ξ(v²/2g)sinα (m)
          p.formula ξ = β(b/S)⁴/³
          p.formula-caption 公式（4-14,15,16）
          .formula-explanation
            p h₁——过栅水头损失，m
            p h₀——计算水头损失，m
            p k——系数，格栅受污物堵塞时水头损失增大倍数
            p ξ——阻力系数

      // Total Channel Height
      el-collapse-item(title="3）栅后槽总高度")
        .formula-block
          p.formula H = h + h₁ + h₂ (m)
          p.formula-caption 公式（4-17）
          .formula-explanation
            p h₂——栅前渠道超高，一般采用0.3m

      // Total Channel Length
      el-collapse-item(title="4）栅槽总长度")
        .formula-block
          p.formula L = l₁ + l₂ + 1.0 + 5.0 + H₁/tanα (m)
          p.formula-caption 公式（4-18）
          .formula-explanation
            p l₁——进水渠道渐宽部分的长度，m
            p l₂——栅槽与出水渠道连接处的渐窄部分长度，m
            p H₁——栅前渠道深，m

  // Calculation Results
  el-card.mb-4
    .card-header(slot="header")
      h3 （2）工艺尺寸

    el-tabs
      el-tab-pane(label="栅渣量计算")
        el-table(:data="screeningData" border)
          el-table-column(prop="parameter" label="参数" width="200")
          el-table-column(prop="value" label="数值" width="150")
          el-table-column(prop="unit" label="单位")

      el-tab-pane(label="水头损失计算")
        el-table(:data="headLossData" border)
          el-table-column(prop="parameter" label="参数" width="200")
          el-table-column(prop="value" label="数值" width="150")
          el-table-column(prop="unit" label="单位")

      el-tab-pane(label="栅槽尺寸计算")
        el-table(:data="channelData" border)
          el-table-column(prop="parameter" label="参数" width="200")
          el-table-column(prop="value" label="数值" width="150")
          el-table-column(prop="unit" label="单位")

      el-tab-pane(label="阻力系数")
        el-table(:data="resistanceData" border)
          el-table-column(prop="shape" label="形状" width="200")
          el-table-column(prop="formula" label="公式" width="200")
          el-table-column(prop="beta" label="β值" width="100")
          el-table-column(prop="note" label="备注")

      el-tab-pane(label="计算结果说明")
        el-table(:data="calculationNotes" border)
          el-table-column(prop="note" label="备注" width="400")

  // Technical Drawings
  el-card
    .card-header(slot="header")
      h3 （3）细格栅纵、平面图
    
    .drawing-container
      .drawing-wrapper
        // 纵剖面图
        svg.technical-drawing(viewBox="0 0 800 400")
          // 基础结构
          rect(x="100" y="50" width="600" height="300" fill="none" stroke="#333" stroke-width="2")
          
          // 格栅
          g.screen-bars(transform="translate(300,50) rotate(70)")
            line(x1="0" y1="0" x2="0" y2="320" stroke="#666" stroke-width="2")
            line(x1="20" y1="0" x2="20" y2="320" stroke="#666" stroke-width="2")
            line(x1="40" y1="0" x2="40" y2="320" stroke="#666" stroke-width="2")
            line(x1="60" y1="0" x2="60" y2="320" stroke="#666" stroke-width="2")
            line(x1="80" y1="0" x2="80" y2="320" stroke="#666" stroke-width="2")
          
          // 水流方向
          path(d="M150,200 L650,200" stroke="#4a9eff" stroke-width="2" fill="none")
          path(d="M620,190 L650,200 L620,210" fill="#4a9eff")
          text(x="380" y="180" fill="#4a9eff") 水流方向
          
          // 尺寸标注
          g.dimensions(stroke="#999")
            // 宽度标注
            line(x1="100" y1="380" x2="700" y2="380" stroke-width="1")
            text(x="400" y="395" text-anchor="middle") B=4200mm
            
            // 高度标注
            line(x1="80" y1="50" x2="80" y2="350" stroke-width="1")
            text(x="60" y="200" transform="rotate(-90,60,200)" text-anchor="middle") H=1360mm
      
      .drawing-description
        p.text-center 图4-2 细格栅纵剖面示意图

</template>

<script setup lang="ts">
import { ref } from 'vue'

// 基础设计参数
const designParams = ref([
  { parameter: '最大设计流量 Qmax', value: '0.58', unit: 'm³/s' },
  { parameter: '栅条宽度 S', value: '0.008', unit: 'm' },
  { parameter: '栅条间隙 b', value: '0.005', unit: 'm' },
  { parameter: '格栅安装倾角 α', value: '70', unit: '°' },
  { parameter: '栅前水深 h', value: '0.5', unit: 'm' },
  { parameter: '过栅流速 v', value: '0.8', unit: 'm/s' }
])

// 栅渣量计算数据
const screeningData = ref([
  { parameter: '栅渣量', value: '0.04', unit: 'm³/10³m³污水' },
  { parameter: '最大设计流量 Qmax', value: '0.58', unit: 'm³/s' },
  { parameter: '生活污水流量变化系数 Kz', value: '1.50', unit: '-' },
  { parameter: '每日栅渣量', value: '1.33', unit: 'm³/d' },
  { parameter: '格栅间隙数 n', value: '280', unit: '个' },
  { parameter: '栅槽宽度 B', value: '4.20', unit: 'm' }
])

// 水头损失计算数据
const headLossData = ref([
  { parameter: '栅前渠道超高 h₂', value: '0.3', unit: 'm' },
  { parameter: '格栅间隙数 n', value: '280', unit: '个' },
  { parameter: '栅条间隙 b', value: '0.005', unit: 'm' },
  { parameter: '过栅流速 v', value: '0.8', unit: 'm/s' },
  { parameter: '系数 K', value: '3.0', unit: '-' },
  { parameter: '形状系数 β', value: '2.42', unit: '-' },
  { parameter: '阻力系数 ξ', value: '6.10', unit: '-' },
  { parameter: '计算水头损失 h₀', value: '0.19', unit: 'm' },
  { parameter: '过栅水头损失 h₁', value: '0.56', unit: 'm' }
])

// 栅槽尺寸计算数据
const channelData = ref([
  { parameter: '栅槽宽度 B', value: '4.20', unit: 'm' },
  { parameter: '栅前水深 h', value: '0.5', unit: 'm' },
  { parameter: '进水渠展开角 α₁', value: '20', unit: '°' },
  { parameter: '格栅安装倾角 α', value: '70', unit: '°' },
  { parameter: '进水渠宽 B₁', value: '0.8', unit: 'm' },
  { parameter: '渐宽部分长度 l₁', value: '4.67', unit: 'm' },
  { parameter: '渐窄部分长度 l₂', value: '2.33', unit: 'm' },
  { parameter: '栅前渠道深 H₁', value: '0.8', unit: 'm' },
  { parameter: '栅槽总长度 L', value: '8.79', unit: 'm' },
  { parameter: '栅后槽总高度 H', value: '1.36', unit: 'm' }
])

// 阻力系数表格数据
const resistanceData = ref([
  { shape: '锐变矩形', formula: 'ξ = β(S/b)⁴/³', beta: '2.42', note: '本设计采用' },
  { shape: '迎水面为半圆形的矩形', formula: 'ξ = β(S/b)⁴/³', beta: '1.83', note: '-' },
  { shape: '圆形', formula: 'ξ = β(S/b)⁴/³', beta: '1.79', note: '-' },
  { shape: '迎水、背水面均为半圆形的矩形', formula: 'ξ = β(S/b)⁴/³', beta: '1.67', note: '-' }
])

// 计算结果说明
const calculationNotes = ref([
  '1. 栅条间隙选用5mm，符合细格栅设计要求(1.5~10mm)',
  '2. 过栅流速选用0.8m/s，在推荐范围内(0.6~1.0m/s)',
  '3. 格栅安装角度70°，符合设计规范(60°~90°)',
  '4. 栅前水深0.5m，满足最小水深要求',
  '5. 形状系数β选用2.42(锐变矩形)',
])
</script>

<style scoped lang="scss">
.fine-screen-section {
  padding: 20px;

  .section-title {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }

  .mb-4 {
    margin-bottom: 16px;
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

  .drawing-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .drawing-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .technical-drawing {
      max-width: 100%;
      height: auto;
    }

    .drawing-description {
      margin-top: 16px;
      text-align: center;
    }
  }
}
</style>
