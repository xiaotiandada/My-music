import Vue from 'vue'
import Router from 'vue-router'
// const _import = require('./_import_' + process.env.NODE_ENV)
import Index from '@/views/Index'

import AdminLogin from '@/views/admin/Login/Index'
import Song from '@/views/Song/Index'

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

export const constantRouterMap = [{
  path: '/',
  name: 'Index',
  component: Index
},
{
  path: '/adminglogin',
  name: 'AdminLogin',
  component: AdminLogin
},
{
  path: '/song',
  name: 'Song',
  component: Song
},
{
  path: '/admin',
  component: Admin,
  redirect: '/admin/index',
  hidden: false,
  children: [{
    path: 'index',
    name: 'Dashboard',
    component: () =>
        import('@/views/admin/Dashboard/Index'),
    meta: {
      title: '后台首页',
      icon: 'example'
    }
  }]
},
{
  path: '/form',
  component: Admin,
  hidden: false,
  children: [{
    path: 'index',
    name: 'Form',
    component: () =>
        import('@/views/admin/from/Index'),
    meta: {
      title: '用户管理',
      icon: 'table'
    }
  }]
}
]

export default new Router({
  routes: constantRouterMap
})
