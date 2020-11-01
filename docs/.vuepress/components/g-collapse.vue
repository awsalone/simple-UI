<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'g-collapse',
  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      activeNames: [].concat(this.value)
    }
  },
  provide () {
    return {
      collapse: this
    }
  },
  watch: {
    value (value) {
      this.activeNames = [].concat(value)
    }
  },
  methods: {
    test () {
      console.log('test')
    },
    test1 () {
      console.log('父组件点击')
    },
    setActiveNames: function (activeNames) {
      console.log('setActiveNames')
      activeNames = [].concat(activeNames)
      let value = this.accordion ? activeNames[0] : activeNames;
      this.activeNames = activeNames;
      this.$emit('input', value);
      this.$emit('change', value);
    },
    handleItemClick: function (item) {
      console.log('handleItemClick')
      if (this.accordion) {
        // 手风琴
        this.setActiveNames((this.activeNames[0] || this.activeNames[0] === 0) &&
          this.activeNames[0] === item.name ? '' : item.name
        )
      } else {
        let activeNames = this.activeNames.slice(0);
        let index = activeNames.indexOf(item.name);
        if (index > -1) {
          activeNames.splice(index, 1)
        } else {
          activeNames.push(item.name)
        }
        this.setActiveNames(activeNames)
      }
    }
  },

  mounted () {
    this.$on('itemclick', this.handleItemClick)
  }
}
</script>

<style lang="scss">
</style>