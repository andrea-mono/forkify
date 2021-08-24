<template>
  <div class="skeleton-container" v-for="n in repeat" :key="n">
    <SkeletonLoader w="50px" h="50px" rounded-full />
    <div class="inner">
      <SkeletonLoader />
      <SkeletonLoader w="55%" h="8px" />
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "@/components/UI/SkeletonLoader";
export default {
  name: "SearchItemSkeleton",
  components: {SkeletonLoader},
  props: {
    repeat: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton-container {
  padding: 2rem 3rem;
  display: flex;

  .inner {
    flex: 1;
    padding: 1rem 2rem;
  }
}
</style>