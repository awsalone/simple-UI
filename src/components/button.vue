<template>
  <div>
    <button class="baseButton">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    {

    }
  ]
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
  &:hover {
    border-color: var(--border-color-hover, rgb(37, 167, 241));
    color: var(--color-hover, rgb(37, 167, 241));
  }
  .active {
    background-color: var(--button-active-bg, rgb(20, 128, 250));
  }
}
</style>