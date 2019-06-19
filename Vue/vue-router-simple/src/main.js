import Vue from 'vue'
import App from './App.vue'
import Router from './routers'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  mode: 'history',
  render: h => h(App),
}).$mount('#app')
