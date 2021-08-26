<template>
  <nav class="nav">
    <Logo />
    <MobileMenuButton />
    <Menu />
  </nav>
</template>

<script>
import Logo from "@/components/UI/Logo";
import MobileMenuButton from "@/components/UI/buttons/MobileMenuButton";
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
}
</style>