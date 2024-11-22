<template>
  <div class="section-container">
    <h2 class="section-title">6.2 建议</h2>

    <!-- 设计问题分析 -->
    <ElCard class="mb-4 card-mobile">
      <template #header>
        <div class="card-header">
          <ElIcon class="header-icon"><DataAnalysis /></ElIcon>
          <span class="ml-2">设计问题分析</span>
        </div>
      </template>
      <div class="card-content">
        <p>在本次课程设计中，发现细格栅栅条间隙设置偏小，导致细格栅尺寸偏大。建议在后续设计中对细格栅参数进行更详细的分析，特别是与粗格栅的数据对比，以确保两者尺寸协调，提高预处理效率。</p>
      </div>
    </ElCard>

    <!-- 主要建议 -->
    <ElCard class="mb-4 card-mobile">
      <template #header>
        <div class="card-header">
          <ElIcon class="header-icon"><SetUp /></ElIcon>
          <span class="ml-2">设计建议</span>
        </div>
      </template>
      <div class="card-content">
        <ElTimeline>
          <!-- 1. 法规规范 -->
          <ElTimelineItem timestamp="法规规范" placement="top">
            <ElCard class="timeline-card">
              <h4>了解最新法规、规范和标准</h4>
              <p>提前搜集所需的规范，确保设计符合国家要求。</p>
            </ElCard>
          </ElTimelineItem>

          <!-- 2. 工艺选择 -->
          <ElTimelineItem timestamp="工艺选择" placement="top" type="primary">
            <ElCard class="timeline-card">
              <h4>适应性工艺选择</h4>
              <ul>
                <li>工艺选择应与当地水质特征和废水性质相匹配</li>
                <li>进行实地调查和水质分析，确保工艺切实可行</li>
                <li>考虑未来废水负荷变化，确保工艺具有扩展性</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 3. 可持续性 -->
          <ElTimelineItem timestamp="可持续发展" placement="top" type="success">
            <ElCard class="timeline-card">
              <h4>可持续性和资源回收</h4>
              <ul>
                <li>采用节能设备和工艺，降低运行成本</li>
                <li>考虑资源回收利用，提高经济效益</li>
                <li>注重环境友好性，减少碳排放</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 4. 设备选择 -->
          <ElTimelineItem timestamp="设备管理" placement="top" type="warning">
            <ElCard class="timeline-card">
              <h4>设备选择与优化</h4>
              <ul>
                <li>选择高效、可靠且易维护的设备</li>
                <li>确保设备适应处理规模和负荷</li>
                <li>建立定期维护制度</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 5. 安全设施 -->
          <ElTimelineItem timestamp="安全保障" placement="top" type="danger">
            <ElCard class="timeline-card">
              <h4>安全性和防护设施</h4>
              <ul>
                <li>设计完善的防护设施</li>
                <li>配置安全标准设备（栏杆、紧急停机按钮等）</li>
                <li>完善通风系统</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 6. 智能系统 -->
          <ElTimelineItem timestamp="智能化" placement="top" type="info">
            <ElCard class="timeline-card">
              <h4>智能监控和控制系统</h4>
              <ul>
                <li>采用先进的数据分析技术</li>
                <li>引入人工智能辅助运营</li>
                <li>建立预测性维护系统</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 7. 应急预案 -->
          <ElTimelineItem timestamp="应急管理" placement="top" type="warning">
            <ElCard class="timeline-card">
              <h4>应急预案和备份设备</h4>
              <ul>
                <li>制定完善的应急预案</li>
                <li>配置必要的备份设备</li>
                <li>设置可靠的备用电源</li>
              </ul>
            </ElCard>
          </ElTimelineItem>

          <!-- 8. 环境监测 -->
          <ElTimelineItem timestamp="环境保护" placement="top" type="success">
            <ElCard class="timeline-card">
              <h4>环境监测和生态修复</h4>
              <ul>
                <li>建立定期环境监测制度</li>
                <li>严格控制出口水质</li>
                <li>采用生态修复手段（如湿地植被带）</li>
              </ul>
            </ElCard>
          </ElTimelineItem>
        </ElTimeline>
      </div>
    </ElCard>

    <!-- 优化建议 -->
    <ElCard class="mb-4 card-mobile">
      <template #header>
        <div class="card-header">
          <ElIcon class="header-icon"><Setting /></ElIcon>
          <span class="ml-2">优化建议</span>
        </div>
      </template>
      <div class="card-content">
        <ElRow :gutter="20">
          <ElCol :xs="24" :sm="12" :md="8" v-for="(suggestion, index) in suggestions" :key="index">
            <ElCard class="suggestion-card" :body-style="{ padding: '20px' }">
              <div class="suggestion-item">
                <ElIcon class="suggestion-icon">
                  <component :is="suggestion.icon" />
                </ElIcon>
                <h4>{{ suggestion.title }}</h4>
                <p>{{ suggestion.content }}</p>
              </div>
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    </ElCard>

    <!-- 优化方向 -->
    <ElCard class="mb-4 card-mobile">
      <template #header>
        <div class="card-header">
          <ElIcon class="header-icon"><DataLine /></ElIcon>
          <span class="ml-2">优化方向</span>
        </div>
      </template>
      <div class="card-content">
        <ElRow :gutter="20">
          <ElCol :xs="24" :sm="12" :md="8" v-for="(direction, index) in optimizationDirections" :key="index">
            <ElCard class="direction-card" :body-style="{ padding: '20px' }">
              <div class="direction-item">
                <ElIcon class="direction-icon">
                  <component :is="direction.icon" />
                </ElIcon>
                <h4>{{ direction.title }}</h4>
                <ul>
                  <li v-for="(item, itemIndex) in direction.items" :key="itemIndex">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    </ElCard>

    <!-- 效益分析 -->
    <ElCard class="mb-4 card-mobile">
      <template #header>
        <div class="card-header">
          <ElIcon class="header-icon"><DataAnalysis /></ElIcon>
          <span class="ml-2">效益分析</span>
        </div>
      </template>
      <div class="card-content">
        <ElRow :gutter="20">
          <ElCol :xs="24" :sm="12" :md="8" v-for="(benefit, index) in benefits" :key="index">
            <ElCard class="benefit-card" :body-style="{ padding: '20px' }">
              <div class="benefit-item">
                <h4>{{ benefit.title }}</h4>
                <div class="progress-wrapper">
                  <ElProgress 
                    type="circle"
                    :percentage="benefit.score"
                    :color="benefit.color"
                    :width="120"
                  />
                </div>
                <ul class="benefit-list">
                  <li v-for="(item, itemIndex) in benefit.items" :key="itemIndex">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ElCard,
  ElIcon,
  ElTimeline,
  ElTimelineItem,
  ElRow,
  ElCol,
  ElProgress
} from 'element-plus'
import {
  Collection,
  OfficeBuilding,
  DataAnalysis,
  Van,
  Box,
  Picture,
  PictureRounded,
  Management,
  SetUp,
  Monitor,
  Setting,
  DataLine,
  Operation
} from '@element-plus/icons-vue'

