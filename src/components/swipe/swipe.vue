<template>
  <div class="swipe" :style="{width:width+'px', height:height + 'px'}">
    <div class="swipe-container" :style="[{width:(width * swipeItems.length) +'px'}]">
      <slot></slot>
    </div>
    <div class="g-dots">
      <span class="last">
        <g-Icon icon="last" color="#fff"></g-Icon>
      </span>
      <div class="dotIndex">
        <span class="dots" v-for="(item,index) in swipeItems" :key="index"></span>
      </div>

      <span class="next">
        <g-Icon icon="next" color="#fff"></g-Icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swipeItem: []
    }
  },
  methods: {
    init () {
      this.swipeItem = this.$children
    }
  },
  computed: {
    // 组件名为swipeItem的子组件
    swipeItems () {
      return this.swipeItem.filter(vm => {
        return vm.$options.name == 'swipeItem'
      })
    }
  },
  props: {
    width: {
      default: 300,
      type: [Number, String]
    },
    height: {
      default: 150,
      type: [Number, String]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })

  }

}
</script>
<style lang="scss" >
.swipe {
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  .swipe-container {
    display: flex;
    height: 150px;
  }
  .g-dots {
    > span {
      position: absolute;
    }
    .last {
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }
    .next {
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 20px;
      height: 20px;
    }
    .dotIndex {
      position: absolute;
      height: 20px;
      line-height: 20px;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      .dots {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
        margin: 3px;
      }
    }
  }
}
</style>