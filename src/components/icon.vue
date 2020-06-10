<template>
  <svg :class="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'icon',
  props: {
    iconClass: {

    }
  }
}
</script>
<style lang="scss" scoped>
</style>