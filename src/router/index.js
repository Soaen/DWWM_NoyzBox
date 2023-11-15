import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/noises',
      name: 'noises',
      component: () => import('../views/NoisesView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/addcategories',
      name: 'addcategories',
      component: () => import('../views/AddCategoriesView.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/ProfilView.vue')
    },
    {
      path: '/addnoise',
      name: 'addnoise',
      component: () => import('../views/AddNoiseView.vue')
    }
  ]
})

export default router
