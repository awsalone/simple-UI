<template>
  <div class="g-row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    }
  }
}
</script>
<style lang="scss" scoped>
.g-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>