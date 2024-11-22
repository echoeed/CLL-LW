<template lang="pug">
.section2-container
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          SetUp
        span.ml-2 3.2 工艺流程选择

    .process-flow
      h3.subtitle
        el-icon
          Connection
        span.ml-2 工艺流程图
      
      .flow-diagram
        svg(
          viewBox="0 0 1000 400"
          xmlns="http://www.w3.org/2000/svg"
        )
          // 定义箭头
          defs
            marker#arrowhead(
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            )
              polygon(points="0 0, 10 3.5, 0 7" fill="#409EFF")

          // 流程框和连接线
          // 1. 进水
          rect(x="50" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="90" y="205" text-anchor="middle" fill="#303133") 城镇污水

          // 2. 格栅
          rect(x="170" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="210" y="205" text-anchor="middle" fill="#303133") 格栅

          // 3. 沉砂池
          rect(x="290" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="330" y="195" text-anchor="middle" fill="#303133") 曝气
          text(x="330" y="215" text-anchor="middle" fill="#303133") 沉砂池

          // 4. A2/O池
          rect(x="410" y="160" width="200" height="80" rx="5" fill="#fff" stroke="#409EFF")
          line(x1="410" y1="180" x2="610" y2="180" stroke="#409EFF" stroke-dasharray="2")
          line(x1="410" y1="220" x2="610" y2="220" stroke="#409EFF" stroke-dasharray="2")
          text(x="450" y="175" fill="#303133") 厌氧池
          text(x="510" y="205" fill="#303133") 缺氧池
          text(x="570" y="235" fill="#303133") 好氧池

          // 5. 沉淀池
          rect(x="650" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="690" y="195" text-anchor="middle" fill="#303133") 辐流
          text(x="690" y="215" text-anchor="middle" fill="#303133") 沉淀池

          // 6. 絮凝池
          rect(x="770" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="810" y="195" text-anchor="middle" fill="#303133") 絮凝
          text(x="810" y="215" text-anchor="middle" fill="#303133") 沉淀池

          // 7. 消毒和排放
          rect(x="890" y="180" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="930" y="195" text-anchor="middle" fill="#303133") 紫外线
          text(x="930" y="215" text-anchor="middle" fill="#303133") 消毒

          // 污泥处理线
          rect(x="650" y="280" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="690" y="295" text-anchor="middle" fill="#303133") 污泥
          text(x="690" y="315" text-anchor="middle" fill="#303133") 浓缩池

          rect(x="770" y="280" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="810" y="295" text-anchor="middle" fill="#303133") 污泥
          text(x="810" y="315" text-anchor="middle" fill="#303133") 脱水

          rect(x="890" y="280" width="80" height="40" rx="5" fill="#fff" stroke="#409EFF")
          text(x="930" y="305" text-anchor="middle" fill="#303133") 外运处置

          // 连接线
          g(stroke="#409EFF" marker-end="url(#arrowhead)")
            // 主线
            line(x1="130" y1="200" x2="170" y2="200")
            line(x1="250" y1="200" x2="290" y2="200")
            line(x1="370" y1="200" x2="410" y2="200")
            line(x1="610" y1="200" x2="650" y2="200")
            line(x1="730" y1="200" x2="770" y2="200")
            line(x1="850" y1="200" x2="890" y2="200")

            // 污泥线
            line(x1="690" y1="220" x2="690" y2="280")
            line(x1="730" y1="300" x2="770" y2="300")
            line(x1="850" y1="300" x2="890" y2="300")

            // 回流线
            path(d="M 690 280 L 690 260 L 510 260 L 510 240" fill="none")

      .process-steps
        h3.subtitle.mt-4
          el-icon
            List
          span.ml-2 处理步骤详解

        el-collapse(v-model="activeNames")
          el-collapse-item(
            v-for="step in processSteps"
            :key="step.id"
            :title="step.title"
            :name="step.id"
          )
            template(#title)
              .step-header
                el-icon(:size="20")
                  component(:is="step.icon")
                span.ml-2 {{ step.title }}
            
            .step-content
              h4 作用：
              p {{ step.purpose }}
              h4 操作：
              p {{ step.operation }}
              
        el-alert(
          type="info"
          show-icon
          :closable="false"
          class="mt-4"
        ).
          整个工艺流程通过物理、化学和生物处理，有效地去除废水中的各种污染物，确保最终的排放水质符合环保标准。

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  SetUp, 
  Connection, 
  List,
  Filter,
  WindPower,
  Cpu,
  Bowl,
  Tickets,
  Van,
  TopRight,
  Lightning,
  Watch
} from '@element-plus/icons-vue'

