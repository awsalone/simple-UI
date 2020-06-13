<template>
  <div class="buttonGroup">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" >
.buttonGroup {
  display: inline-flex;
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