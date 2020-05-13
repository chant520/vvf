import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'

import { get, post } from './utils/axios'
Vue.prototype.$http = { get, post }

import utils from './utils/utils'
Vue.use(utils)


Vue.config.productionTip = false

// function initRem() {
//   let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
//   console.log(window.screen.availWidth, cale)
//   window.document.documentElement.style.fontSize = `${16 * 2 * cale}px`
// }
// initRem()
// window.addEventListener('resize', function() {
//   initRem()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
