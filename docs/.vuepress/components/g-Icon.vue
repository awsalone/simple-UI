<template>
  <svg class="g-icon" aria-hidden="true" :style="{fill:color}">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
import('./assets/iconfont')
export default {
  name: 'g-Icon',
  props: {
    icon: {

    },
    color: {
      default: '#fff'
    }
  }
}
</script>
<style lang="scss" scoped>
.g-icon {
  height: 1rem;
  width: 1rem;
  pointer-events: none;
}
</style>