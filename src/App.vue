<template>
  <div class="container">
    <Header />
    <main>
      <SearchList v-if="isActive && !selectedRecipe || actualBreakpoint !== 'md'" />
      <Recipe v-if="!isActive || selectedRecipe || actualBreakpoint !== 'md'"/>
    </main>
    <Error :shown="error" />
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

import Header from "@/components/layout/header/Header";
import SearchList from "@/components/layout/search-list/SearchList";
import Recipe from "@/components/layout/recipe/Recipe";
import Error from "@/components/UI/Error";

export default {
  name: 'App',
  components: {Error, Recipe, SearchList, Header},
  setup() {
    const {dispatch, getters} = useStore()

    const isActive = computed(() => getters['searchActive'])
    const selectedRecipe = computed(() => getters['recipes/getSelectedRecipe'])
    const actualBreakpoint = computed(() => getters['actualBreakpoint'])
    const error = computed(() => getters['anyError'])

    onMounted(() => {
      dispatch('setViewportSize', window.innerWidth)
      listenViewportSize()
      getBookmarks()
    })

    const listenViewportSize = () => {
      window.addEventListener('resize', () => dispatch('setViewportSize', window.innerWidth))
    }

    const getBookmarks = () => {
      dispatch('bookmarks/checkBookmarks')
    }

    return {
      isActive,
      selectedRecipe,
      actualBreakpoint,
      error
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    background: linear-gradient(to right bottom,#fbdb89,#f48982) no-repeat;
    background-size: cover;
    overflow-x: hidden;

    .container {
      max-width: 1200px;
      margin: auto;

      main {
        min-height: calc(100vh - 100px);
        display: flex;

        @media screen and (min-width: 1024px) {
          min-height: 1070px;
        }
      }

      @media screen and (min-width: 1023px) {
        border-radius: .8rem;
        overflow: hidden;
      }
    }

    @media screen and (min-width: 1023px) {
      padding: 8rem 0;
    }
  }
}

</style>
