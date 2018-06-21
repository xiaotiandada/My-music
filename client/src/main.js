// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' // element ui
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

import { sync } from 'vuex-router-sync'

import store from '@/store/store' // store
import router from './router'

import Vodal from 'vodal' // vadal

import 'normalize.css' // normalize

import 'vodal/common.css' // vadal
import 'vodal/door.css'

import '@/public/css/index.less' // global

import '@/icons' // icons

import VCharts from 'v-charts' // v-charts

import GeminiScrollbar from 'vue-gemini-scrollbar' // vue gemini scrollbar

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Vodal.name, Vodal)
Vue.use(VCharts)

sync(store, router)

Vue.use(GeminiScrollbar) // vue gemini scrollbar

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
