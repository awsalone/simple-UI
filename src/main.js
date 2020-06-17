import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont'
import Button from './components/button/button'
import icon from './components/icon'
import buttonGroup from './components/button/button-group'
import row from './components/grid/row'
import col from './components/grid/col'

Vue.config.productionTip = false
Vue.component('g-Button', Button)
Vue.component('g-Icon', icon)
Vue.component('g-Button-group', buttonGroup)
Vue.component('g-row', row)
Vue.component('g-col', col)

new Vue({
  render: h => h(App),
}).$mount('#app')
