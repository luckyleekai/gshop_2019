// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
import Search from '@/components/search/Search'
import Personal from '@/components/personal/Personal'
import Login from '@/components/login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: '/personal',
    component: Personal,
    meta: {
      showFooter: true
    }
  }, {
    path: '/login',
    component: Login
  }]
})
