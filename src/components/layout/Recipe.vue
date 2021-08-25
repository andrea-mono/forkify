<template>
  <div class="recipe">
    RECIPE
  </div>
</template>

<script>
export default {
  name: "Recipe"
}
</script>

<style lang="scss" scoped>
.recipe {
  background: #f9f5f3;
  display: none;

  @media screen and (min-width: 1023px) {
    flex: 1;
    display: block;
  }
}
</style>