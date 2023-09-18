import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import underConstructionView from '../views/underConstructionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/story',
      name: 'story',
      component: underConstructionView,
    },
    {
      path: '/photo',
      name: 'photo',
      component: underConstructionView,
    },
    {
      path: '/crisis',
      name: 'crisis',
      component: underConstructionView,
    },
  ]
})

export default router
