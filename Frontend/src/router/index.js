import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/HomePage/Home.vue'
import NotFound from '@/NotFound.vue'
import BuyNowPage from '@/BuyNow/BuyNowPage.vue'
 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/buy-now',
    name: 'BuyNowPage',
    component: BuyNowPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router