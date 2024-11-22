<template lang="pug">
div.section-container
  h2 4.5 A2/O工艺设计计算
  
  //- 1. 水力停留时间
  el-card.mb-4
    .card-header
      h3 4.5.1 水力停留时间
    .card-content
      p 厌氧池水力停留时间取值范围为1~2小时，本设计采用1.5小时。

  //- 2. 厌氧池容积计算
  el-card.mb-4
    .card-header
      h3 4.5.2 厌氧池容积计算
    .card-content
      .formula-block
        p 计算公式：
        .formula V<sub>p</sub> = (t<sub>p</sub>Q)/24 (m³)
        .formula-desc
          p 式中：
          p t<sub>p</sub> —— 厌氧池水力停留时间，h
          p Q —— 污水设计流量，m³/d

      el-table(:data="anaerobicData")
        el-table-column(prop="retentionTime" label="tp厌氧池水力停留时间(h)")
        el-table-column(prop="flowRate" label="Q污水设计流量(m³/d)")
        el-table-column(prop="volume" label="厌氧池容积Vp(m³)")

  //- 3. 缺氧池容积计算
  el-card.mb-4
    .card-header
      h3 4.5.3 缺氧池容积计算
    .card-content
      .formula-block
        p 计算公式：
        .formula V<sub>n</sub> = [0.001(N<sub>k</sub>-N<sub>te</sub>)-0.12ΔX<sub>v</sub>]/[K<sub>de</sub>(T)X]
        .formula-desc
          p 其中：
          p K<sub>de</sub>(T) = K<sub>de</sub>(20)1.08<sup>(T-20)</sup>
          p ΔX<sub>v</sub> = yY<sub>t</sub>Q(S<sub>0</sub>-S<sub>e</sub>)/1000

      el-table(:data="anoxicData1")
        el-table-column(prop="flowRate" label="Q(m³/d)")
        el-table-column(prop="nk" label="Nk(mg/L)")
        el-table-column(prop="nte" label="Nte(mg/L)")
        el-table-column(prop="deltaXv" label="ΔXv(kgMLVSS/d)")
        el-table-column(prop="kdeT" label="Kde(T)[kgNO3-N/(kgMLSS·d)]")
        el-table-column(prop="mlss" label="X(gMLSS/L)")

      el-table.mt-4(:data="anoxicData2")
        el-table-column(prop="kde20" label="Kde(20)[kgNO3-N/(kgMLSS·d)]")
        el-table-column(prop="temp" label="T(℃)")
        el-table-column(prop="mlvss" label="y(gMLVSS/gMLSS)")
        el-table-column(prop="yt" label="Yt(kgMLSS/kgBOD)")
        el-table-column(prop="s0" label="S0(mg/L)")
        el-table-column(prop="se" label="Se(mg/L)")
        el-table-column(prop="volume" label="Vn(m³)")

  //- 4. 好氧池容积计算
  el-card.mb-4
    .card-header
      h3 4.5.4 好氧池容积计算
    .card-content
      .formula-block
        p 计算公式：
        .formula V<sub>0</sub> = Q(S<sub>0</sub>-S<sub>e</sub>)θ<sub>c0</sub>Y<sub>t</sub>/1000X
        .formula-desc
          p 其中：
          p θ<sub>c0</sub> = F/μ
          p μ = 0.47[N<sub>a</sub>/(K<sub>N</sub>+N<sub>a</sub>)]e<sup>0.098(T-15)</sup>

      el-table(:data="aerobicData1")
        el-table-column(prop="flowRate" label="Q(m³/d)")
        el-table-column(prop="sludgeAge" label="θc0(d)")
        el-table-column(prop="safetyFactor" label="F")
        el-table-column(prop="growthRate" label="μ(d)")
        el-table-column(prop="nh3n" label="Na(mg/L)")
        el-table-column(prop="mlss" label="X(gMLSS/L)")

      el-table.mt-4(:data="aerobicData2")
        el-table-column(prop="kn" label="KN(mg/L)")
        el-table-column(prop="temp" label="T(℃)")
        el-table-column(prop="yt" label="Yt(kgMLSS/kgBOD)")
        el-table-column(prop="s0" label="S0(mg/L)")
        el-table-column(prop="se" label="Se(mg/L)")
        el-table-column(prop="volume" label="V0(m³)")

  //- 5. 曝气量计算
  el-card.mb-4
    .card-header
      h3 4.5.5 曝气量计算
    .card-content
      .formula-block
        p 计算公式：
        .formula O<sub>2</sub> = 0.001aQ(S<sub>0</sub>-S<sub>e</sub>)-cΔX<sub>v</sub>+b[0.001Q(N<sub>K</sub>-N<sub>ke</sub>)-0.12ΔX<sub>v</sub>]-0.62b[0.001Q(N<sub>t</sub>-N<sub>ke</sub>-N<sub>oe</sub>)-0.12ΔX<sub>v</sub>]

      el-table(:data="oxygenData1")
        el-table-column(prop="o2" label="O2(kgO2/d)")
        el-table-column(prop="a" label="a")
        el-table-column(prop="flowRate" label="Q(m³/d)")
        el-table-column(prop="s0" label="S0(mg/L)")
        el-table-column(prop="se" label="Se(mg/L)")
        el-table-column(prop="c" label="c")
        el-table-column(prop="deltaXv" label="ΔXv(kgMLVSS/d)")

      el-table.mt-4(:data="oxygenData2")
        el-table-column(prop="b" label="b(kgO2/kgN)")
        el-table-column(prop="nk" label="NK(mg/L)")
        el-table-column(prop="nke" label="NKe(mg/L)")
        el-table-column(prop="nt" label="Nt(mg/L)")
        el-table-column(prop="noe" label="Noe(mg/L)")

  //- A2/O工艺流程图
  el-card.mb-4
    .card-header
      h3 A2/O工艺流程示意图
    .card-content.text-center
      svg.technical-drawing(width="800" height="400" viewBox="0 0 800 400")
        //- 厌氧池
        rect(x="100" y="100" width="150" height="200" fill="none" stroke="black" stroke-width="2")
        text(x="175" y="210") 厌氧池
        
        //- 缺氧池
        rect(x="300" y="100" width="150" height="200" fill="none" stroke="black" stroke-width="2")
        text(x="375" y="210") 缺氧池
        
        //- 好氧池
        rect(x="500" y="100" width="150" height="200" fill="none" stroke="black" stroke-width="2")
        text(x="575" y="210") 好氧池
        
        //- 连接线和箭头
        path(d="M250,200 L300,200" fill="none" stroke="black" stroke-width="2" marker-end="url(#arrowhead)")
        path(d="M450,200 L500,200" fill="none" stroke="black" stroke-width="2" marker-end="url(#arrowhead)")
        
        //- 回流线
        path(d="M650,200 L700,200 L700,50 L250,50 L250,100" fill="none" stroke="black" stroke-width="2" marker-end="url(#arrowhead)")
        
        //- 箭头定义
        defs
          marker#arrowhead(markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto")
            polygon(points="0 0, 10 3.5, 0 7" fill="black")
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 厌氧池数据
const anaerobicData = ref([
  {
    retentionTime: 1.5,
    flowRate: 50000.00,
    volume: 3125
  }
])

