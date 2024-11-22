<template lang="pug">
.section-container
  el-row
    el-col(:span="24")
      h1.section-title 1.3 项目可行性

      // 污水处理工艺概述
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Operation
            span.ml-2 1. 污水处理工艺概述
        .text-content
          p 目前，国内污水处理的方法主要包括以下几种：
          el-row(:gutter="20")
            el-col(:span="8" v-for="(method, index) in treatmentMethods" :key="index")
              el-card(shadow="hover")
                template(#header)
                  .card-header {{ method.name }}
                .card-content
                  p(v-for="point in method.points") {{ point }}

          el-divider 适用工艺分析
          p 对于规模0.1~2万m³/d的污水处理厂，以下工艺优势更为明显：
          el-timeline
            el-timeline-item(v-for="process in processes" :key="process.name")
              h4 {{ process.name }}
              p {{ process.description }}

          el-alert(
            type="info"
            :closable="false"
            show-icon
          )
            template(#title)
              span 本项目选择
            template(#default)
              p 本次参观的第二净水厂采用的是A²O厌氧-缺氧-好氧活性污泥法污水处理，因此本次课程设计也参照第二净水厂进行设计。

      // 可生化性及生物脱氮除磷可行性
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              DataAnalysis
            span.ml-2 2. 可生化性及生物脱氮除磷可行性

        .text-content
          // 有机污染物可生化性分析
          el-collapse(v-model="activeNames")
            el-collapse-item(title="有机污染物的可生化性分析" name="1")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    TrendCharts
                  span 有机污染物的可生化性分析
              
              el-table(:data="biodegradabilityData" border style="width: 100%")
                el-table-column(prop="bod_cod" label="BOD₅/CODcr" width="180")
                el-table-column(prop="biodegradability" label="可生化性" width="180")
                
              el-alert(
                class="mt-4"
                type="success"
                :closable="false"
                show-icon
              )
                template(#title)
                  span 本项目分析
                template(#default)
                  p 本项目污水处理厂进水BOD₅/CODcr=0.57，具有较好的可生化性，可采用生化处理方法去除污水中的污染物。

            // 生物脱氮基本原理
            el-collapse-item(name="2")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    Cpu
                  span 生物脱氮基本原理
              
              el-steps(:active="2" finish-status="success")
                el-step(title="氨化阶段" description="有机氮、蛋白质在好氧条件下被氨化菌转化为氨氮")
                el-step(title="硝化阶段" description="氨氮在硝化菌作用下变成硝酸盐氮")
                el-step(title="反硝化阶段" description="在缺氧条件下，由反硝化菌作用，硝酸中的氨还原成氮气")

              el-divider 影响因素
              el-tag(v-for="factor in denitrificationFactors" :key="factor" class="mr-2") {{ factor }}

            // 生物除磷基本原理
            el-collapse-item(name="3")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    Aim
                  span 生物除磷基本原理
              
              el-card(class="mb-4")
                template(#header)
                  span 关键条件
                el-descriptions(:column="1" border)
                  el-descriptions-item(label="厌氧状态")
                    span 混合液中既无溶解氧(O₂)也无结合氧
                  el-descriptions-item(label="有机物供应")
                    span 提供足够的易降解、小分子有机物
                  el-descriptions-item(label="泥龄控制")
                    span 控制较短的泥龄，通过剩余污泥排放将磷排出系统

            // 本工程生物脱氨除磷可行性
            el-collapse-item(name="4")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    Check
                  span 本工程生物脱氨除磷可行性
              
              el-descriptions(:column="1" border)
                el-descriptions-item(label="规范要求")
                  p BOD₅/TP ≥ 17
                  p BOD₅/TN ≥ 4
                el-descriptions-item(label="本项目指标")
                  p BOD₅/TN = 5
                  p BOD₅/TP = 33

              el-alert(
                class="mt-4"
                type="success"
                :closable="false"
                show-icon
              )
                template(#title)
                  span 可行性结论
                template(#default)
                  p 本项目各项指标均满足生物脱氮除磷的要求，且随着污水管道系统的完善，进水水质将逐步提高，生物脱氮除磷性能也相应增强。

      // 最终工艺选择
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Select
            span.ml-2 最终工艺选择
        .text-content
          el-alert(
            type="info"
            :closable="false"
            show-icon
          )
            template(#title)
              span A²/O+二沉池+深度处理
            template(#default)
              p A²/O工艺是在传统普通活性污泥法基础上发展起来的污水处理工艺，通过厌氧、缺氧及好氧三个生物处理过程，达到同时去除BOD、氮和磷的目的。

          el-descriptions(:column="1" border class="mt-4")
            el-descriptions-item(label="BOD₅和SS去除效率")
              span 90%以上
            el-descriptions-item(label="总氮去除效率")
              span 55~80%
            el-descriptions-item(label="总磷去除效率")
              span 50~70%

          el-divider 深度处理过程
          el-steps(:active="3" finish-status="success" direction="vertical")
            el-step(title="二沉池处理" description="进行泥水分离，去除大部分悬浮物")
            el-step(title="药剂处理" description="投加PAC，使悬浮物、胶体脱稳，形成易沉淀的絮状体")
            el-step(title="过滤处理" description="使用无阀过滤器过滤掉细小颗粒，作为最后的保障")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Operation, DataAnalysis, TrendCharts, Cpu, Aim, Check, Select } from '@element-plus/icons-vue'

const activeNames = ref(['1'])

const treatmentMethods = [
  {
    name: '生化法',
    points: ['最广泛使用', '处理效果好', '经济实用']
  },
  {
    name: '化学法',
    points: ['除磷效果好', '有机物去除差', '成本较高']
  },
  {
    name: '土地处理法',
    points: ['受场地限制', '不适合本项目']
  }
]

const processes = [
  {
    name: 'SBR工艺',
    description: '间歇式活性污泥法，运行灵活'
  },
  {
    name: 'A²/O工艺',
    description: '脱氮除磷效果优异，运行稳定'
  },
  {
    name: '生物接触氧化法',
    description: '占地面积小，抗冲击负荷能力强'
  }
]

const biodegradabilityData = [
  {
    bod_cod: '>0.45',
    biodegradability: '好'
  },
  {
    bod_cod: '0.3~0.45',
    biodegradability: '较好'
  },
  {
    bod_cod: '0.2~0.3',
    biodegradability: '较难'
  },
  {
    bod_cod: '<0.2',
    biodegradability: '不宜'
  }
]

const denitrificationFactors = ['温度', '溶解氧', 'pH值', '反硝化碳源']
</script>

<style lang="scss" scoped>
.section-container {
  padding: 20px;

  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--el-text-color-primary);
  }

  .mb-4 {
    margin-bottom: 16px;
  }

  .mb-2 {
    margin-bottom: 8px;
  }

  .mr-2 {
    margin-right: 8px;
  }

  .ml-2 {
    margin-left: 8px;
  }

  .mt-4 {
    margin-top: 16px;
  }

  .card-header {
    display: flex;
    align-items: center;
  }

  .text-content {
    line-height: 1.6;
    color: var(--el-text-color-regular);

    p {
      margin: 8px 0;
    }
  }

  .collapse-header {
    display: flex;
    align-items: center;
  }

  .el-tag {
    margin-bottom: 8px;
  }
}
</style>
