import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/charts',
    name: 'Charts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Charts.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forms')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
