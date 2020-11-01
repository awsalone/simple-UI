<template>
  <div>
    <div style="position:relative">
      <span ref="trigger">
        <slot></slot>
      </span>
      <div ref="popover" class="tooltip" :class="{
        visiable: show
      }">
        <div class="tooltip-arrow" ref="arrow"></div>

        <div class="tooltip-inner" :style="[bgcColor,fontCol]">
          <slot name="content" v-html="content">{{content}}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'g-toolTips',
  props: {
    placement: {
      type: String,
      default: 'top',
      validator (value) {
        return !(value !== 'top' && value !== 'bottom' && value !== 'left' && value !== 'right')
      }
    },
    content: {
      type: String,
      default: 'tips'
    },
    effect: {
      default: 'black',
      validator (value) {
        return !(value !== 'white' && value !== 'black')
      }
    }
  },
  data () {
    return {
      show: false,
      position: {
        top: 0,
        left: 0
      },
      // 主题背景色
      bgcColor: {
        '--bgcColor': '#303133'
      },
      // 主题字体色
      fontCol: {
        "--fontCol": "#fff",

      }
    }
  },
  watch: {
    show: function () {
      let trigger = this.$refs.trigger.children[0] ? this.$refs.trigger.children[0] : this.$refs.trigger
      let popover = this.$refs.popover
      let arrow = this.$refs.arrow
      switch (this.placement) {
        case 'top':
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.offsetTop - popover.offsetHeight - 5
          break
        case 'bottom':
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.offsetTop + trigger.offsetHeight + 5
          break
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth - 5
          this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth + 5
          this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
      }
      popover.style.left = this.position.left + 'px'
      popover.style.top = this.position.top + 'px'
    }
  },
  mounted () {
    let trigger = this.$refs.trigger

    trigger.addEventListener('mouseenter', () => {
      this.show = true
      this.changeColor()
    })
    trigger.addEventListener('mouseleave', () => {
      this.show = false
      this.changeColor()
    })

  },
  methods: {
    changeColor: function () {
      if (this.effect === 'white') {
        this.bgcColor = {
          '--bgcColor': '#fff'
        }
        this.fontCol = {
          '--fontCol': '#303133'
        }
      } else {
        this.bgcColor = {
          '--bgcColor': '#303133'
        }
        this.fontCol = {
          '--fontCol': '#fff'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.tooltip {
  display: block;
  position: absolute;
  visibility: hidden;
  overflow-x: auto;
  white-space: nowrap;
  &.visiable {
    visibility: visible;
  }
  .tooltip-inner {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #000;
    background-color: var(--bgcColor);
    border-radius: 5px;
    color: var(--fontCol);
    text-align: center;
    padding: 5px 10px;
    vertical-align: middle;
    font-size: 13px;
  }
  // .tooltip-arrow {
  //   position: absolute;
  //   width: 5px;
  //   height: 5px;
  //   border: 1px solid rgb(0, 0, 0);
  //   background-color: var(--bgcColor);
  //   transform: rotate(45deg);
  //   transform-origin: (50%, 50%);
  //   left: 50%;
  //   top: 50%;
  // }
}
</style>