// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAMap from 'vue-amap'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store'

import Vant, {
  Lazyload,
} from 'vant'
import vueHeadful from 'vue-headful'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Lazyload)
Vue.component('vue-headful', vueHeadful)
Vue.use(VueAMap);



VueAMap.initAMapApiLoader({
  key: 'a1046e010c487e41f9d67f644a9a1b16',
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
