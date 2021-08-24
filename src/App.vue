<template>
  <div class="container">
    <Header />
    <main>
      <SearchList />
      <Recipe />
    </main>
  </div>
</template>

<script>
import Header from "@/components/layout/header/Header";
import SearchList from "@/components/layout/search-list/SearchList";
import Recipe from "@/components/layout/Recipe";

export default {
  name: 'App',
  components: {Recipe, SearchList, Header}
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
        display: flex;
      }
    }

    @media screen and (min-width: 1023px) {
      padding: 8rem 0;
    }
  }
}

</style>
