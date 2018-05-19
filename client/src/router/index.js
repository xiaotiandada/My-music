import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Registered from '@/views/Registered/Index'
import Admin from '@/views/admin/Index'
import AdminLogin from '@/views/admin/Login/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    // admin
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})
