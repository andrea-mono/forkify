<template>
  <div v-bind="$attrs" class="flex">
    <nav-button title="Add Recipe">
      <AddRecipeIcon/>
    </nav-button>
    <nav-button title="Bookmarks" dropdown>
      <BookmarksIcon/>
    </nav-button>
  </div>
</template>

<script>
import NavButton from "@/components/UI/NavButton";
import BookmarksIcon from "@/components/UI/BookmarksIcon";
import AddRecipeIcon from "@/components/UI/AddRecipeIcon";

export default {
  name: "Actions",
  components: {AddRecipeIcon, BookmarksIcon, NavButton}
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>