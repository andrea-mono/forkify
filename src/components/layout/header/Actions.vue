<template>
  <div v-bind="$attrs" class="flex">
    <nav-button title="Add Recipe">
      <AddRecipeIcon/>
    </nav-button>
    <nav-button title="Bookmarks" dropdown>
      <BookmarksIcon/>
      <template v-slot:dropdown-content>
        <AlertMsg text="No bookmarks yet. Find a nice recipe and bookmark it ;)" />
      </template>
    </nav-button>
  </div>
</template>

<script>
import NavButton from "@/components/UI/NavButton";
import BookmarksIcon from "@/components/UI/icons/BookmarksIcon";
import AddRecipeIcon from "@/components/UI/icons/AddRecipeIcon";
import AlertMsg from "@/components/UI/AlertMessage";

export default {
  name: "Actions",
  components: {AlertMsg, AddRecipeIcon, BookmarksIcon, NavButton}
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>