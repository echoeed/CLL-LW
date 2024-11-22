<template lang="pug">
.section1-container
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Filter
        span.ml-2 4.1 粗格栅

    .content
      h3.subtitle
        el-icon
          Tools
        span.ml-2 主要设计参数

      // 设计参数公式
      .formulas
        el-collapse(v-model="activeFormulas")
          el-collapse-item(title="1. 栅槽宽度" name="1")
            .formula-content
              .formula B = S(n − 1) + bn(m)
              .formula n = (Qmax√sinα)/(bhv)
              .parameter-list
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="S") 栅条宽度，m
                  el-descriptions-item(label="b") 栅条间隙，m
                  el-descriptions-item(label="n") 栅条间隙数，个
                  el-descriptions-item(label="Qmax") 最大设计流量，m³/s
                  el-descriptions-item(label="α") 格栅倾角，（°）
                  el-descriptions-item(label="h") 栅前水深，m
                  el-descriptions-item(label="v") 过栅流速，m/s

          el-collapse-item(title="2. 通过格栅的水头损失" name="2")
            .formula-content
              .formula h₁ = h₀k(m)
              .formula h₀ = ξ(v²/2g)sinα(m)
              .formula ξ = β(b/S)⁴/³
              .parameter-list
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="h₁") 过栅水头损失，m
                  el-descriptions-item(label="h₀") 计算水头损失，m
                  el-descriptions-item(label="g") 重力加速度，m/s²
                  el-descriptions-item(label="k") 系数，格栅受污物堵塞时水头损失增大倍数，一般采用3
                  el-descriptions-item(label="ξ") 阻力系数，其值与栅条断面形状有关
                  el-descriptions-item(label="β") 形状系数

          el-collapse-item(title="3. 栅后槽总高度" name="3")
            .formula-content
              .formula H = h + h₁ + h₂(m)
              .parameter-list
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="h₂") 栅前渠道超高，m，一般采用0.3m

          el-collapse-item(title="4. 栅槽总长度" name="4")
            .formula-content
              .formula L = l₁ + l₂ + 1.0 + 5.0 + H₁/tanα(m)
              .formula l₁ = (B - B₁)/(2tanα₁)(m)
              .formula l₂ = l₁/2(m)
              .formula H₁ = h + h₂(m)
              .parameter-list
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="l₁") 进水渠道渐宽部分的长度，m
                  el-descriptions-item(label="B₁") 进水渠宽，m
                  el-descriptions-item(label="α₁") 进水渠道渐宽部分的展开角度，一般可采用20°
                  el-descriptions-item(label="l₂") 栅槽与出水渠道连接处的渐窄部分长度，m
                  el-descriptions-item(label="H₁") 栅前渠道深，m

          el-collapse-item(title="5. 每日栅渣量" name="5")
            .formula-content
              .formula W = (Qmax × W₁ × 86400)/(Kz × 1000)(m³/d)
              .parameter-list
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="W₁") 栅渣量（m³/10³m³污水）
                  el-descriptions-item(label="Kz") 生活污水流量总变化系数

      // 计算结果表格
      h3.subtitle.mt-4
        el-icon
          DataAnalysis
        span.ml-2 计算结果

      el-tabs(type="border-card")
        el-tab-pane(label="栅槽宽度计算")
          el-table(:data="widthCalcData" border style="width: 100%")
            el-table-column(prop="h" label="栅前水深(m)")
            el-table-column(prop="v" label="过栅流速(m/s)")
            el-table-column(prop="b" label="栅条间隙(m)")
            el-table-column(prop="alpha" label="格栅安装倾角(°)")
            el-table-column(prop="S" label="栅条宽度(m)")
            el-table-column(prop="n" label="格栅间隙数")
            el-table-column(prop="B" label="栅槽宽度(m)")

        el-tab-pane(label="水头损失计算")
          el-table(:data="headLossData" border style="width: 100%")
            el-table-column(prop="beta" label="形状系数β")
            el-table-column(prop="xi" label="阻力系数ξ")
            el-table-column(prop="h0" label="计算水头损失(m)")
            el-table-column(prop="h1" label="过栅水头损失(m)")

        el-tab-pane(label="栅渣量计算")
          el-table(:data="wasteCalcData" border style="width: 100%")
            el-table-column(prop="W1" label="栅渣量(m³/10³m³污水)")
            el-table-column(prop="Qmax" label="最大设计流量(m³/s)")
            el-table-column(prop="Kz" label="变化系数")
            el-table-column(prop="W" label="每日栅渣量(m³/d)")

      // 设计图
      h3.subtitle.mt-4
        el-icon
          Picture
        span.ml-2 粗格栅设计图

      .design-drawing
        svg(
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        )
          // 纵剖面图
          g.elevation-view(transform="translate(50, 50)")
            // 基础结构
            path(d="M 50 400 L 750 400" stroke="#333" stroke-width="2" fill="none")
            path(d="M 150 200 L 650 200" stroke="#333" stroke-width="2" fill="none")
            
            // 格栅
            g(transform="rotate(-20, 400, 300)")
              for i in 20
                line(
                  :x1="380 + i * 10"
                  y1="150"
                  :x2="380 + i * 10"
                  y2="450"
                  stroke="#666"
                  stroke-width="2"
                )

            // 标注
            text(x="100" y="180") 进水
            text(x="650" y="180") 出水
            text(x="400" y="500") 粗格栅纵剖面图

          // 平面图
          g.plan-view(transform="translate(50, 300)")
            // 基础结构
            rect(x="150" y="200" width="500" height="100" fill="none" stroke="#333" stroke-width="2")
            
            // 格栅
            for i in 20
              line(
                :x1="350 + i * 5"
                y1="200"
                :x2="350 + i * 5"
                y2="300"
                stroke="#666"
                stroke-width="1"
              )

            // 标注
            text(x="400" y="350") 粗格栅平面图

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Filter,
  Tools,
  DataAnalysis,
  Picture
} from '@element-plus/icons-vue'

const activeFormulas = ref(['1'])

const widthCalcData = ref([
  {
    h: 0.5,
    v: 0.8,
    b: 0.02,
    alpha: 70,
    S: 0.01,
    n: 70.12,
    B: 2.09
  }
])

const headLossData = ref([
  {
    beta: 2.42,
    xi: 0.960,
    h0: 0.03,
    h1: 0.09
  }
])

const wasteCalcData = ref([
  {
    W1: 0.05,
    Qmax: 0.58,
    Kz: 1.5,
    W: 1.67
  }
])
</script>

<style lang="scss" scoped>
.section1-container {
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

  .formulas {
    .formula-content {
      padding: 16px;

      .formula {
        font-family: "Times New Roman", Times, serif;
        font-size: 18px;
        margin: 8px 0;
        color: #303133;
      }

      .parameter-list {
        margin-top: 16px;
      }
    }
  }

  .design-drawing {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;

    svg {
      width: 100%;
      height: auto;
    }
  }

  :deep(.el-descriptions__label) {
    font-weight: bold;
    color: #606266;
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
