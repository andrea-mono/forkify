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
  display: none;

  @media screen and (min-width: 1023px) {
    flex: 1;
    height: 500px;
    display: block;
  }
}
</style>