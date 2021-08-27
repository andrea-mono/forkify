<template>
  <label>
    <span v-text="title"></span>
    <AppTextbox secondary />
  </label>
</template>

<script>
import AppTextbox from "@/components/UI/AppTextbox";

export default {
  name: "AddRecipeItem",
  components: {AppTextbox},
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  > span {
    margin-bottom: .5rem;
    display: block;

    @media screen and (min-width: 1024px) {
      flex: 0 0 100px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
}
</style>