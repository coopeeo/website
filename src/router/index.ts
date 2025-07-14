import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarterView from '../views/CarterView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Me',
      component: HomeView,
    },
    {
      path: '/carter',
      name: 'Brother',
      component: CarterView,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/blog/:id',
      name: 'Blog Post',
      component: BlogPostView,
      props: true, // Pass route params as props to the component
    },
  ],
})

export default router
