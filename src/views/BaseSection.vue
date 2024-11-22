<template lang="pug">
.section-container
  el-card.section-card(shadow="never")
    template(#header)
      .card-header
        h2 {{ title }}
    .card-content
      p 本节内容正在编写中...
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--el-text-color-primary);
}

.card-content {
  line-height: 1.6;
  color: var(--el-text-color-regular);
}
</style>
