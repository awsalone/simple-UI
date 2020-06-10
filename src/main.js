import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont'
import Button from './components/button'
import icon from './components/icon'

Vue.config.productionTip = false
Vue.component('g-Button', Button)
Vue.component('g-Icon', icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
