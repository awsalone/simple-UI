<template>
  <transition name="dialog-fade">
    <div class="dialog_wrapper" @click.self="handleClose" v-show="visible">
      <div class="dialog_container" :style="{width,marginTop:top}">
        <div class="dialog_header">
          <span class="dialog_title">{{title}}</span>
          <button class="dialog_headerbtn" @click.self="handleClose">
            111
            <g-Icon icon="left"></g-Icon>
          </button>
        </div>
        <div class="dialog_body">
          <slot>body</slot>
        </div>
        <div class="dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'g-dialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    handleClose: function () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
.dialog_wrapper {
  position: fixed;
  overflow: auto;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2020;
  .dialog_container {
    margin: 15vh auto 50px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    .dialog_header {
      padding: 20px 20px 10px;
      .dialog_headertitle {
        line-height: 20px;
        font-size: 18px;
        color: #303133;
      }
      .dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .dialog_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .dialog_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>