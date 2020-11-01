<template>
  <div>
    <h1 style="marginLeft:1rem">swipe</h1>
    <g-swipe :autoPlayDelay="2000" class="swipeparent" :width="400" :height="200">
      <g-swipe-item class="swipeitems">1</g-swipe-item>
      <g-swipe-item class="swipeitems">2</g-swipe-item>
      <g-swipe-item class="swipeitems">3</g-swipe-item>
      <g-swipe-item class="swipeitems">4</g-swipe-item>
    </g-swipe>
    <table style="padding-left:16px">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>宽度</td>
          <td>Number</td>
          <td>-</td>
          <td>300</td>
        </tr>
        <tr>
          <td>height</td>
          <td>高度</td>
          <td>Number</td>
          <td>-</td>
          <td>150</td>
        </tr>
        <tr>
          <td>autoPlayDelay</td>
          <td>播放速度</td>
          <td>Number</td>
          <td>-</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>auto</td>
          <td>是否自动播放</td>
          <td>Boolean</td>
          <td>-</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.swipeparent {
  position: absolute;
  margin: auto;
}
.swipeitems {
  background-color: rgb(45, 186, 241);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>