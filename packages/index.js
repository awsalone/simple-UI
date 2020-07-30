import './assets/iconfont'
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Row from './grid/row'
import Col from './grid/col'
import Swipe from './swipe/swipe'
import SwipeItem from './swipe/swipe-item'
import Dialog from './dialog.vue'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Dialog
]
const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
export default {
  install
}