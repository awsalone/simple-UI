<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script>
export default {
  name: 'icon',
  props: {
    name: {}
  }
}
</script>
<style lang="scss" scoped>
.g-icon {
  height: 1rem;
  width: 1rem;
}
</style>