<template lang="pug">
div.section-container
  h2 4.4 曝气沉砂池设计

  //- 1. 沉砂池有效容积计算
  el-card.mb-4
    .card-header
      h3 4.4.1 沉砂池有效容积
    .card-content
      .formula-block
        p 计算公式：
        .formula V = Q<sub>max</sub>t × 60 (m³)
        .formula-desc
          p 式中：
          p Q<sub>max</sub> —— 最大设计流量，m³/s
          p t —— 最大设计流量时的运行时间，min

      el-table(:data="volumeData")
        el-table-column(prop="poolCount" label="池子个数 N")
        el-table-column(prop="qmax" label="Qmax(m³/s)")
        el-table-column(prop="time" label="t 停留时间")
        el-table-column(prop="volume" label="有效容积 V(m³)")

  //- 2. 水流断面面积计算
  el-card.mb-4
    .card-header
      h3 4.4.2 水流断面面积
    .card-content
      .formula-block
        p 计算公式：
        .formula A = Q<sub>max</sub>/v<sub>1</sub> (m²)
        .formula-desc
          p 式中：
          p A —— 水流断面面积，m²
          p v<sub>1</sub> —— 最大设计流量时的水平流速，m/s

      el-table(:data="sectionAreaData")
        el-table-column(prop="qmax" label="Qmax(m³/s)")
        el-table-column(prop="velocity" label="水平流速(m/s)")
        el-table-column(prop="area" label="水流断面面积(m²)")

  //- 3. 池总宽度计算
  el-card.mb-4
    .card-header
      h3 4.4.3 池总宽度
    .card-content
      .formula-block
        p 计算公式：
        .formula B = A/h<sub>2</sub> (m)
        .formula-desc
          p 式中：
          p h<sub>2</sub> —— 设计有效水深，m
          p B —— 沉砂池宽度，m
          p A —— 水流断面面积，m²

      el-table(:data="widthData")
        el-table-column(prop="area" label="水流断面面积(m²)")
        el-table-column(prop="depth" label="有效水深(m)")
        el-table-column(prop="totalWidth" label="池子宽度 B(m)")
        el-table-column(prop="poolCount" label="池子数 n")
        el-table-column(prop="singleWidth" label="每个池子宽度 b(m)")

  //- 4. 池长计算
  el-card.mb-4
    .card-header
      h3 4.4.4 池长计算
    .card-content
      .formula-block
        p 计算公式：
        .formula L = V/A (m)

      el-table(:data="lengthData")
        el-table-column(prop="volume" label="有效容积 V(m³)")
        el-table-column(prop="area" label="水流断面面积(m²)")
        el-table-column(prop="length" label="池长 L(m)")

  //- 5. 空气量计算
  el-card.mb-4
    .card-header
      h3 4.4.5 每小时所需空气量
    .card-content
      .formula-block
        p 计算公式：
        .formula q = 3600Qd
        .formula-desc
          p 式中：
          p d —— 每m³污水所需空气量，m³/m³
          p q —— 每小时所需空气量m³/h

      el-table(:data="airData")
        el-table-column(prop="airPerM3" label="d 所需空气量(m³/m³)")
        el-table-column(prop="qmax" label="Qmax(m³/s)")
        el-table-column(prop="airSupply" label="供气量 q(m³/h)")

  //- 6. 沉砂室容积计算
  el-card.mb-4
    .card-header
      h3 4.4.6 沉砂室容积计算
    .card-content
      .formula-block
        p 计算公式：
        .formula V = (86400Q̅XT)/(10⁶) (m³)
        .formula V₀ = V/N
        .formula-desc
          p 式中：
          p X —— 城市污水沉沙量，一般采用30m³/10⁶m³污水
          p T —— 清除沉沙的间隔时间，d
          p V —— 沉砂室所需容积，m³
          p V₀ —— 每个沉砂斗容积，m³

      el-table(:data="sandRoomData")
        el-table-column(prop="avgFlow" label="平均流量(m³)")
        el-table-column(prop="sandContent" label="X(m³/10⁶m³)")
        el-table-column(prop="cleanTime" label="T(d)")
        el-table-column(prop="totalVolume" label="V 沉砂室所需容积(m³)")
        el-table-column(prop="poolCount" label="池子个数 N")
        el-table-column(prop="singleVolume" label="V₀沉沙斗容积(m³)")

  //- 7. 进出水设施
  el-card.mb-4
    .card-header
      h3 4.4.7 进出水设施
    .card-content
      p.mb-2 进水渠道：采用DN900mm管道，进水渠道尺寸1.2m×0.8m
      p.mb-2 出水堰：采用薄壁堰，堰上水头0.26m
      p.mb-2 排砂装置：采用DN200mm吸砂泵排砂

  //- SVG技术图
  el-card.mb-4
    .card-header
      h3 曝气沉砂池示意图
    .card-content.text-center
      svg.technical-drawing(width="800" height="400" viewBox="0 0 800 400")
        //- 池体轮廓
        rect(x="100" y="50" width="600" height="300" fill="none" stroke="black" stroke-width="2")
        //- 进水口
        path(d="M100,150 L50,150 L50,250 L100,250" fill="none" stroke="black" stroke-width="2")
        //- 出水堰
        path(d="M700,100 L750,100 L750,200" fill="none" stroke="black" stroke-width="2")
        //- 沉砂斗
        path(d="M300,350 L400,300 L500,350" fill="none" stroke="black" stroke-width="2")
        //- 曝气装置
        circle(cx="350" cy="200" r="5" fill="black")
        circle(cx="450" cy="200" r="5" fill="black")
        //- 标注文字
        text(x="400" y="30") 曝气沉砂池平面图
        text(x="50" y="130") 进水口
        text(x="750" y="130") 出水堰
        text(x="400" y="370") 沉砂斗

</template>

<script setup lang="ts">
import { ref } from 'vue'

// 沉砂池有效容积数据
const volumeData = ref([
  {
    poolCount: 3.00,
    qmax: 0.58,
    time: 2.00,
    volume: 69.44
  }
])

// 水流断面面积数据
const sectionAreaData = ref([
  {
    qmax: 0.58,
    velocity: 0.10,
    area: 5.79
  }
])

// 池总宽度数据
const widthData = ref([
  {
    area: 5.79,
    depth: 2.00,
    totalWidth: 2.89,
    poolCount: 2.00,
    singleWidth: 1.45
  }
])

// 池长计算数据
const lengthData = ref([
  {
    volume: 69.44,
    area: 5.79,
    length: 12.00
  }
])

// 空气量计算数据
const airData = ref([
  {
    airPerM3: 0.20,
    qmax: 0.58,
    airSupply: 416.67
  }
])

// 沉砂室容积数据
const sandRoomData = ref([
  {
    avgFlow: 100000,
    sandContent: 30,
    cleanTime: 2,
    totalVolume: 6,
    poolCount: 3,
    singleVolume: 2
  }
])
</script>

<style scoped lang="scss">
.section-container {
  padding: 20px;

  .mb-4 {
    margin-bottom: 1rem;
  }

  .card-header {
    margin-bottom: 1rem;

    h3 {
      margin: 0;
      color: #1f2f3d;
      font-size: 1.25rem;
    }
  }

  .card-content {
    padding: 1rem;
  }

  .formula-block {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;

    .formula {
      font-size: 1.1rem;
      margin: 0.5rem 0;
      font-family: "Times New Roman", Times, serif;
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
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }
}
</style>
