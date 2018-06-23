import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/views/home/home'

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    name: '首页',
  }

]




export default new Router({
  routes
})
