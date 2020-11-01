<template>
  <div class="collapse-item">
    <div class="tab">
      <div class="header" @click="handleHeaderClick">
        <slot name="title">{{title}}</slot>
        <i></i>
      </div>
      <div class="content" v-show="isActive">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'g-collapse-item',
  props: {
    title: String,
    name: {
      type: [String, Number],
      default () {
        return this._uid;
      }
    },
    disabled: Boolean,
    // focusing: false,
    // isClick: false
  },
  inject: ['collapse'],
  computed: {
    isActive () {
      return this.collapse.activeNames.indexOf(this.name) > -1
    },
    act () {
      return this.collapse.activeNames
    }
  },
  methods: {
    handleHeaderClick () {
      // if (this.disabled) return;
      this.$parent.$emit('itemclick', this);
      // this.focusing = false;
      // this.isClick = true;
    }
  }
}
</script>

<style lang="scss">
.tab {
  border-bottom: 1px solid #ebeef5;
  padding: 10px;
}
.header {
  display: flex;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  color: #303133;
  cursor: pointer;

  font-size: 13px;
  font-weight: 500;
  transition: border-bottom-color 0.3s;
  outline: none;
  &.active {
  }
}
</style>