import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chapter1/section1'
    },
    // 第1章
    {
      path: '/chapter1/section1',
      name: 'chapter1-1',
      component: () => import('../views/chapter1/Section1.vue')
    },
    {
      path: '/chapter1/section2',
      name: 'chapter1-2',
      component: () => import('../views/chapter1/Section2.vue')
    },
    {
      path: '/chapter1/section3',
      name: 'chapter1-3',
      component: () => import('../views/chapter1/Section3.vue')
    },
    {
      path: '/chapter1/section4',
      name: 'chapter1-4',
      component: () => import('../views/chapter1/Section4.vue')
    },
    {
      path: '/chapter1/section5',
      name: 'chapter1-5',
      component: () => import('../views/chapter1/Section5.vue')
    },
    // 第2章
    {
      path: '/chapter2/section1',
      name: 'chapter2-1',
      component: () => import('../views/chapter2/Section1.vue')
    },
    {
      path: '/chapter2/section2',
      name: 'chapter2-2',
      component: () => import('../views/chapter2/Section2.vue')
    },
    // 第3章
    {
      path: '/chapter3/section1',
      name: 'chapter3-1',
      component: () => import('../views/chapter3/Section1.vue')
    },
    {
      path: '/chapter3/section2',
      name: 'chapter3-2',
      component: () => import('../views/chapter3/Section2.vue')
    },
    // 第4章
    {
      path: '/chapter4/section1',
      name: 'chapter4-1',
      component: () => import('../views/chapter4/Section1.vue')
    },
    {
      path: '/chapter4/section2',
      name: 'chapter4-2',
      component: () => import('../views/chapter4/Section2.vue')
    },
    {
      path: '/chapter4/section3',
      name: 'chapter4-3',
      component: () => import('../views/chapter4/Section3.vue')
    },
    {
      path: '/chapter4/section4',
      name: 'chapter4-4',
      component: () => import('../views/chapter4/Section4.vue')
    },
    {
      path: '/chapter4/section5',
      name: 'chapter4-5',
      component: () => import('../views/chapter4/Section5.vue')
    },
    {
      path: '/chapter4/section6',
      name: 'chapter4-6',
      component: () => import('../views/chapter4/Section6.vue')
    },
    {
      path: '/chapter4/section7',
      name: 'chapter4-7',
      component: () => import('../views/chapter4/Section7.vue')
    },
    // 第5章
    {
      path: '/chapter5/section1',
      name: 'chapter5-1',
      component: () => import('../views/chapter5/Section1.vue')
    },
    // 第6章
    {
      path: '/chapter6/section1',
      name: 'chapter6-1',
      component: () => import('../views/chapter6/Section1.vue')
    },
    {
      path: '/chapter6/section2',
      name: 'chapter6-2',
      component: () => import('../views/chapter6/Section2.vue')
    },
    // 第7章
    {
      path: '/chapter7/section1',
      name: 'chapter7-1',
      component: () => import('../views/chapter7/Section1.vue')
    },
    // 404 路由
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
