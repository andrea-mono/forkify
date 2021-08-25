<template>
  <div class="arrow" :class="{ right: right }">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1.5rem"
        height="1.5rem"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
      <g fill="none">
        <path d="M11 5l-7 7l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4 12h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ArrowIcon",
  props: {
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow {
  height: 20px;
  display: flex;
  align-items: center;

  &.right {
    transform: rotateZ(-180deg);
  }
}
</style>