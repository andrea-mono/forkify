<template>
  <div class="servings-actions">
    <Increase />
    <Decrease />
  </div>
</template>

<script>
import Increase from "@/components/layout/recipe/Increase";
import Decrease from "@/components/layout/recipe/Decrease";

export default {
  name: "ServingsActions",
  components: {Decrease, Increase}
}
</script>

<style lang="scss" scoped>
.servings-actions {
  grid-area: servings-actions;
  display: flex;
  flex-direction: column;
  flex: 0 0 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-left: 1.5rem;
  }
}
</style>