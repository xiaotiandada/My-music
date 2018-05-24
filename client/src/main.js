// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import { sync } from 'vuex-router-sync'
// store
import store from '@/store/store'
import router from './router'

// vadal
import Vodal from 'vodal'

// normalize
import 'normalize.css'

// vadal
import 'vodal/common.css'
import 'vodal/door.css'

// global
import '@/public/css/index.less'

import '@/icons' // icons

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Vodal.name, Vodal)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
