<template>
  <p v-bind="$attrs" :class="size">
    <slot />
  </p>
</template>

<script>
export default {
  name: "Text",
  props: {
    size: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.sm {
  font-size: 1.2rem;
}
.lg {
  font-size: 1.5rem;
}
.xl {
  font-size: 1.7rem;
}
</style>