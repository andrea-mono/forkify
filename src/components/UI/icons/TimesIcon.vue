<template>
  <svg
       xmlns="http://www.w3.org/2000/svg"
       aria-hidden="true"
       role="img"
       preserveAspectRatio="xMidYMid meet"
       viewBox="0 0 64 64"
       class="times"
       :class="size"
  >
    <path
        d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
        fill="currentColor"></path>
  </svg>
</template>

<script>
export default {
  name: "TimesIcon",
  props: {
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.times {
  color: #574945;
  width: 2.4rem;
  height: 2.4rem;

  &.xs {
    width: 1.5rem;
    height: 1.5rem;
  }
  &.md {
    width: 4rem;
    height: 4rem;
  }
}
</style>