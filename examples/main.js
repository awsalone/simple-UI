import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import simpleUi from '../packages/index'

Vue.config.productionTip = false
Vue.use(simpleUi)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
