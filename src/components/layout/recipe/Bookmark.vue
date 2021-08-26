<template>
  <div class="bookmark">
    <AppButton rounded-full @click="isActive = !isActive">
      <BookmarksIcon color="secondary" :active="isActive"/>
    </AppButton>
  </div>
</template>

<script>
import {ref} from "vue";

import AppButton from "@/components/UI/buttons/AppButton";
import BookmarksIcon from "@/components/UI/icons/BookmarksIcon";

export default {
  name: "Bookmark",
  components: {BookmarksIcon, AppButton},
  setup() {
    const isActive = ref(false)

    return {
      isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmark {
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
}
</style>