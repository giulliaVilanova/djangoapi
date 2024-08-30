import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/Users/View.vue'
import UserCreate from '../views/Users/Create.vue'
import UserEdit from '../views/Users/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    },
    {
      path: '/user/create',
      name: 'userCreate',
      component: UserCreate
    },
    {
      path: '/user/:id/edit',
      name: 'userEdit',
      component: UserEdit
    }
  ]
})

export default router
