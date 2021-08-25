<template>
  <header id="header">
    <Nav />
    <MobileMenu />
  </header>
</template>

<script>
import Nav from "@/components/layout/header/Nav";
import MobileMenu from "@/components/layout/header/MobileMenu";

export default {
  name: "Header",
  components: {MobileMenu, Nav}
}
</script>

<style lang="scss" scoped>
header {
  position: relative;

  @media screen and (min-width: 1024px) {
    position: static;
  }
}
</style>