// 效益分析数据
const benefits = ref([
  {
    title: '经济效益',
    score: 92,
    items: [
      '运营成本降低15%',
      '维护费用减少20%',
      '能耗降低25%'
    ],
    color: '#67C23A'
  },
  {
    title: '环境效益',
    score: 88,
    items: [
      '出水水质提升',
      '污泥减量化',
      '臭气排放减少'
    ],
    color: '#409EFF'
  },
  {
    title: '社会效益',
    score: 85,
    items: [
      '居民满意度提高',
      '环境改善明显',
      '示范作用显著'
    ],
    color: '#E6A23C'
  }
])

// 改进建议数据
const suggestions = ref([
  {
    title: '自动化控制系统升级',
    content: '引入智能控制系统，提高处理效率',
    icon: Monitor
  },
  {
    title: '能源管理优化',
    content: '采用节能设备，降低运营成本',
    icon: DataAnalysis
  },
  {
    title: '设备维护计划',
    content: '建立预防性维护制度，延长设备寿命',
    icon: Setting
  }
])

// 优化方向数据
const optimizationDirections = ref([
  {
    title: '工艺优化',
    icon: Setting,
    items: [
      '优化工艺参数',
      '提高处理效率',
      '降低能耗'
    ]
  },
  {
    title: '运营管理',
    icon: Management,
    items: [
      '完善管理制度',
      '加强人员培训',
      '建立应急预案'
    ]
  },
  {
    title: '设备升级',
    icon: Operation,
    items: [
      '更新老旧设备',
      '引入智能设备',
      '提高自动化水平'
    ]
  }
])

// 定义图标映射
const iconMap = {
  Monitor,
  DataAnalysis,
  Setting,
  Management,
  Operation,
  DataLine
}
</script>

<style scoped>
.section-container {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

/* 移动端卡片样式 */
.card-mobile {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.card-mobile:active {
  transform: scale(0.98);
}

.card-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ebeef5;
}

.header-icon {
  font-size: 20px;
  color: #409EFF;
}

.ml-2 {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
}

/* 时间线卡片样式 */
.timeline-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.timeline-card h4 {
  color: #303133;
  margin-bottom: 12px;
}

/* 建议卡片样式 */
.suggestion-card,
.direction-card,
.benefit-card {
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.suggestion-card:active,
.direction-card:active,
.benefit-card:active {
  transform: scale(0.98);
}

.suggestion-item,
.direction-item,
.benefit-item {
  text-align: center;
}

.suggestion-icon,
.direction-icon {
  font-size: 32px;
  color: #409EFF;
  margin-bottom: 16px;
}

.suggestion-item h4,
.direction-item h4,
.benefit-item h4 {
  margin: 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.suggestion-item p {
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

.direction-item ul,
.benefit-list {
  text-align: left;
  padding-left: 20px;
  margin: 12px 0;
  color: #606266;
}

.direction-item li,
.benefit-list li {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.6;
}

.progress-wrapper {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

/* 响应式布局调整 */
@media screen and (max-width: 768px) {
  .section-container {
    padding: 12px;
  }

  .section-title {
    font-size: 20px;
  }

  .card-mobile {
    margin-bottom: 12px;
  }

  .suggestion-card,
  .direction-card,
  .benefit-card {
    margin-bottom: 12px;
  }

  .progress-wrapper :deep(.el-progress) {
    transform: scale(0.9);
  }
}
</style>
