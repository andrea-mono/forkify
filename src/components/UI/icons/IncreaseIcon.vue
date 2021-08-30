<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="increase"
  >
    <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" fill="currentColor"></path>
  </svg>
</template>

<script>
export default {
  name: "IncreaseIcon"
}
</script>

<style lang="scss" scoped>
.increase {
  color: #f38e82;
  width: 4rem;

  @media screen and (min-width: 768px) {
    width: 2.3rem;
  }
}
</style>