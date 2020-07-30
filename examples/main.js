import Vue from 'vue'
import App from './App.vue'
import simpleUi from '../packages/index'

Vue.config.productionTip = false
Vue.use(simpleUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
