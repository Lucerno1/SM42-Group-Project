import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('hh:mm')
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
