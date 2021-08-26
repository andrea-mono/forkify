<template>
  <p v-bind="$attrs" :class="classes">
    <slot />
  </p>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Text",
  props: {
    size: {
      type: String,
      required: false
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => `${props.size} ${props.noWrap ? 'no-wrap' : null }`)

    return {
      classes
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  &.sm {
    font-size: 1.2rem;
  }
  &.lg {
    font-size: 1.5rem;
  }
  &.xl {
    font-size: 1.7rem;
  }
  &.no-wrap {
    white-space: nowrap;
  }
}
</style>