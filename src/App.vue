<template>
  <div class="container">
    <Header />
    <main>
      <SearchList v-if="isActive || actualBreakpoint !== 'md'" />
      <Recipe v-if="!isActive || actualBreakpoint !== 'md'"/>
    </main>
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

import Header from "@/components/layout/header/Header";
import SearchList from "@/components/layout/search-list/SearchList";
import Recipe from "@/components/layout/Recipe";

export default {
  name: 'App',
  components: {Recipe, SearchList, Header},
  setup() {
    const {dispatch, getters} = useStore()

    const isActive = computed(() => getters['searchActive'])
    const actualBreakpoint = computed(() => getters['actualBreakpoint'])

    const listenViewportSize = () => {
      window.addEventListener('resize', () => dispatch('setViewportSize', window.innerWidth))
    }

    onMounted(() => {
      dispatch('setViewportSize', window.innerWidth)

      listenViewportSize()
    })

    return {
      isActive,
      actualBreakpoint
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
    background: linear-gradient(to right bottom,#fbdb89,#f48982);

    .container {
      max-width: 1200px;
      margin: auto;

      main {
        min-height: 1070px;
        display: flex;
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
