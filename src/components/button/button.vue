<template>
  <button
    v-if="this.typeStyle"
    class="baseButton"
    @mousedown="mdChange($event)"
    @mouseup="muChange($event)"
    @focus="focusChange($event)"
    @blur="blurChange($event)"
    @mouseover="mOverChange($event)"
    @mouseout="mOutChange($event)"
    :class="[{[`icon-${iconPosition}`]:true,},{circle},{round},{disabled},{borderExist:typeStyle.border}]"
    :style="[{color:typeStyle.color},{backgroundColor:typeStyle.bgc}]"
    @click="handleClick"
    :disabled="disabled"
  >
    <g-Icon icon="loading" class="loading icon" v-if="loading" style="fill:#fff"></g-Icon>
    <g-Icon v-if="icon && !loading" :icon="icon" class="icon" color="typeStyle.color"></g-Icon>
    <slot class="content"></slot>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    // 图标名称
    icon: {},
    // 图标位置 左右
    iconPosition: {
      default: "left",
      validator (value) {
        return !(value !== 'right' && value !== 'left')
      },
    },
    // type
    type: {
      default: 'base',
      validator (value) {
        return !(value !== 'primary' && value !== 'info' && value !== 'warning' && value !== 'base')
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },


  data () {
    return {
      //foucus状态
      onfoucus: false,
      // type
      typeStyle: {},
      typeList: [
        // base
        {
          color: '#606266',
          bgc: '#fff',
          borderColor: '#DCDFE6', // default
          hoverColor: '#40B6FF',
          hoverbgc: '#ECF5FF',
          hoverBorderColor: '#409EFF',// hover边框颜色
          downColor: '#3A8EE6',// 按下字体，边框颜色
          border: true
        },
        // primary
        {
          color: '#fff',
          bgc: '#409EFF',
          hoverbgc: '#66B1FF',
          downColor: '#3A8EE6',// 按下bgc
        },
        // info
        {
          color: '#fff',
          bgc: '#909399',
          hoverbgc: '#A6A9AD',
          downColor: '#82848A',// 按下bgc
        },
        // danger
        {
          color: '#fff',
          bgc: '#F56C6C',
          hoverbgc: '#F78989',
          downColor: '#DD6161',// 按下bgc
        }
      ]
    }
  },
  methods: {
    // mouseover
    mOverChange: function (e) {
      if (this.type === 'base') {
        e.target.style.borderColor = this.typeStyle.hoverBorderColor
        e.target.style.color = this.typeStyle.hoverColor
      }
      e.target.style.backgroundColor = this.typeStyle.hoverbgc
    },
    // mousedown
    mdChange: function (e) {
      if (this.type === 'base') {
        e.target.style.color = this.typeStyle.downColor
        e.target.style.borderColor = this.typeStyle.downColor
      } else {
        e.target.style.backgroundColor = this.typeStyle.downColor
      }

    },
    // mouseup
    muChange: function (e) {
      if (this.type === 'base') {
        e.target.style.color = this.typeStyle.hoverColor
        e.target.style.borderColor = this.typeStyle.hoverBorderColor
      } else {
        e.target.style.backgroundColor = this.typeStyle.hoverbgc
      }
    },
    // foucus
    focusChange: function (e) {
      e.target.style.outline = "none";
      this.onfoucus = true
    },
    // mouseOut
    mOutChange: function (e) {
      if (!this.onfoucus) {
        if (this.type === 'base') {
          e.target.style.borderColor = this.typeStyle.borderColor
          e.target.style.color = this.typeStyle.color
        }
        e.target.style.backgroundColor = this.typeStyle.bgc
      }
    },
    // onblur
    blurChange: function (e) {
      if (this.type === 'base') {
        e.target.style.borderColor = this.typeStyle.borderColor
        e.target.style.color = this.typeStyle.color
      }
      e.target.style.backgroundColor = this.typeStyle.bgc
      this.onfoucus = false
    },
    handleClick: function (e) {
      this.$emit('click', e)
    }


  },
  created () {

    // type
    if (this.type === 'primary') {
      this.typeStyle = this.typeList[1]
    } else if (this.type === 'info') {
      this.typeStyle = this.typeList[2]
    } else if (this.type === 'warning') {
      this.typeStyle = this.typeList[3]
    } else {
      this.typeStyle = this.typeList[0]
    }
  }

}
</script>

<style lang='scss'>
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.baseButton {
  height: var(--button-height);
  font-size: 14px;
  border-radius: 4px;
  padding: 0.7rem 1.1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  .loading {
    animation: spin 1.3s linear infinite;
  }
  .content {
    padding: 1rem;
  }
  &.borderExist {
    border: 1px solid #ccc;
  }

  &.icon-right {
    .content {
      order: 1;
    }
    .icon {
      order: 2;
    }
  }
  &.circle {
    border-radius: 50%;
    padding: 0.5rem;
  }
  &.round {
    border-radius: 300px;
  }
  &.disabled {
    cursor: no-drop;
  }
}
</style>