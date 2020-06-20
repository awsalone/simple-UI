<template>
  <div
    class="swipe"
    :style="{width:width+'px', height:height + 'px'}"
    @mouseenter="pause()"
    @mouseleave="start()"
  >
    <transition name="swipe">
      <div
        class="swipe-container"
        :style="[{width:(width * swipeItems.length) +'px'},swipeStyle,{ transitionDuration: (this.state ? 0+'s': 1 + 's')}]"
      >
        <slot></slot>
      </div>
    </transition>
    <div class="g-dots">
      <span class="last" @click="toggle(index-1)">
        <g-Icon icon="last" color="#fff"></g-Icon>
      </span>
      <div class="dotIndex">
        <span class="dots" v-for="(item,index) in swipeItems" :key="index" @click="toggle(index)"></span>
      </div>

      <span class="next" @click="toggle(index+1)">
        <g-Icon icon="next" color="#fff"></g-Icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swipeItem: [],
      index: 0,
      state: false // 轮播图边界状态
    }
  },
  methods: {
    init () {
      this.swipeItem = this.$children

    },
    toggle (n = this.index + 1) {
      let length = this.swipeItems.length - 1
      if (n < 0) {
        this.state = true
        this.index = length
      } else if (n === length + 1) {
        this.state = true
        this.index = 0
      } else {
        this.state = false
        this.index = n
      }
    },
    pause () {
      window.clearInterval(this.timer)
      this.timer = undefined
    },
    start () {
      this.timer = setInterval(this.toggle, this.autoPlayDelay)
    }

  },
  computed: {
    // 组件名为swipeItem的子组件
    swipeItems () {
      return this.swipeItem.filter(vm => {
        return vm.$options.name == 'swipeItem'
      })
    },
    swipeStyle () {
      return {
        transform: `translateX(-${this.width * this.index}px)`
      }
    },

  },
  props: {
    width: {
      default: 300,
      type: [Number, String]
    },
    height: {
      default: 150,
      type: [Number, String]
    },
    autoPlayDelay: {
      default: 3000,
      type: [Number, String]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
      this.timer = setInterval(this.toggle, this.autoPlayDelay)
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
  cursor: pointer;
  .swipe-enter-active {
    transition: all 0.3s ease;
  }
  .swipe-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

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