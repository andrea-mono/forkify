<template>
  <div class="bookmark">
    <AppButton rounded-full @click="handleClick">
      <BookmarksIcon color="secondary" :active="isActive"/>
    </AppButton>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import AppButton from "@/components/UI/buttons/AppButton";
import BookmarksIcon from "@/components/UI/icons/BookmarksIcon";

export default {
  name: "Bookmark",
  components: {BookmarksIcon, AppButton},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props, {emit}) {
    const {getters} = useStore()

    const isActive = computed(() => getters['bookmarks/isActive'](props.id))

    const handleClick = () => {
      isActive.value = !isActive.value
      emit('save')
    }

    return {
      isActive,
      handleClick
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