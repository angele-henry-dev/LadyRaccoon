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
      path: '/legal-notice',
      name: 'legal-notice',
      component: () => import('../views/LegalView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/SitemapView.vue')
    },
    {
      path: '/:notFound',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
    /* {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../views/NotFound.vue')
    } */
  ]
})

export default router
