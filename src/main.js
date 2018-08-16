// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/index'

import MintUi from 'mint-ui'
import { Header, Cell, Field, Switch, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/style/mycss.css'

Vue.use(Vuex)
Vue.use(MintUi)
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)
Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button)

// Vue.component(.name, )

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
