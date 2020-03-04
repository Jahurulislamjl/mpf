import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/portfolio.scss'
import '@mdi/font/scss/materialdesignicons.scss'

import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
