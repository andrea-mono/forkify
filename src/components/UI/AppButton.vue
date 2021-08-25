<template>
  <button v-bind="$attrs" class="button" :class="{ secondaryBtn: secondary, reversedBtn: reversed }">
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
    },
    secondary: {
      type: Boolean,
      default: false
    },
    reversed: {
      type: Boolean,
      default: false
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

    &.secondaryBtn {
      font-size: 1.3rem;
      font-weight: 700;
      color: #f38e82;
      background: #f9f5f3;
      text-transform: none;
      padding: .8rem 2rem;

      &:hover {
        background: #f2efee;
        transform: none !important;
      }
    }

    &.reversedBtn {
      flex-direction: row-reverse;

      > span {
        margin-right: 1rem;
      }
    }

    &:not(:disabled) {
      transition: all 150ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
  }
</style>