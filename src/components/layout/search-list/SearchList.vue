<template>
  <div class="search_list">
    <SearchItemSkeleton v-if="isLoading" :repeat="5" />
    <div class="recipes" v-else-if="recipes">
      <SearchItem v-for="recipe in recipes" :key="recipe.recipe_id" :item="recipe" />
      <Pagination />
    </div>
    <AlertMsg v-if="error" text="No recipes found for your query! Please try again ;)" />
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import AlertMsg from "@/components/UI/AlertMsg";
import SearchItem from "@/components/layout/search-list/SearchItem";
import SearchItemSkeleton from "@/components/layout/search-list/SearchItemSkeleton";
import Pagination from "@/components/layout/search-list/Pagination";

export default {
  name: "SearchList",
  components: {Pagination, SearchItemSkeleton, SearchItem, AlertMsg},
  setup() {
    const {getters} = useStore()

    const recipes = computed(() => {
      let data = getters['recipes/paginatedResults']

      if (!data) {
        return
      }

      return data
    })

    const error = computed(() => getters['recipes/anyError'])
    const isLoading = computed(() => getters['recipes/isLoading'])

    return {
      recipes,
      error,
      isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.search_list {
  background: #fff;
  min-height: calc(100vh - 100px);
  flex: 1;
  padding: 2.5rem 0;

  .recipes {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    min-height: auto;
    flex: 0 0 400px;
  }
}
</style>