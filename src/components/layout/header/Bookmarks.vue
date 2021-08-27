<template>
  <div class="bookmarks">
    <Item v-for="item in items" :key="item.recipe_id" :item="item" />
  </div>
</template>

<script>
import Item from "@/components/layout/search-list/Item";

export default {
  name: "Bookmarks",
  components: {Item},
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.bookmarks {}
</style>