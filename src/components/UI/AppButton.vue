<template>
  <button v-bind="$attrs" class="button">
    <slot />
    <span v-text="title"></span>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    font-size: 1.4rem;
    background: linear-gradient(to right bottom,#fbdb89,#f48982);
    color: #fff;
    padding: 1.4rem 4rem;
    border: none;
    border-radius: 10rem;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      margin-left: 1rem;
    }

    &:not(:disabled) {
      transition: all 150ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }

    &:disabled {
      opacity: 60%;
      cursor: default;
    }
  }
</style>