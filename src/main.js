import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './plugins/element.js'

import { toZero } from "@/util/transform";

Vue.filter('formatSec', function (num) {
  let Tnum = parseInt(num);
  let M = toZero(Math.floor((Tnum % 3600) / 60));
  let S = toZero(Math.floor(Tnum % 60));
  return M + ":" + S;
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
