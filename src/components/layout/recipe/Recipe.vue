<template>
  <div class="recipe">
    <Message v-if="!recipe && !isLoading" text="Start by searching for a recipe or an ingredient. Have fun!" />
    <RecipeSkeleton v-if="isLoading" />
    <transition name="fade-in">
      <div v-if="recipe && !isLoading" class="content">
        <Banner :asset="recipe.image_url" :title="recipe.title" />
        <Actions />
        <Ingredients :ingredients="recipe.ingredients" />
        <Instructions :publisher="recipe.publisher" :url="recipe.source_url" />
      </div>
    </transition>
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

import Message from "@/components/UI/Message";
import RecipeSkeleton from "@/components/layout/recipe/RecipeSkeleton";
import Banner from "@/components/layout/recipe/Banner";
import Actions from "@/components/layout/recipe/Actions";
import Ingredients from "@/components/layout/recipe/Ingredients";
import Instructions from "@/components/layout/recipe/Instructions";

export default {
  name: "Recipe",
  components: {Instructions, Ingredients, Actions, Banner, RecipeSkeleton, Message},
  setup() {
    const {dispatch, getters} = useStore()

    const recipe = computed(() => getters['currentRecipe/getRecipe'])
    const isLoading = computed(() => getters['currentRecipe/isLoading'])

    onMounted(() => {
      const id = getId()
      id ? dispatch('currentRecipe/loadRecipe', id) : null
    })

    const getId = () => {
      const { pathname } = window.location

      if (!pathname.includes('recipe')) {
        return
      }

      return pathname.split('/')[2]
    }

    return {
      recipe,
      isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.recipe {
  background: #f9f5f3;
  flex: 1;

  .fade-in-enter-active {
    animation: fadeIn 800ms ease;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>