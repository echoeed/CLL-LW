<template lang="pug">
.section-container
  el-row
    el-col(:span="24")
      h1.section-title 1.1 参观昆明市第二净化厂

      // 参观经历
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Calendar
            span.ml-2 参观经历
        .text-content
          p 12月11日，一个阳光明媚的早晨，李老师带领我们从昆明理工大学呈贡校区启程，乘车前往昆明市第二净化厂。下车后，映入眼帘的是一座宏伟的建筑，与我想象中传统的污水净化厂截然不同。这里的环境优美宜人。在张老师和李老师的引导下，我们整齐地排队等待参观。随后，老师们热情地为我们详细介绍了净化厂的运作流程。在老师的带领下，我们深入了解了污水净化的奥秘，以及净化厂在维护城市水环境方面所发挥的重要作用。

      // 工厂基本信息
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              InfoFilled
            span.ml-2 工厂基本信息
        el-descriptions(:column="2" border)
          el-descriptions-item(label="位置") 六甲乡张家庙，盘龙江东侧
          el-descriptions-item(label="占地面积") 176亩
          el-descriptions-item(label="处理工艺") 同心圆A2/O处理工艺
          el-descriptions-item(label="设计日处理规模") 10万立方米
          el-descriptions-item(label="服务人口") 72.92万
          el-descriptions-item(label="纳污面积") 45.07平方公里
          el-descriptions-item(label="服务范围") 主城区东南部(盘龙江以东，穿心鼓楼以南，凉亭以西，小街以北)
          el-descriptions-item(label="出水标准") 《城镇污水处理厂污染物排放标准》(GB18918-2002)一级A标准

      // 发展历程
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Timer
            span.ml-2 发展历程
        el-timeline
          el-timeline-item(timestamp="1994年3月18日" placement="top")
            .timeline-title 一期工程开工
          el-timeline-item(timestamp="1995年11月8日" placement="top")
            .timeline-title 建成投产
          el-timeline-item(timestamp="2008年12月" placement="top")
            .timeline-title 二期深度处理工程开工
            .timeline-content 通过投加混凝剂及过滤、紫外消毒，提高出水水质
          el-timeline-item(timestamp="2010年9月" placement="top")
            .timeline-title 二期工程完工
          el-timeline-item(timestamp="2013年7月" placement="top")
            .timeline-title 三期节能降耗优化运行改造工程启动
            .timeline-content
              p - 新建鼓风机房
              p - 将降解池好氧区的曝气方式由转碟曝气调整为鼓风曝气
              p - 降解池增加导流墙，优化降解池运行
              p - 脱水设备、加药系统、自控系统设备更新及改造
          el-timeline-item(timestamp="2014年5月12日" placement="top")
            .timeline-title 三期工程完工
            .timeline-content 有效降低了工程的能耗，进一步强化了工厂出水水质

      // 参观过程
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Guide
            span.ml-2 参观过程
        el-steps(:active="8" direction="vertical" finish-status="success")
          el-step(title="进水口" description="通过地下管网汇集污水，设有粗格栅和细格栅拦截污水中的漂浮物")
          el-step(title="沉砂池" description="通过沉淀去除污水中的砂粒，采用平流沉砂池设计")
          el-step(title="厌氧池" description="控制混合液处于厌氧状态，聚磷菌释放磷，并吸收低级脂肪酸等易降解的有机物")
          el-step(title="缺氧池和好氧池" description="内圈为缺氧池，外圈为好氧池，好氧池底部设有曝气装置")
          el-step(title="沉淀池" description="用于沉淀活性污泥，完成泥水分离，采用单臂周边传动刮泥机")
          el-step(title="V型滤池" description="通过颗粒滤料去除水中悬浮物，利用机械筛滤、沉淀和接触絮凝作用")
          el-step(title="紫外消毒" description="进行最终消毒处理")
          el-step(title="排放" description="处理后的水排入明通河")

      // 中心控制室
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Monitor
            span.ml-2 智能化控制
        .text-content
          p 中心控制室是整个净化厂的"大脑"，通过电脑系统实现了对整个工厂的实时监控和智能化管理：
          el-row(:gutter="20")
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 实时监测
                .card-content 所有设备和流程与电脑系统连接，实现24小时监控
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 故障预警
                .card-content 设备异常时立即发出警报，确保及时处理
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 数据分析
                .card-content 收集和分析运行数据，优化处理效率

</template>

<script setup lang="ts">
import { Calendar, InfoFilled, Timer, Guide, Monitor } from '@element-plus/icons-vue'
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

  .card-header {
    display: flex;
    align-items: center;

    .ml-2 {
      margin-left: 8px;
    }
  }

  .text-content {
    line-height: 1.6;
    color: var(--el-text-color-regular);
  }

  .timeline-title {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .timeline-content {
    color: var(--el-text-color-secondary);

    p {
      margin: 4px 0;
    }
  }

  .card-content {
    padding: 12px;
    color: var(--el-text-color-regular);
  }
}
</style>
