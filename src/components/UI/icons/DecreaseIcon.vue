<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        class="decrease"
  >
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" fill="currentColor"></path>
  </svg>
</template>

<script>
export default {
  name: "DecreaseIcon"
}
</script>

<style lang="scss" scoped>
.decrease {
  color: #f38e82;
  width: 4rem;

  @media screen and (min-width: 768px) {
    width: 2.3rem;
  }
}
</style>