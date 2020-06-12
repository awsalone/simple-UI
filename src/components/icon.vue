<template>
  <svg class="g-icon" aria-hidden="true" :style="{fill:color}">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
export default {
  name: 'icon',
  props: ['icon', 'color']
}
</script>
<style lang="scss" scoped>
.g-icon {
  height: 1rem;
  width: 1rem;
  pointer-events: none;
}
</style>