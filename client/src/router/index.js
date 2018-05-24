import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Registered from '@/views/Registered/Index'
import AdminLogin from '@/views/admin/Login/Index'

Vue.use(Router)

import Admin from '@/views/admin/Index'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

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
    {
      path: '/admin',
      component: Admin,
      redirect: '/admin/index',
      hidden: false,
      children: [
        {
          path: 'index',
          name: 'Dashboard',
          component: () => import('@/views/admin/Dashboard/Index'),
          meta: { title: '后台首页', icon: 'example' }
        }
      ]
    },
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/form',
      component: Admin,
      hidden: false,
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => import('@/views/admin/from/Index'),
          meta: { title: '用户管理', icon: 'table' }
        }
      ]
    }
  ]
})
