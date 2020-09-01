<template>
  <div class="layoutContent">
    layout
    <div class="test">
      <g-toolTips content="123" placement="top" effect="white">
        <g-Button class="ceshi1">ceshi1</g-Button>
      </g-toolTips>
      <g-toolTips content="321提示文字" class="ceshi2" placement="bottom">
        <g-Button>ceshi2</g-Button>
      </g-toolTips>
      <g-toolTips content="321提示文字" class="ceshi2" placement="left">
        <g-Button>ceshi2</g-Button>
      </g-toolTips>
      <g-toolTips content="321提示文字" class="ceshi2" placement="right">
        <g-Button>ceshi2</g-Button>
      </g-toolTips>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.layoutContent {
  margin-left: 10px;
  height: 100vh;
  .test {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin: 20px;
    .ceshi1 {
      margin-right: 10px;
    }
    .csshi3 {
      position: absolute;
    }
  }
}
</style>