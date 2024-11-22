<template>
  <el-container class="layout-container">
    <!-- 移动端顶部菜单 -->
    <el-header v-if="isMobile" class="mobile-header">
      <div class="header-content">
        <el-button type="text" @click="toggleMenu">
          <el-icon>
            <MenuIcon />
          </el-icon>
        </el-button>
        <span class="logo">污水处理厂设计</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员
            <el-icon class="el-icon--right"><Expand /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-container class="main-container">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '240px'" class="sidebar" v-if="isMenuVisible">
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="activeMenu"
          :router="true"
          class="el-menu-vertical"
          @select="handleSelect"
        >
          <div class="logo-container" @click="$router.push('/')">
            <span v-if="!isCollapse">污水处理厂设计</span>
            <el-icon v-else><Document /></el-icon>
          </div>

          <!-- 第一章 -->
          <el-sub-menu index="/chapter1">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第一章 工程概况</span>
            </template>
            <el-menu-item index="/chapter1/section1">1.1 参观昆明市第二净化厂</el-menu-item>
            <el-menu-item index="/chapter1/section2">1.2 项目情况介绍</el-menu-item>
            <el-menu-item index="/chapter1/section3">1.3 项目可行性</el-menu-item>
            <el-menu-item index="/chapter1/section4">1.4 设计依据</el-menu-item>
          </el-sub-menu>

          <!-- 第二章 -->
          <el-sub-menu index="/chapter2">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第二章 设计规模</span>
            </template>
            <el-menu-item index="/chapter2/section1">2.1 设计污水水量计算</el-menu-item>
            <el-menu-item index="/chapter2/section2">2.2 污水处理程度计算</el-menu-item>
          </el-sub-menu>

          <!-- 第三章 -->
          <el-sub-menu index="/chapter3">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第三章 工艺设计</span>
            </template>
            <el-menu-item index="/chapter3/section1">3.1 设计要求</el-menu-item>
            <el-menu-item index="/chapter3/section2">3.2 工艺流程选择</el-menu-item>
          </el-sub-menu>

          <!-- 第四章 -->
          <el-sub-menu index="/chapter4">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第四章 设计计算</span>
            </template>
            <el-menu-item index="/chapter4/section1">4.1 设计参数</el-menu-item>
            <el-menu-item index="/chapter4/section2">4.2 格栅设计计算</el-menu-item>
            <el-menu-item index="/chapter4/section3">4.3 沉砂池设计计算</el-menu-item>
            <el-menu-item index="/chapter4/section4">4.4 初沉池设计计算</el-menu-item>
            <el-menu-item index="/chapter4/section5">4.5 A²/O池设计计算</el-menu-item>
            <el-menu-item index="/chapter4/section6">4.6 二沉池设计计算</el-menu-item>
            <el-menu-item index="/chapter4/section7">4.7 污泥处理设计计算</el-menu-item>
          </el-sub-menu>

          <!-- 第五章 -->
          <el-sub-menu index="/chapter5">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第五章 平面布置</span>
            </template>
            <el-menu-item index="/chapter5/section1">5.1 平面布置</el-menu-item>
          </el-sub-menu>

          <!-- 第六章 -->
          <el-sub-menu index="/chapter6">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第六章 结论与建议</span>
            </template>
            <el-menu-item index="/chapter6/section1">6.1 结论</el-menu-item>
            <el-menu-item index="/chapter6/section2">6.2 建议</el-menu-item>
          </el-sub-menu>

          <!-- 第七章 -->
          <el-sub-menu index="/chapter7">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>第七章 模拟运行数据分析</span>
            </template>
            <el-menu-item index="/chapter7/section1">7.1 模拟运行数据分析</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主要内容区域 -->
      <el-main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  Menu as MenuIcon,
  Expand,
  Document,
  Reading
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)
const isMobile = ref(false)
const isMenuVisible = ref(true)

// 获取当前激活的菜单项
const activeMenu = computed(() => {
  return route.path
})

// 处理菜单选择
const handleSelect = async (index: string) => {
  try {
    console.log('正在导航到:', index)
    await router.push(index)
    if (isMobile.value) {
      isCollapse.value = true
    }
  } catch (err) {
    console.error('导航错误:', err)
    ElMessage.error({
      message: '页面加载失败，请稍后重试',
      type: 'error'
    })
  }
}

// 检测设备类型
const checkDevice = () => {
  const width = window.innerWidth
  isMobile.value = width <= 768
  isCollapse.value = isMobile.value
  isMenuVisible.value = width > 768
}

// 监听窗口大小变化
window.addEventListener('resize', checkDevice)

// 组件卸载时移除监听器
onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
})

// 初始检测
checkDevice()

// 切换菜单
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
  if (isMobile.value) {
    isCollapse.value = !isCollapse.value
  }
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
  overflow: hidden;
}

.main-container {
  height: 100%;
}

.sidebar {
  background-color: var(--el-menu-bg-color);
  border-right: 1px solid var(--el-border-color-light);
  transition: width 0.3s;
}

.el-menu-vertical {
  border-right: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
}

.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--el-menu-text-color);
  background-color: var(--el-menu-bg-color);
  border-bottom: 1px solid var(--el-border-color-light);
  padding: 0 20px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
}

.main-content {
  padding: 20px;
  overflow-y: auto;
  background-color: var(--el-bg-color-page);
}

/* 移动端样式 */
.mobile-header {
  background-color: var(--el-color-primary);
  color: white;
  padding: 0;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.mobile-header .logo {
  font-size: 18px;
  font-weight: bold;
}

.mobile-header .el-button {
  color: white;
}

.el-dropdown-link {
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 1000;
    height: calc(100vh - 60px);
    top: 60px;
  }

  .main-content {
    padding: 10px;
  }
}
</style>
