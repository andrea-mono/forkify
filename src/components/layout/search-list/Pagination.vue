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
  justify-content: end;
  padding: 1rem 3rem;
}
</style>