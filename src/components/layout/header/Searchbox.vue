<template>
  <form class="search" :class="w">
    <AppTextbox title="Search over 1,000,000 recipes..." />
    <AppButton title="Search" class="right">
      <SearchIcon />
    </AppButton>
  </form>
</template>

<script>
import AppTextbox from "@/components/UI/AppTextbox";
import AppButton from "@/components/UI/AppButton";
import SearchIcon from "@/components/UI/SearchIcon";

export default {
  name: "Searchbox",
  components: {SearchIcon, AppButton, AppTextbox},
  props: {
    w: {
      type: String,
      default: "full"
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;

  &.half {
    width: 50%;
  }

  &.full {
    width: 100%;
  }

  .right {
    position: absolute;
    right: 0;
  }
}
</style>