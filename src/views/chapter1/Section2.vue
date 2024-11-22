<template lang="pug">
.section-container
  el-row
    el-col(:span="24")
      h1.section-title 1.2 项目情况介绍

      // 概述标题
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Document
            span.ml-2 1.2.1 当前城镇污水处理的概述

      // 生活污水
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              House
            span.ml-2 生活污水
        .text-content
          p 生活污水包括以下三个主要来源：
          el-descriptions(:column="1" border)
            el-descriptions-item(label="居民日常生活污水")
              span 来自居民日常生活产生的废水
            el-descriptions-item(label="公共建筑生活污水")
              span 来自公共场所产生的废水
            el-descriptions-item(label="企业内生活污水")
              span 计算统计在企业产生的废水中
          
          el-divider 主要污染物
          el-row(:gutter="20")
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 有机物
                .card-content
                  p - 蛋白质
                  p - 动植物脂肪
                  p - 碳水化合物
                  p - 尿素
                  p - 氨氮
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 化学物质
                .card-content
                  p - 肥皂
                  p - 合成洗涤剂
            el-col(:span="8")
              el-card(shadow="hover")
                template(#header)
                  .card-header 病原微生物
                .card-content
                  p - 寄生虫卵
                  p - 肠系传染病菌

      // 工业废水
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              OfficeBuilding
            span.ml-2 工业废水
        .text-content
          p 工业废水是指在工业生产过程中产生的废水，来自车间或矿场。其特点是水质变化大，这是由于：
          el-tag(type="info" class="mb-2") 不同工厂的生产类别
          el-tag(type="info" class="mb-2 ml-2") 不同的工艺过程
          el-tag(type="info" class="mb-2 ml-2") 不同的原材料使用
          el-tag(type="info" class="mb-2 ml-2") 不同的用水成分

          el-divider 工业废水分类
          el-tabs
            el-tab-pane(label="生产废水")
              p.tab-content 指在使用过程中受到轻度沾污或水温稍有增高的水，如机器冷却水。
              el-alert(
                title="处理方式"
                type="success"
                description="通常经某些处理后即可在生产中重复使用，或直接排放水体。"
                :closable="false"
                show-icon
              )
            el-tab-pane(label="生产污水")
              p.tab-content 指在使用过程中受到较严重污染的水，具有危害性。
              el-alert(
                title="主要污染物"
                type="warning"
                :closable="false"
                show-icon
              )
                template(#description)
                  ul.pollution-list
                    li 大量有机物
                    li 氰化物、铬、汞、铅、镉等有害和有毒物质
                    li 多氯联苯、合成洗涤剂等合成有机化学物质
                    li 放射性物质
              el-alert(
                class="mt-2"
                title="处理建议"
                type="info"
                description="需经适当处理后才能排放或在生产中使用。废水中的有害或有毒物质往往是宝贵的工业原料，应尽量回收利用。"
                :closable="false"
                show-icon
              )

      // 降水
      el-card.mb-4
        template(#header)
          .card-header
            el-icon
              Umbrella
            span.ml-2 降水
        .text-content
          el-descriptions(:column="2" border)
            el-descriptions-item(label="液态降水")
              span 雨、露
            el-descriptions-item(label="固态降水")
              span 雪、冰雹、霜
          
          el-divider 雨水污染特点
          el-timeline
            el-timeline-item(timestamp="初降雨" placement="top")
              .timeline-content
                p 初降雨时的雨水径流会挟带大气地面和屋面上的各种污染物质，是雨水污染最严重的部分。
            el-timeline-item(timestamp="特殊区域" placement="top")
              .timeline-content
                p 工业区、高速公路、机场等处的暴雨雨水需要经过沉淀、撇油等处理后才可以排放。
            el-timeline-item(timestamp="酸雨问题" placement="top")
              .timeline-content
                p 由于大气污染，某些地区出现酸雨，pH可达3.4，初降雨时的雨水呈酸性。
            el-timeline-item(timestamp="处理建议" placement="top")
              .timeline-content
                p 虽然雨水径流量大，处理较困难，但研究表明对其进行适当处理后再排放是必要的。
</template>

<script setup lang="ts">
import { Document, House, OfficeBuilding, Umbrella } from '@element-plus/icons-vue'
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

  .ml-2 {
    margin-left: 8px;
  }

  .mt-2 {
    margin-top: 8px;
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

    p {
      margin: 8px 0;
    }
  }

  .tab-content {
    padding: 16px 0;
  }

  .pollution-list {
    list-style-type: none;
    padding-left: 0;
    margin: 8px 0;

    li {
      margin: 4px 0;
      padding-left: 20px;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--el-color-warning);
      }
    }
  }

  .timeline-content {
    color: var(--el-text-color-regular);
    
    p {
      margin: 4px 0;
    }
  }
}
</style>
