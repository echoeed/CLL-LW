<template>
  <div class="section-container">
    <el-card class="section-card">
      <template #header>
        <div class="card-header">
          <h3>1.5 项目建设必要性</h3>
        </div>
      </template>

      <div class="content">
        <el-row :gutter="20">
          <el-col :span="24">
            <h4>1.5.1 环境保护需求</h4>
            <p>随着城市化进程的加快和工业发展，水环境污染问题日益严重。建设现代化污水处理厂是改善水环境质量、保护生态系统的必然要求。本项目的建设将有效减少污染物排放，提高区域水环境质量。</p>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
          <el-col :span="24">
            <h4>1.5.2 经济发展需求</h4>
            <p>污水处理设施是城市基础设施的重要组成部分，其建设水平直接影响城市的投资环境和经济发展。本项目的实施将改善区域投资环境，促进经济可持续发展。</p>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
          <el-col :span="24">
            <h4>1.5.3 社会发展需求</h4>
            <p>污水处理是改善人居环境、提高居民生活质量的重要措施。本项目的建设将显著改善区域人居环境，提升居民生活品质，促进社会和谐发展。</p>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
          <el-col :span="24">
            <h4>1.5.4 政策要求</h4>
            <p>国家和地方政府高度重视环境保护工作，出台了一系列政策措施。本项目的建设是落实环保政策、实现污染物减排目标的具体举措。</p>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
          <el-col :span="24">
            <h4>1.5.5 可持续发展需求</h4>
            <p>污水处理是实现可持续发展的重要环节。本项目采用先进工艺，注重节能减排，符合可持续发展要求，将为区域可持续发展提供有力支撑。</p>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped lang="scss">
.section-container {
  padding: 20px;

  .section-card {
    margin-bottom: 20px;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .content {
    line-height: 1.6;

    h4 {
      color: #409EFF;
      margin-bottom: 15px;
    }

    p {
      text-indent: 2em;
      margin-bottom: 15px;
      color: #606266;
    }

    .mt-4 {
      margin-top: 20px;
    }
  }
}
</style>
