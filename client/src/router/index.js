import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Registered from '@/views/Registered/Index'

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
    }
  ]
})
