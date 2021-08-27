<template>
  <div class="box">
    <h2 v-text="title"></h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AddRecipeBox",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  flex: 0 0 100%;
  margin-bottom: 3rem;

  > h2 {
    font-size: 2.2rem;
    color: #615551;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    flex: 1;
    padding: 2rem 3rem 0 3rem;
  }
}
</style>