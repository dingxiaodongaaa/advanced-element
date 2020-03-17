import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/select',
    name: 'Select',
    component: () => import(/* webpackChunkName: "about" */ '../views/Select.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
