<template>
  <div id="app">
    <g-Button @click="a" disabled>默认按钮</g-Button>
    <g-Button type="primary" round>主要按钮</g-Button>
    <g-Button type="info" disabled>信息按钮</g-Button>
    <g-Button type="warning" icon="setting" :loading="true" iconPosition="right">警告按钮</g-Button>
    <g-Button circle type="primary" icon="setting"></g-Button>
    <g-Button-group>
      <g-Button icon="last" type="primary"></g-Button>
      <g-Button icon="next" type="primary"></g-Button>
    </g-Button-group>
    <g-row :gutter="10">
      <g-col :span="6">
        <div class="bg-purple-dark"></div>
      </g-col>
      <g-col :span="8" :offset="2">
        <div class="bg-purple-dark"></div>
      </g-col>
      <g-col :span="8">
        <div class="bg-purple-light"></div>
      </g-col>
    </g-row>
    <g-swipe class="g-swipe">
      <g-swipe-item class="g-swipe-item">1</g-swipe-item>
      <g-swipe-item class="g-swipe-item">2</g-swipe-item>
      <g-swipe-item class="g-swipe-item">3</g-swipe-item>
      <g-swipe-item class="g-swipe-item">4</g-swipe-item>
    </g-swipe>
    <g-dialog :visible.sync="visible">
      <template>内容</template>
      <template v-slot:footer>
        <g-Button>取消</g-Button>
        <g-Button type="primary">确认</g-Button>
      </template>
    </g-dialog>
    <g-Button @click="visible=true">dialog</g-Button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      num: 300,
      visible: false
    }
  },
  methods: {
    a () {
      console.log(111)
    }
  }

}
</script>

<style lang='scss' >
:root {
  --button-bg: #fff;
}
#app {
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
.bg-purple-dark {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-light {
  background: #e5e9f2;
  border-radius: 4px;
  min-height: 36px;
}
.g-swipe {
  margin: 10px auto;
}
.g-swipe .g-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.test {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>
