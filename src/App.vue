<template>
  <div id="app">
    <g-Button>默认按钮</g-Button>
    <g-Button type="primary">主要按钮</g-Button>
    <g-Button type="info">信息按钮</g-Button>
    <g-Button type="warning" icon="setting" :loading="true" iconPosition="right">警告按钮</g-Button>
    <g-Button circle type="primary" icon="setting"></g-Button>
    <g-Button-group>
      <div></div>
      <g-Button icon="last" type="primary"></g-Button>
      <g-Button icon="next" type="primary"></g-Button>
    </g-Button-group>
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
</style>
