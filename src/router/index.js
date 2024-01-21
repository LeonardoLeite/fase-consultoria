import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/consulting',
      name: 'consulting',
      component: () => import('../views/ServicesConsultingView.vue')
    },
    {
      path: '/development',
      name: 'development',
      component: () => import('../views/ServicesDevelopmentView.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/ServicesDesignView.vue')
    },
    {
      path: '/branding',
      name: 'branding',
      component: () => import('../views/ServicesBrandingView.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/CasesView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
