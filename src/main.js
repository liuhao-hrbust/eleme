// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUi from 'mint-ui'
import { Header, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/style/mycss.css'
Vue.use(MintUi)
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
// Vue.component(.name, )

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
