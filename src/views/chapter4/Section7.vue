<template lang="pug">
.section-container
  h2.section-title 4.7 附属建筑物
  
  // 1. 进水口
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Operation
        span.ml-2 4.7.1 进水口
    .card-content
      p 进水口主要功能是接收和初步处理进入污水处理厂的原始废水，去除大的固体、沙子和其他杂质。

  // 2. 消毒装置
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Monitor
        span.ml-2 4.7.2 污水处理厂消毒装置
    .card-content
      p 污水处理厂的消毒装置用于杀灭或去除残留在废水中的病原体、细菌和其他微生物，以确保最终排放的水质符合相关的环境标准。
      
      h4 常见的污水处理厂消毒装置：
      el-descriptions(:column="1" border)
        el-descriptions-item(label="氯消毒") 传统且常用的消毒方法
        el-descriptions-item(label="紫外线（UV）消毒") 本次课程设计采用的方法，物理消毒，无化学残留
        el-descriptions-item(label="臭氧消毒") 强氧化性消毒方法
        el-descriptions-item(label="过氧化氢（H2O2）消毒") 化学氧化消毒方法
        el-descriptions-item(label="电子束消毒") 新型物理消毒方法

      h4.mt-4 紫外线（UV）消毒装置组成：
      el-descriptions(:column="1" border)
        el-descriptions-item(label="UV反应器") 系统核心部件，内含UV灯管的密封容器
        el-descriptions-item(label="UV灯管") 产生紫外线辐射的装置，通常使用低压汞灯
        el-descriptions-item(label="反应器外壳") 封装和保护UV灯管，防止UV辐射逸出
        el-descriptions-item(label="传感器和监测设备") 监测UV辐射强度、废水流量等关键参数
        el-descriptions-item(label="自动清洗系统") 清除灯管表面的积灰和沉积物
        el-descriptions-item(label="控制系统") 监控和控制系统运行，自动调整UV灯运行
        el-descriptions-item(label="进出口管道") 确保废水顺利流动和充分照射

  // 3. 污泥脱水构筑物
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Box
        span.ml-2 4.7.3 污泥脱水构筑物
    .card-content
      h4 储泥池主要组成：
      el-descriptions(:column="1" border)
        el-descriptions-item(label="容器结构") 采用混凝土结构，坚固耐用
        el-descriptions-item(label="进出口管道") 用于输送污泥进入和排出
        el-descriptions-item(label="搅拌设备") 均匀混合污泥，防止结块沉积
        el-descriptions-item(label="覆盖结构") 安装罩棚或覆盖板，减少气味和污泥飞散
        el-descriptions-item(label="监测系统") 监测污泥质量、水分含量等关键参数

  // 4. 叠螺脱水机
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Setting
        span.ml-2 4.7.4 叠螺脱水机
    .card-content
      p 叠螺式脱水机通过螺旋挤压原理，将污泥中的水分挤压出来实现脱水。
      
      h4 主要组成部分：
      el-descriptions(:column="1" border)
        el-descriptions-item(label="主体结构") 包括螺旋轴、螺旋框架、进料口、排水口等
        el-descriptions-item(label="脱水池") 混凝土结构箱体，容纳叠螺脱水机
        el-descriptions-item(label="输送系统") 输送带等设备，将污泥输送到脱水机
        el-descriptions-item(label="收集槽和排水系统") 收集和处理脱水过程中排出的水分
        el-descriptions-item(label="控制系统") 监测和调整脱水过程关键参数
        el-descriptions-item(label="安全和维护设施") 护栏、紧急停机按钮、检修通道等

  // 5. 生活区
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          House
        span.ml-2 4.7.5 生活区
    .card-content
      h4 生活区主要设施：
      el-descriptions(:column="1" border)
        el-descriptions-item(label="办公区域") 办公室、会议室、接待处等
        el-descriptions-item(label="化验室") 进行水质检测和分析
        el-descriptions-item(label="员工宿舍") 宿舍楼、公共休息区
        el-descriptions-item(label="食堂") 为员工提供餐饮服务
        el-descriptions-item(label="健康和安全设施") 医疗设施、AED、消防设施等
        el-descriptions-item(label="休闲娱乐设施") 健身房、运动场、篮球场、阅览室等
        el-descriptions-item(label="交通设施") 停车场
        el-descriptions-item(label="公共设施") 公共卫生间等
</template>

<script setup lang="ts">
import { Operation, Monitor, Box, Setting, House } from '@element-plus/icons-vue'
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

  :deep(.el-descriptions__label) {
    font-weight: bold;
    color: #606266;
  }

  p {
    margin: 1rem 0;
    line-height: 1.6;
  }

  h4 {
    margin: 1rem 0;
    color: var(--el-text-color-primary);
  }
}
</style>
