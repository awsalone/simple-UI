import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont'
import Button from './components/button/button'
import icon from './components/icon'
import buttonGroup from './components/button/button-group'
import row from './components/grid/row'
import col from './components/grid/col'
import swipe from './components/swipe/swipe'
import swipeItem from './components/swipe/swipe-item'
import dialog from './components/dialog.vue'

Vue.config.productionTip = false
Vue.component('g-Button', Button)
Vue.component('g-Icon', icon)
Vue.component('g-Button-group', buttonGroup)
Vue.component('g-row', row)
Vue.component('g-col', col)
Vue.component('g-swipe', swipe)
Vue.component('g-swipe-item', swipeItem)
Vue.component('g-dialog', dialog)

new Vue({
  render: h => h(App),
}).$mount('#app')
