<template>
  <div id="app">
    <g-Button>默认按钮</g-Button>
    <g-Button>默认按钮</g-Button>
  </div>
</template>

<script>
import Button from './components/button'
export default {
  name: 'App',
  components: {
    "g-Button": Button
  }
}
</script>

<style lang='scss' scoped>
:root {
  --button-bg: #fff;
}
</style>
