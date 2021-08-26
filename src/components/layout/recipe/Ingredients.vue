<template>
  <div class="ingredients">
    <h2>recipe ingredients</h2>
    <Ingredient v-for="ingredient in ingredients" :key="ingredient" :text="ingredient" />
  </div>
</template>

<script>
import Ingredient from "@/components/layout/recipe/Ingredient";
export default {
  name: "Ingredients",
  components: {Ingredient},
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ingredients {
  background: #f2efee;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;
  padding: 4rem 4rem;

  > h2 {
    font-size: 1.9rem;
    color: #f38e82;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
      grid-column: 1 / span 2;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 4rem 8rem;
  }
}
</style>