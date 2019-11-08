import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {
  Carousel,
  CarouselItem,
  Image
} from 'element-ui'

import './plugins/element.js'

Vue.use(Carousel, CarouselItem, Image)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
