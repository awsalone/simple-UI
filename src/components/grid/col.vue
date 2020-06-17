<template>
  <div class="g-col" :class="colClass" :style="colStyle"></div>
</template>
<script>
export default {
  props: {
    span: {
      type: [String, Number],
      validator (value) {
        // 1-24的整数
        return /^\d{1,2}$/.test(value) && value > 0 && value < 25
      }
    },
    offset: {
      type: [String, Number],
      validator (value) {
        return /^\d{1,2}$/.test(value) && value > 0 && value < 25
      }
    }
  },
  data () {
    return {
      gutter: 0

    }
  },
  methods: {
    createClassName (obj, str = '') {
      if (!obj) { return [] }
      let arr = []
      if (obj.span) {
        arr.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr
    }
  },
  computed: {
    colClass () {
      let { offset, span } = this
      return [
        ...this.createClassName({ offset, span })
      ]
    },
    colStyle () {
      let { gutter } = this

      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  }
}
</script>
<style lang="scss" >
.g-col {
  width: 200px;
}
</style>