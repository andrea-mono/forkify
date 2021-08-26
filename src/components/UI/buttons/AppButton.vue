<template>
  <a v-if="url" v-bind="$attrs" :href="url" class="button" :class="{ 'secondary-btn': secondary, 'reversed-btn': reversed, 'rounded-full': roundedFull }" target="_blank">
    <slot />
    <span v-if="title" v-text="title"></span>
  </a>
  <button v-else v-bind="$attrs" class="button" :class="{ 'secondary-btn': secondary, 'reversed-btn': reversed, 'rounded-full': roundedFull }">
    <slot />
    <span v-if="title" v-text="title"></span>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    url: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    reversed: {
      type: Boolean,
      default: false
    },
    roundedFull: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    width: fit-content;
  }

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

    &.secondary-btn {
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

    &.reversed-btn {
      flex-direction: row-reverse;

      > span {
        margin-right: 1rem;
      }
    }

    &.rounded-full {
      width: 45px;
      height: 45px;
      padding: 0;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
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