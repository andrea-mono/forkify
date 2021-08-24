<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/layout/header/Header";

export default {
  name: 'App',
  components: {Header}
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
}

body {
  height: 100vh;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  background: linear-gradient(to right bottom,#fbdb89,#f48982);

  @media screen and (min-width: 1023px) {
    padding-top: 8rem;
  }
}

.container {
  max-width: 1200px;
  margin: auto;
}
</style>
