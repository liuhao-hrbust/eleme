import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }
  ]
})