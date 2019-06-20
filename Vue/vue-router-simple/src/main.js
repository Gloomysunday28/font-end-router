import Vue from 'vue'
import App from './App.vue'
import Router from './routers'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  mode: 'hash',
  render: h => h(App),
}).$mount('#app')
