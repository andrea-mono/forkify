<template>
  <div class="pagination">
    <Controllers />
  </div>
</template>

<script>
import Controllers from "@/components/layout/search-list/Controllers";

export default {
  name: "Pagination",
  components: {Controllers}
}
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: auto;
  padding: 2rem 3rem 0 3rem;
}
</style>