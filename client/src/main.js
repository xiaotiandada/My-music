// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

// vadal
import Vodal from 'vodal'

// normalize
import 'normalize.css'

// vadal
import 'vodal/common.css'
import 'vodal/door.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Vodal.name, Vodal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
