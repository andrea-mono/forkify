<template>
  <div class="menu">
    <Searchbox w="half" />
    <Actions class="ml-auto" />
  </div>
</template>

<script>
import Searchbox from "@/components/layout/header/Searchbox";
import Actions from "@/components/layout/header/Actions";

export default {
  name: "Menu",
  components: {Actions, Searchbox}
}
</script>

<style lang="scss" scoped>
.menu {
  display: none;

  @media screen and (min-width: 1023px) {
    display: flex;
    align-items: stretch;
    flex: 1;
    padding: 0 3rem;

    .ml-auto {
      margin-left: auto;
    }
  }
}
</style>