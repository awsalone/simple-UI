<template>
  <div class="swipeItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swipeItem'
}
</script>
<style lang="scss" >
.swipeItem {
  width: 300px;
  height: 150px;
}
</style>