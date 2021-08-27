<template>
  <div v-bind="$attrs" class="flex">
    <nav-button title="Add Recipe" @click="openAddRecipe">
      <AddRecipeIcon />
      <AddRecipe />
    </nav-button>
    <nav-button title="Bookmarks" dropdown v-on="enableEvent ? { click: openMobileBookmarks } : {}">
      <div class="bookmarks flex">
        <BookmarksIcon/>
        <Badge :length="bookmarks.length" />
      </div>
      <template v-slot:dropdown-content>
        <AlertMsg v-if="!bookmarks.length" text="No bookmarks yet. Find a nice recipe and bookmark it ;)" />
        <Bookmarks v-else :items="bookmarks" />
        <MobileBookmarks :items="bookmarks" />
      </template>
    </nav-button>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import NavButton from "@/components/UI/buttons/NavButton";
import BookmarksIcon from "@/components/UI/icons/BookmarksIcon";
import AddRecipeIcon from "@/components/UI/icons/AddRecipeIcon";
import AlertMsg from "@/components/UI/AlertMessage";
import Bookmarks from "@/components/layout/header/Bookmarks";
import Badge from "@/components/UI/Badge";
import MobileBookmarks from "@/components/layout/header/MobileBookmarks";
import AddRecipe from "@/components/layout/header/AddRecipe";

export default {
  name: "Actions",
  components: {AddRecipe, MobileBookmarks, Badge, Bookmarks, AlertMsg, AddRecipeIcon, BookmarksIcon, NavButton},
  setup() {
    const {dispatch, getters} = useStore()
    const bookmarks = computed(() => getters['bookmarks/getBookmarks'])
    const breakpoint = computed(() => getters['actualBreakpoint'])
    const enableEvent = computed(() => breakpoint.value === 'md')

    const openAddRecipe = () => dispatch('toggleAddRecipe')
    const openMobileBookmarks = () => dispatch('bookmarks/openMobileBookmarks')

    return {
      bookmarks,
      breakpoint,
      enableEvent,
      openAddRecipe,
      openMobileBookmarks
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmarks {
  position: relative;
}
.flex {
  display: flex;
}
</style>