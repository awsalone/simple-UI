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
    :class="[{[`icon-${iconPosition}`]:true,},`icon-${borderShape}`,{borderExist:typeStyle.border}]"
    :style="[{color:typeStyle.color},{backgroundColor:typeStyle.bgc}]"
  >
    <g-Icon v-if="icon" :icon="icon" class="icon" color="typeStyle.color"></g-Icon>
    <slot class="content"></slot>
  </button>
</template>

<script>
export default {
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
    type: {
      default: 'base',
      validator (value) {
        return !(value !== 'primary' && value !== 'info' && value !== 'warning' && value !== 'base')
      }
    }

  },


  data () {
    return {
      //foucus状态
      onfoucus: false,
      // 边框形状
      borderShape: '',
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
    }


  },
  created () {
    // border-radius
    if (this.$attrs.circle !== undefined) {
      this.borderShape = 'circle'
    } else if (this.$attrs.round !== undefined) {
      this.borderShape = 'round'
    }
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
    // bgc color
    console.log(this)
  }

}
</script>

<style lang='scss'>
.baseButton {
  height: var(--button-height);
  font-size: 14px;
  border-radius: 4px;
  padding: 0.7rem 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
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
  &.icon-circle {
    border-radius: 50%;
    padding: 0.5rem;
  }
  &.icon-round {
    border-radius: 300px;
  }
}
</style>