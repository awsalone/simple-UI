<template>
  <div id="app">
    <g-Button icon="setting" iconPosition="right">默认按钮</g-Button>
    <g-Button icon="setting">默认按钮</g-Button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang='scss' scoped>
:root {
  --button-bg: #fff;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
