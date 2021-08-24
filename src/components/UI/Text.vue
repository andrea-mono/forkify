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
.lg {
  font-size: 1.5rem;
}
</style>