<template>
  <nav class="nav">
    <Logo />
    <MobileMenuButton />
    <Menu />
  </nav>
</template>

<script>
import Logo from "@/components/UI/Logo";
import MobileMenuButton from "@/components/UI/MobileMenuButton";
import Menu from "@/components/layout/header/Menu";

export default {
  name: "Nav",
  components: {Menu, MobileMenuButton, Logo}
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  height: 100px;
  background: #f9f5f3;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1023px) {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
}
</style>