<template lang="pug">
.section-container
  el-row
    el-col(:span="24")
      h1.section-title 1.4 设计依据

      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Files
            span.ml-2 设计依据文件
        .text-content
          el-timeline
            // 设计任务书
            el-timeline-item
              template(#dot)
                el-icon
                  Document
              h4 设计任务书及相关原始数据
              p.timeline-content 本项目的基础设计文件，包含项目具体要求和参数

            // 污染物排放标准
            el-timeline-item
              template(#dot)
                el-icon
                  Warning
              h4 城镇污水处理厂污染物排放标准
              .timeline-content
                p 标准号：GB18918-2002
                el-tag(type="warning" effect="dark" class="standard-tag") 国家标准
                el-tag(type="info" effect="dark" class="standard-tag") 强制性标准
                p 该标准规定了城镇污水处理厂出水水质的基本控制项目最高允许排放浓度和去除率要求

            // 排水设计规范
            el-timeline-item
              template(#dot)
                el-icon
                  Guide
              h4 室外排水设计规范
              .timeline-content
                p 标准号：GB50014-2021
                el-tag(type="warning" effect="dark" class="standard-tag") 国家标准
                el-tag(type="info" effect="dark" class="standard-tag") 强制性标准
                p 该规范规定了室外排水工程的设计要求，包括排水体制、管渠设计等内容

            // 设计手册
            el-timeline-item
              template(#dot)
                el-icon
                  Collection
              h4 给排水设计手册
              .timeline-content
                p 第二版，第五册（城镇污水）
                el-tag(type="success" effect="dark" class="standard-tag") 技术指南
                p 提供了城镇污水处理的详细设计参考和技术指导

            // 水环境质量标准
            el-timeline-item
              template(#dot)
                el-icon
                  Watermelon
              h4 地表水环境质量标准
              .timeline-content
                p 标准号：GB3838-2002
                el-tag(type="warning" effect="dark" class="standard-tag") 国家标准
                el-tag(type="info" effect="dark" class="standard-tag") 强制性标准
                p 该标准规定了地表水环境质量应达到的要求，是确定污水处理出水水质的重要依据

      // 标准重要性说明
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              InfoFilled
            span.ml-2 标准重要性说明
        .text-content
          el-collapse(v-model="activeNames")
            el-collapse-item(name="1")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    Aim
                  span 标准体系的完整性
              p 本设计采用的标准体系涵盖了污水处理设计的各个方面，包括：
              el-descriptions(:column="1" border)
                el-descriptions-item(label="排放控制")
                  span 确保处理后的污水达到环保要求
                el-descriptions-item(label="工程设计")
                  span 保证工程设计的规范性和可行性
                el-descriptions-item(label="技术指导")
                  span 提供详细的设计参考和方法指导
                el-descriptions-item(label="环境保护")
                  span 确保项目实施符合环境保护要求

            el-collapse-item(name="2")
              template(#title)
                .collapse-header
                  el-icon.mr-2
                    Stamp
                  span 标准执行的强制性
              p 所采用的标准主要为国家强制性标准，确保了设计的：
              ul.standard-list
                li 合法性：符合国家法律法规要求
                li 安全性：保证工程设计和运行安全
                li 可靠性：确保处理效果达到要求
                li 环保性：满足环境保护要求
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Files, 
  Document, 
  Warning, 
  Guide, 
  Collection, 
  Watermelon,
  InfoFilled,
  Aim,
  Stamp
} from '@element-plus/icons-vue'

const activeNames = ref(['1'])
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

  .mr-2 {
    margin-right: 8px;
  }

  .ml-2 {
    margin-left: 8px;
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

  .timeline-content {
    color: var(--el-text-color-regular);
    margin: 8px 0;

    p {
      margin: 4px 0;
    }
  }

  .standard-tag {
    margin: 0 4px;
  }

  .collapse-header {
    display: flex;
    align-items: center;
  }

  .standard-list {
    list-style-type: none;
    padding-left: 0;
    margin: 8px 0;

    li {
      margin: 8px 0;
      padding-left: 20px;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
