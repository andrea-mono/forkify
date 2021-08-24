<template>
  <div v-bind="$attrs" class="flex">
    <nav-button title="Add Recipe">
      <AddRecipeIcon/>
    </nav-button>
    <nav-button title="Bookmarks" dropdown>
      <BookmarksIcon/>
      <template v-slot:dropdown-content>
        <NoBookmarks />
      </template>
    </nav-button>
  </div>
</template>

<script>
import NavButton from "@/components/UI/NavButton";
import BookmarksIcon from "@/components/UI/BookmarksIcon";
import AddRecipeIcon from "@/components/UI/AddRecipeIcon";
import NoBookmarks from "@/components/layout/header/NoBookmarks";

export default {
  name: "Actions",
  components: {NoBookmarks, AddRecipeIcon, BookmarksIcon, NavButton}
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>