import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import City from '@/page/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/city',
      component: City
    }
  ]
})
