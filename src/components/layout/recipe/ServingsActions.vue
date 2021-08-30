<template>
  <div class="servings-actions">
    <Increase @increase="add()" />
    <Decrease @decrease="remove()" />
  </div>
</template>

<script>
import {useStore} from "vuex";

import Increase from "@/components/layout/recipe/Increase";
import Decrease from "@/components/layout/recipe/Decrease";
import {computed} from "vue";

export default {
  name: "ServingsActions",
  components: {Decrease, Increase},
  setup() {
    const {getters, dispatch} = useStore()

    const servings = computed(() => getters['currentRecipe/getServings'])

    const add = () => {
      dispatch('currentRecipe/increaseServings')
      dispatch('currentRecipe/updateIngredients', 'increaseIngredients')
    }

    const remove = () => {
      if (servings.value === 1) {
        return
      }

      dispatch('currentRecipe/decreaseServings')
      dispatch('currentRecipe/updateIngredients', 'decreaseIngredients')
    }

    return {
      add,
      remove
    }
  }
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