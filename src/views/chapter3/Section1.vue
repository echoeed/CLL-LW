<template lang="pug">
.section1-container
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          SetUp
        span.ml-2 3.1 设计要求

    .subsection
      h3.subtitle
        el-icon
          Guide
        span.ml-2 3.1.1 污水处理厂的设计原则

      // 设计原则列表
      el-timeline
        el-timeline-item(
          v-for="(principle, index) in designPrinciples"
          :key="index"
          :type="principle.type"
        )
          h4.principle-title {{ principle.title }}
          p.principle-content {{ principle.content }}

      // 运行原则
      h3.subtitle.mt-4
        el-icon
          Operation
        span.ml-2 污水处理工程运行过程中应遵循的原则
      
      el-card(shadow="hover")
        .operation-principles
          p 在保证污水处理效果的同时，应遵循以下原则：
          el-descriptions(:column="1" border)
            el-descriptions-item(label="水资源管理")
              | 正确处理城市、工业、农业等各方面的用水关系，合理安排水资源的综合利用
            el-descriptions-item(label="资源节约")
              | 节约用地，节约劳动力
            el-descriptions-item(label="发展规划")
              | 考虑污水处理厂的发展前景
            el-descriptions-item(label="工艺选择")
              | 尽量采用处理效果好的先进工艺
            el-descriptions-item(label="设计要求")
              | 合理设计、合理布局，做到技术可行、经济合理
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SetUp, Guide, Operation } from '@element-plus/icons-vue'

const designPrinciples = ref([
  {
    type: 'success',
    title: '1. 排放达标要求',
    content: '污水厂处理后污水必须达到排放要求。考虑现实的经济和技术条件，以及当地的具体情况（如施工条件），在此基础上选择合适的处理工艺流程、构（建）筑物形式和主要设备设计标准。'
  },
  {
    type: 'warning',
    title: '2. 设计参数可靠性',
    content: '设计时必须充分掌握和认真研究各项自然条件，如水质水量资料、同类工程资料。按照工程的处理要求，全面分析各种因素，选择合适的设计数据，遵守现行设计规范，保证必要的安全系数。'
  },
  {
    type: 'primary',
    title: '3. 经济性要求',
    content: '总体布置、单体设计及药剂选用等尽可能采用合理措施降低工程造价和运行管理费用。'
  },
  {
    type: 'success',
    title: '4. 技术合理性',
    content: '在经济合理的原则下，必须根据需要，尽可能采用先进的工艺、机械和自控技术，但要确保安全可靠。'
  },
  {
    type: 'warning',
    title: '5. 近远期结合',
    content: '不宜分期建设的部分，如配水井、泵房及加药间等，其土建部分应一次建成；在无远期规划的情况下，设计时应为今后发展留有挖潜和扩建的条件。'
  },
  {
    type: 'danger',
    title: '6. 安全运行',
    content: '必须考虑安全运行的条件，如适当设置分流设施、超越管线、甲烷气的安全储存等。'
  },
  {
    type: 'info',
    title: '7. 环境美化',
    content: '在经济条件允许情况下，场内布局、构（建）筑物外观、环境及卫生等可以适当注意美观和绿化。'
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

  .subsection {
    padding: 16px;
  }

  .principle-title {
    margin: 0;
    font-size: 16px;
    color: #303133;
  }

  .principle-content {
    margin: 8px 0;
    color: #606266;
    line-height: 1.6;
  }

  .operation-principles {
    p {
      margin-bottom: 16px;
      color: #303133;
    }
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
