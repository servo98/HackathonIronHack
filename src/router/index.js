import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * VIEW
 */
import Main from '../views/Main.vue'
/**
 * COMPONENTS
 */
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import MapaAlbergue from '../components/MapaAlbergue.vue'
import MiAlbergue from '../components/MiAlbergue.vue'
import MisAlbergues from '../components/MisAlbergues.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mapa',
    name: 'mapa',
    component: MapaAlbergue
  },
  {
    path: '/me/albergue',
    name: 'albergue',
    component: MiAlbergue
  },
  {
    path: '/albergues',
    name: 'albergues',
    component: MisAlbergues
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
