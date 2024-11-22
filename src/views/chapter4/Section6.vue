<template lang="pug">
.section-container
  h2.section-title 4.6 辐流沉淀池（二沉池）

  // 设计原则及参数
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          SetUp
        span.ml-2 4.6.1 设计原则及参数
    .card-content
      // 设计数据表格
      h4 1、沉淀池的设计数据宜按下表的规定取值
      el-table(:data="designData" border style="width: 100%" class="mb-4")
        el-table-column(prop="type" label="沉淀池类型" width="180")
        el-table-column(prop="settlingTime" label="沉淀时间 h")
        el-table-column(prop="surfaceLoad" label="表面水力负荷 m³/(m²·h)")
        el-table-column(prop="sludgePerPerson" label="每人每日污泥量(g/人·d)")
        el-table-column(prop="waterContent" label="污泥含水率%")
        el-table-column(prop="solidLoad" label="固体负荷 kg/(m²·d)")

      // 其他设计参数
      el-descriptions(:column="1" border)
        el-descriptions-item(label="超高要求") 不应小于 0.3m
        el-descriptions-item(label="有效水深") 宜采用 2.0~4.0m
        el-descriptions-item(label="污泥斗排泥") 每个污泥斗均应设单独的闸阀和排泥管
        el-descriptions-item(label="污泥斗倾角") 方斗宜为 60°，圆斗宜为 55°
        el-descriptions-item(label="污泥区容积") 活性污泥法：不大于2h的污泥量，需连续排泥；生物膜法：宜按4h的污泥量
        el-descriptions-item(label="排泥管直径") 不应小于 200mm

  // 沉淀池尺寸计算
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Histogram
        span.ml-2 4.6.2 沉淀池尺寸计算
    .card-content
      // 沉淀池表面积计算
      h4 （1）沉淀池表面积
      .formula-block
        .formula F = Q/(nq)
        .formula-desc
          p Q — 污水最大时流量，m³/s
          p q — 表面负荷，取 1.5m³/m²·h
          p n — 沉淀池个数，取 3 组

      el-table(:data="surfaceAreaData" border style="width: 100%" class="mb-4")
        el-table-column(prop="area" label="沉淀池表面积(m²)")
        el-table-column(prop="flow" label="污水最大时流量(m³/s)")
        el-table-column(prop="load" label="表面负荷(m³/m²·h)")
        el-table-column(prop="count" label="沉淀池个数")
        el-table-column(prop="diameter" label="池子直径(m)")

      // 实际水面面积计算
      h4.mt-4 （2）实际水面面积
      .formula-block
        .formula F' = πD²/4
        .formula-desc
          p D — 沉淀池直径，m

      el-table(:data="actualAreaData" border style="width: 100%" class="mb-4")
        el-table-column(prop="actualArea" label="实际水面面积(m²)")
        el-table-column(prop="diameter" label="池子直径(m)")
        el-table-column(prop="flow" label="污水最大时流量(m³/s)")
        el-table-column(prop="count" label="池子数")
        el-table-column(prop="actualLoad" label="实际负荷")

      // 有效水深计算
      h4.mt-4 （3）沉淀池有效水深
      .formula-block
        .formula h₁ = qt
        .formula-desc
          p t — 沉淀时间，取 4h
          p q — 表面负荷，m³/m²·h

      el-table(:data="depthData" border style="width: 100%" class="mb-4")
        el-table-column(prop="depth" label="有效水深(m)")
        el-table-column(prop="time" label="沉淀时间(h)")
        el-table-column(prop="load" label="表面负荷(m³/m²·h)")
        el-table-column(prop="ratio" label="径深比")

      // 污泥容积计算
      h4.mt-4 （4）污泥部分所需容积
      .formula-block
        .formula V₁ = ((1+R)QXT)/(2(X+Xr)n)
        .formula-desc
          p R — 回流比，取值 60%
          p X — 污泥浓度，取值 4000mg/L
          p Xr — 回流污泥浓度，mg/L
          p T — 两次排泥的时间间隔，取 2h
          p n — 沉淀池个数，3 组

      el-table(:data="sludgeVolumeData" border style="width: 100%" class="mb-4")
        el-table-column(prop="concentration" label="污泥浓度(mg/L)")
        el-table-column(prop="returnConcentration" label="污泥回流浓度(mg/L)")
        el-table-column(prop="returnRatio" label="回流比")
        el-table-column(prop="interval" label="时间间隔(h)")
        el-table-column(prop="poolCount" label="池子数")
        el-table-column(prop="maxFlow" label="污水最大流量(m³/d)")
        el-table-column(prop="volume" label="容积(m³)")

      // 技术图纸
      h4.mt-4 二沉池结构示意图
      .technical-drawing
        img(:src="'/src/assets/images/chapter4/radial-flow-tank.svg'" alt="二沉池结构示意图")
        .drawing-description.text-center 图4-6 二沉池结构示意图
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SetUp, Histogram } from '@element-plus/icons-vue'

// 设计数据表格数据
const designData = ref([
  {
    type: '初次沉淀池',
    settlingTime: '0.5~2.0',
    surfaceLoad: '1.5~4.5',
    sludgePerPerson: '16~36',
    waterContent: '95~97',
    solidLoad: '—'
  },
  {
    type: '二次沉淀池(生膜法后)',
    settlingTime: '1.5~4.0',
    surfaceLoad: '1.0~2.0',
    sludgePerPerson: '10~26',
    waterContent: '96~98',
    solidLoad: '≤150'
  },
  {
    type: '二次沉淀池(活性污泥法后)',
    settlingTime: '1.5~4.0',
    surfaceLoad: '0.6~1.5',
    sludgePerPerson: '12~32',
    waterContent: '99.2~99.6',
    solidLoad: '≤150'
  }
])

// 沉淀池表面积计算数据
const surfaceAreaData = ref([
  {
    area: 1388.89,
    flow: 1.74,
    load: 1.5,
    count: 3,
    diameter: 42.05
  }
])

// 实际水面面积数据
const actualAreaData = ref([
  {
    actualArea: 1452.20,
    diameter: 43.00,
    flow: 1.74,
    count: 3.00,
    actualLoad: 1.43
  }
])

// 有效水深数据
const depthData = ref([
  {
    depth: 6,
    time: 4,
    load: 1.50,
    ratio: 7.17
  }
])

// 污泥容积数据
const sludgeVolumeData = ref([
  {
    concentration: 4000,
    returnConcentration: 12000,
    returnRatio: 0.5,
    interval: 2,
    poolCount: 3,
    maxFlow: 150000,
    volume: 3125
  }
])
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

  .formula-block {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;

    .formula {
      font-family: "Times New Roman", Times, serif;
      font-size: 1.1rem;
      margin: 0.5rem 0;
    }

    .formula-desc {
      margin-top: 0.5rem;
      color: #606266;

      p {
        margin: 0.25rem 0;
      }
    }
  }

  .technical-drawing {
    max-width: 800px;
    margin: 2rem auto;

    img {
      width: 100%;
      height: auto;
    }

    .drawing-description {
      margin-top: 1rem;
      color: #606266;
    }
  }

  :deep(.el-descriptions__label) {
    font-weight: bold;
    color: #606266;
  }

  .text-center {
    text-align: center;
  }
}
</style>