const activeNames = ref(['1'])

const processSteps = ref([
  {
    id: '1',
    title: '1. 粗格栅和细格栅',
    icon: Filter,
    purpose: '用于去除废水中的大颗粒和小颗粒固体废物，例如树叶、纸张、砂砾等。',
    operation: '污水通过粗格栅和细格栅的过程，通过物理筛选去除颗粒物。'
  },
  {
    id: '2',
    title: '2. 曝气沉砂池',
    icon: WindPower,
    purpose: '提供氧气，维持好氧环境，促进细菌对有机物的生物降解，同时沉淀较大的颗粒。',
    operation: '向水中通入空气，形成气泡，加速有机物的分解，沉砂池的设计使水在其中停留一段时间，同时让较大颗粒沉淀到底部。这有助于去除悬浮物和沉积物。'
  },
  {
    id: '3',
    title: '3. A2/O法处理（厌氧池、缺氧池、好氧池）',
    icon: Cpu,
    purpose: '通过不同区域的组合和污泥回流，去除水中的有机污染物、氮和磷。',
    operation: '污水在不同氧气条件下经过不同区域，通过生物降解和脱氮脱磷过程来净化水。'
  },
  {
    id: '4',
    title: '4. 辐流沉淀池',
    icon: Bowl,
    purpose: '减缓水流速度，使颗粒物沉淀到底部，分离油脂和悬浮物。',
    operation: '通过减缓水流，促使污水中的颗粒物沉淀，特别是对于工业污水中的油脂有很好的分离效果。'
  },
  {
    id: '5',
    title: '5. 絮凝沉淀池',
    icon: Tickets,
    purpose: '使用絮凝剂使微小的悬浮颗粒迅速凝聚成大颗粒，方便沉淀。',
    operation: '加入絮凝剂，混合水中的微小颗粒，形成絮凝物团簇，再让其沉淀。'
  },
  {
    id: '6',
    title: '6. 污泥处理',
    icon: Van,
    purpose: '对污水处理过程中产生的污泥进行脱水、干化和处置。',
    operation: '通过叠螺脱水机脱水减少污泥体积，添加PAM药剂进行干化处理，最后形成泥饼外运处置。'
  },
  {
    id: '7',
    title: '7. 二次提升井和无阀过滤器',
    icon: TopRight,
    purpose: '提升处理后的污水，并去除残余的颗粒物。',
    operation: '污水通过提升井，经过无阀过滤器，确保水质清洁。'
  },
  {
    id: '8',
    title: '8. 紫外线消毒装置',
    icon: Lightning,
    purpose: '通过紫外线照射，破坏微生物的核酸结构，杀灭细菌和病毒。',
    operation: '污水经过紫外线处理后，确保排放水质达到卫生标准。'
  },
  {
    id: '9',
    title: '9. 电磁流量计',
    icon: Watch,
    purpose: '计量处理后的污水流量。',
    operation: '确保排放的水量符合规定标准，通过监测和计量保证水质控制。'
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

  .flow-diagram {
    width: 100%;
    max-width: 1000px;
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

  .process-steps {
    margin-top: 30px;
  }

  .step-header {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .step-content {
    padding: 16px;
    
    h4 {
      color: #409EFF;
      margin: 12px 0 8px;
    }

    p {
      margin: 0;
      line-height: 1.6;
      color: #606266;
    }
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
