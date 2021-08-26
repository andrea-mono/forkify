<template>
  <div class="recipe-skeleton">
    <SkeletonLoader h="320px"/>
    <SkeletonLoader h="100px"/>
    <div class="list">
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
      <SkeletonLoader h="10px"/>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/UI/SkeletonLoader";
export default {
  name: "RecipeSkeleton",
  components: {SkeletonLoader}
}
</script>

<style lang="scss" scoped>
.recipe-skeleton {
  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 2rem 3rem;
    
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>