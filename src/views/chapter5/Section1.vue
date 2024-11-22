<template>
  <div class="section-container">
    <h2 class="section-title">第5章 平面布置</h2>

    <!-- 功能区划分概述 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><Collection /></ElIcon>
          <span class="ml-2">5.1 功能区划分</span>
        </div>
      </template>
      <div class="card-content">
        <p>本设计将污水处理厂厂区平面按功能区划分为三大部分，各区既相互独立又有联系，既能最大限度地减少占地和管道连接，又便于管理。</p>
        
        <ElRow :gutter="20">
          <ElCol :span="8">
            <ElCard shadow="hover">
              <div class="function-area">
                <ElIcon class="area-icon"><OfficeBuilding /></ElIcon>
                <h3>办公生活服务区</h3>
                <p>包含办公、生活、服务等设施</p>
              </div>
            </ElCard>
          </ElCol>
          
          <ElCol :span="8">
            <ElCard shadow="hover">
              <div class="function-area">
                <ElIcon class="area-icon"><Van /></ElIcon>
                <h3>污水处理区</h3>
                <p>主要处理设施和构筑物</p>
              </div>
            </ElCard>
          </ElCol>
          
          <ElCol :span="8">
            <ElCard shadow="hover">
              <div class="function-area">
                <ElIcon class="area-icon"><Box /></ElIcon>
                <h3>污泥处理区</h3>
                <p>污泥处理和储存设施</p>
              </div>
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    </ElCard>

    <!-- 生活服务区详细说明 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><OfficeBuilding /></ElIcon>
          <span class="ml-2">5.2 生活服务区设施</span>
        </div>
      </template>
      <div class="card-content">
        <ElDescriptions :column="1" border>
          <ElDescriptionsItem label="食堂">
            提供方便快捷的用餐场所
            <br>
            促进员工交流和团队合作
          </ElDescriptionsItem>
          <ElDescriptionsItem label="员工宿舍">
            提供舒适的居住空间
            <br>
            有利于员工恢复精力和保持身心健康
          </ElDescriptionsItem>
          <ElDescriptionsItem label="运动场">
            提供锻炼身体的场所
            <br>
            有助于增强身体素质，提高工作效率
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </ElCard>

    <!-- 办公及辅助设施 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><Management /></ElIcon>
          <span class="ml-2">5.3 办公及辅助设施布置</span>
        </div>
      </template>
      <div class="card-content">
        <ElDescriptions :column="1" border>
          <ElDescriptionsItem label="办公大楼">
            合理设计满足办公需求
            <br>
            提供良好的办公环境
          </ElDescriptionsItem>
          <ElDescriptionsItem label="化验室">
            位置便捷，设备配置合理
            <br>
            确保操作便捷性和安全性
          </ElDescriptionsItem>
          <ElDescriptionsItem label="仓库">
            满足物资储存和管理要求
            <br>
            位置适中便于调配
          </ElDescriptionsItem>
          <ElDescriptionsItem label="维修设施">
            包括机修间和电修间
            <br>
            确保快速响应和处理问题
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </ElCard>

    <!-- 处理区布置 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><SetUp /></ElIcon>
          <span class="ml-2">5.4 处理区布置特点</span>
        </div>
      </template>
      <div class="card-content">
        <h4>污水处理区</h4>
        <p>A²O工艺采用并列矩形池布置：</p>
        <ElDescriptions :column="1" border>
          <ElDescriptionsItem label="缺氧池">并列矩形布置，优化处理效率</ElDescriptionsItem>
          <ElDescriptionsItem label="厌氧池">与缺氧池相邻，减少管道连接</ElDescriptionsItem>
          <ElDescriptionsItem label="好氧池">确保充分的曝气和处理效果</ElDescriptionsItem>
        </ElDescriptions>

        <h4 class="mt-4">污泥处理区</h4>
        <p>位于厂区偏下方，特点：</p>
        <ElDescriptions :column="1" border>
          <ElDescriptionsItem label="位置选择">便于污泥收集和处理</ElDescriptionsItem>
          <ElDescriptionsItem label="进出水方向">进出水朝向一致，优化处理流程</ElDescriptionsItem>
          <ElDescriptionsItem label="布局优势">减少污泥输送距离，提高处理效率</ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </ElCard>

    <!-- 总平面布置图 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><Picture /></ElIcon>
          <span class="ml-2">5.5 总平面布置图</span>
        </div>
      </template>
      <div class="card-content">
        <div class="plant-layout">
          <ElImage :src="layoutImage" :preview-src-list="[layoutImage]">
            <template #placeholder>
              <div class="image-placeholder">
                <ElIcon><Picture /></ElIcon>
                <span>加载中...</span>
              </div>
            </template>
            <template #error>
              <div class="image-error">
                <ElIcon><PictureRounded /></ElIcon>
                <span>图片加载失败</span>
              </div>
            </template>
          </ElImage>
        </div>
        
        <div class="layout-legend mt-4">
          <h4>图例说明</h4>
          <ElRow :gutter="20">
            <ElCol :span="8" v-for="(item, index) in legendItems" :key="index">
              <div class="legend-item">
                <div class="color-block" :style="{ backgroundColor: item.color }"></div>
                <span>{{ item.name }}</span>
              </div>
            </ElCol>
          </ElRow>
        </div>

        <div class="layout-description mt-4">
          <h4>布局说明</h4>
          <ElTimeline>
            <ElTimelineItem v-for="(activity, index) in layoutActivities" :key="index" :timestamp="activity.title" :type="activity.type">
              <p>{{ activity.content }}</p>
            </ElTimelineItem>
          </ElTimeline>
        </div>
      </div>
    </ElCard>

    <!-- 布局优化分析 -->
    <ElCard class="mb-4">
      <template #header>
        <div class="card-header">
          <ElIcon><DataAnalysis /></ElIcon>
          <span class="ml-2">5.6 布局优化分析</span>
        </div>
      </template>
      <div class="card-content">
        <ElRow :gutter="20">
          <ElCol :span="8" v-for="(metric, index) in optimizationMetrics" :key="index">
            <ElCard shadow="hover">
              <div class="optimization-metric">
                <ElProgress type="dashboard" :percentage="metric.score" :color="metric.color"></ElProgress>
                <h4>{{ metric.name }}</h4>
                <p>{{ metric.description }}</p>
              </div>
            </ElCard>
          </ElCol>
        </ElRow>
      </div>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ElCard, ElIcon, ElRow, ElCol, ElDescriptions, ElDescriptionsItem, ElImage, ElTimeline, ElTimelineItem, ElProgress } from 'element-plus'