// 缺氧池数据1
const anoxicData1 = ref([
  {
    flowRate: 50000,
    nk: 25,
    nte: 15,
    deltaXv: 2047.5,
    kdeT: 0.06,
    mlss: 3
  }
])

// 缺氧池数据2
const anoxicData2 = ref([
  {
    kde20: 0.06,
    temp: 20,
    mlvss: 0.65,
    yt: 0.3,
    s0: 220,
    se: 10,
    volume: 1412.78
  }
])

// 好氧池数据1
const aerobicData1 = ref([
  {
    flowRate: 50000.00,
    sludgeAge: 4.17,
    safetyFactor: 3,
    growthRate: 0.72,
    nh3n: 15,
    mlss: 3
  }
])

// 好氧池数据2
const aerobicData2 = ref([
  {
    kn: 1,
    temp: 20,
    yt: 0.30,
    s0: 220,
    se: 10,
    volume: 4379.63
  }
])

// 曝气量数据1
const oxygenData1 = ref([
  {
    o2: 14820.02,
    a: 1.47,
    flowRate: 50000.00,
    s0: 220.00,
    se: 10.00,
    c: 1.42,
    deltaXv: 2047.50
  }
])

// 曝气量数据2
const oxygenData2 = ref([
  {
    b: 4.57,
    nk: 25.00,
    nke: 10.00,
    nt: 40.00,
    noe: 5.00
  }
])
</script>

<style scoped lang="scss">
.section-container {
  padding: 20px;

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mt-4 {
    margin-top: 1rem;
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

  .text-center {
    text-align: center;
  }
}
</style>
