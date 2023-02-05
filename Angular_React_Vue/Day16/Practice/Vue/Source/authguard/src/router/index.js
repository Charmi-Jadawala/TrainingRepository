import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProtectedView.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem("user")) {
        next()
      }
      else {
        next({
          name: 'home'
        })
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