import { 
  Collection,
  OfficeBuilding,
  DataAnalysis,
  Van,
  Box,
  Picture,
  PictureRounded,
  Management,
  SetUp
} from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import plantLayoutImage from '@/assets/images/plant-layout.svg'

const chartRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null

// 总平面布置图
const layoutImage = ref(plantLayoutImage)

// 图例项
const legendItems = ref([
  { name: '办公生活区', color: '#91CC75' },
  { name: '污水处理区', color: '#5470C6' },
  { name: '污泥处理区', color: '#FAC858' },
  { name: '绿化区域', color: '#73C0DE' },
  { name: '道路区域', color: '#9A60B4' },
  { name: '预留区域', color: '#EE6666' }
])

// 布局活动
interface TimelineActivity {
  title: string;
  content: string;
  type: 'primary' | 'success' | 'warning' | 'info' | 'danger';
}

const layoutActivities = ref<TimelineActivity[]>([
  {
    title: '办公区布局',
    content: '靠近主入口，便于人员进出',
    type: 'primary'
  },
  {
    title: '处理区布局',
    content: '位于中心位置，减少管线长度',
    type: 'success'
  },
  {
    title: '储存区布局',
    content: '靠近次入口，方便物料运输',
    type: 'warning'
  }
])

// 优化指标
const optimizationMetrics = ref([
  {
    name: '土地利用率',
    score: 85,
    description: '通过合理布局，提高土地利用效率',
    color: '#67C23A'
  },
  {
    name: '运行效率',
    score: 92,
    description: '优化工艺流程，减少能耗损失',
    color: '#409EFF'
  },
  {
    name: '经济性能',
    score: 88,
    description: '降低建设和运营成本',
    color: '#E6A23C'
  }
])
</script>

<style scoped>
.section-container {
  padding: 20px;
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.card-header {
  display: flex;
  align-items: center;
}

.function-area {
  text-align: center;
  padding: 20px;
}

.area-icon {
  font-size: 32px;
  margin-bottom: 15px;
  color: #409EFF;
}

.plant-layout {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.plant-layout :deep(.el-image) {
  width: 800px;
  height: 600px;
  background-color: #f5f7fa;
  border-radius: 8px;
  overflow: hidden;
}

.image-placeholder,
.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #909399;
}

.image-placeholder .el-icon,
.image-error .el-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.layout-legend {
  margin-top: 30px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.color-block {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 4px;
}

.optimization-metric {
  text-align: center;
  padding: 20px;
}

.optimization-metric h4 {
  margin: 15px 0 10px;
  font-size: 16px;
}

.optimization-metric p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>
