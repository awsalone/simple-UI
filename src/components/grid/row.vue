<template>
  <div class="g-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    },

  },
  mounted () {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    });
  },

  computed: {
    rowStyle () {
      let { gutter } = this
      return {
        paddingLeft: `-${gutter / 2}px`,
        paddingRight: `-${gutter / 2}px`,
      }
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