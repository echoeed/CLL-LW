<template lang="pug">
.section-container
  h2.section-title 6.1 结论

  // 设计概述
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Document
        span.ml-2 设计概述
    .card-content
      p 本次课程设计以昆明市第二净化厂为参考，完成了一座现代化污水处理厂的设计。通过实地参观和理论计算，确定了各个处理单元的具体参数和尺寸。

  // 主要构筑物尺寸
  el-card.mb-4
    template(#header)
      .card-header
        el-icon
          Histogram
        span.ml-2 主要构筑物尺寸

    .card-content
      // 格栅及提升泵站
      h4 格栅及提升泵站
      el-descriptions(:column="2" border)
        el-descriptions-item(label="粗格栅数量" :span="2") 三备一
        el-descriptions-item(label="间隙数") 70.12
        el-descriptions-item(label="栅槽宽度") 2.09米
        el-descriptions-item(label="栅后槽总高度") 0.89米
        el-descriptions-item(label="栅槽总长度") 4.46米
        el-descriptions-item(label="每日栅渣量") 1.67m³/d
      
      el-descriptions.mt-3(:column="2" border)
        el-descriptions-item(label="细格栅数量" :span="2") 三备一
        el-descriptions-item(label="间隙数") 280.49
        el-descriptions-item(label="栅槽宽度") 4.20米
        el-descriptions-item(label="栅后槽总高度") 1.36米
        el-descriptions-item(label="栅槽总长度") 8.79米
        el-descriptions-item(label="每日栅渣量") 1.33m³/d
      
      // 曝气沉砂池
      h4.mt-4 曝气沉砂池
      el-descriptions(:column="2" border)
        el-descriptions-item(label="数量" :span="2") 三备一
        el-descriptions-item(label="有效容积") 69.44m³
        el-descriptions-item(label="水流断面面积") 5.79m²
        el-descriptions-item(label="池总宽度") 2.89米
        el-descriptions-item(label="沉砂室容积") 6m³
        el-descriptions-item(label="沉砂斗容积") 2m²
        el-descriptions-item(label="沉砂斗有效容积") 2.28m³
        el-descriptions-item(label="池子总高") 3.78米
        el-descriptions-item(label="出水堰堰上水头") 0.26米
        el-descriptions-item(label="空气系统") 10根配气管，每根配10个扩散器

      // A²/O工艺池
      h4.mt-4 A²/O工艺池
      el-descriptions(:column="2" border)
        el-descriptions-item(label="数量" :span="2") 三备一
        el-descriptions-item(label="厌氧池容积") 3125m³
        el-descriptions-item(label="缺氧池容积") 1412.78m³
        el-descriptions-item(label="好氧池有效容积") 4379.63m³

      // 辐流沉淀池
      h4.mt-4 辐流沉淀池
      el-descriptions(:column="2" border)
        el-descriptions-item(label="数量" :span="2") 三备一
        el-descriptions-item(label="表面积") 1388.89m²
        el-descriptions-item(label="池子直径") 43米
        el-descriptions-item(label="实际水面面积") 1452.20m²
        el-descriptions-item(label="有效水深") 6米
        el-descriptions-item(label="污泥容积") 3125m³
        el-descriptions-item(label="污泥斗容积") 12.7m³
        el-descriptions-item(label="圆锥体部分体积") 519.69m³
        el-descriptions-item(label="圆柱部分体积") 2592.61m³
        el-descriptions-item(label="总高度") 11.17米

      h4.mt-4 管道系统
      el-descriptions(:column="2" border)
        el-descriptions-item(label="污泥管管径") 300mm
        el-descriptions-item(label="中心排泥管管径") 600mm
        el-descriptions-item(label="进水管管径") 900mm
        el-descriptions-item(label="进水竖孔直径") 2000mm
        el-descriptions-item(label="稳流筒直径") 6.39米
        el-descriptions-item(label="配水井中心管直径") 2米
        el-descriptions-item(label="集水井直径") 4.21米
        el-descriptions-item(label="集水槽内起点水深") 0.55米
        el-descriptions-item(label="集水槽水力计算L") 141.61米
        el-descriptions-item(label="集水堰总长度") 281.344米
        el-descriptions-item(label="三角堰单宽") 0.16米
        el-descriptions-item(label="堰上水头") 0.45米
</template>

<script setup lang="ts">
import { Document, Histogram } from '@element-plus/icons-vue'
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

  .mt-3 {
    margin-top: 0.75rem;
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
    min-width: 120px;
  }

  :deep(.el-descriptions__content) {
    color: var(--el-text-color-regular);
  }

  h4 {
    margin: 1rem 0;
    color: var(--el-text-color-primary);
    font-weight: 500;
  }

  p {
    margin: 1rem 0;
    line-height: 1.6;
    color: var(--el-text-color-regular);
  }
}
</style>
