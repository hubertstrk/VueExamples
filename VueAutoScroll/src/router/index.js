import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import UserDetails from '../components/UserDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'user/:userId',
        component: UserDetails,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
