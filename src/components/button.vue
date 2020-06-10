<template>
  <div>
    <button
      class="baseButton"
      @mousedown="mdChange($event)"
      @mouseup="muChange($event)"
      @focus="focusChange($event)"
      @blur="blurChange($event)"
      @mouseover="mOverChange($event)"
      @mouseout="mOutChange($event)"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    {
      type: String
    }
  ],
  data () {
    return {
      onfoucus: false
    }
  },
  methods: {
    // mousedown
    mdChange: function (e) {
      e.target.style.borderColor = "rgb(0, 120, 189)"
      e.target.style.color = "rgb(0, 120, 189)"
    },
    // mouseup
    muChange: function (e) {
      e.target.style.borderColor = "var(--border-color-hover, rgb(37, 167, 241))"
      e.target.style.color = "var(--color-hover, #409eff)"
    },
    // onblur
    blurChange: function (e) {
      e.target.style.borderColor = "var(--border-color, #ccc)"
      e.target.style.color = "var(--color)"
      e.target.style.backgroundColor = "var(--button-bg)"
      this.onfoucus = false
    },
    // foucus
    focusChange: function (e) {
      e.target.style.outline = "none";
      this.onfoucus = true
    },
    // mouseover
    mOverChange: function (e) {
      e.target.style.borderColor = 'var(--border-color-hover, #c6e2ff)'
      e.target.style.color = 'var(--color-hover, #409eff)'
      e.target.style.backgroundColor = ' #ecf5ff'
    },
    // mouseOut
    mOutChange: function (e) {
      if (!this.onfoucus) {
        e.target.style.borderColor = 'var(--border-color, #ccc)'
        e.target.style.color = 'var(--color)'
        e.target.style.backgroundColor = 'var(--button-bg)'
      }
    }
  },

}
</script>

<style lang='scss' scoped>
.baseButton {
  height: var(--button-height);
  font-size: var(--font-size, 14px);
  background-color: var(--button-bg);
  border-radius: 4px;
  color: var(--color);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color, #ccc);

  .active {
    background-color: var(--button-active-bg, rgb(20, 128, 250));
  }
}
</style>