<template>
  <div class="buttonGroup">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'g-Button-group',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 子元素应为 g-button ,但你使用了${name}`)
      }
    }
  }
}
</script>

<style lang="scss" >
.buttonGroup {
  display: inline-flex;
  vertical-align: middle;
  > .baseButton {
    border-radius: 0;
    margin: 0;
    margin-right: 1px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-right: 0;
    }
  }
}
</style>