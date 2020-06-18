<template>
  <div id="app">
    <g-Button>默认按钮</g-Button>
    <g-Button type="primary">主要按钮</g-Button>
    <g-Button type="info">信息按钮</g-Button>
    <g-Button type="warning" icon="setting" :loading="true" iconPosition="right">警告按钮</g-Button>
    <g-Button circle type="primary" icon="setting"></g-Button>
    <g-Button-group>
      <g-Button icon="last" type="primary"></g-Button>
      <g-Button icon="next" type="primary"></g-Button>
    </g-Button-group>
    <g-row :gutter="10" class="gg">
      <g-col class="bg-purple-dark" :span="6"></g-col>
      <g-col class="bg-purple-dark" :span="8" :offset="2"></g-col>
      <g-col class="bg-purple-light" :span="8"></g-col>
    </g-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
.gg {
  background-color: black;
}
</style>
