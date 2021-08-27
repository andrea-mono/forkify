<template>
  <Modal :opened="isActive && actualBreakpoint === 'md'" title="My bookmarks" @onclose="closeMobileBookmarks">
    <AlertMessage v-if="!items.length" text="No bookmarks yet. Find a nice recipe and bookmark it ;)" />
    <div class="items" v-else>
      <Item v-for="item in items" :key="item.recipe_id" :item="item" @click="openBookmark" />
    </div>
  </Modal>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import Item from "@/components/layout/search-list/Item";
import AlertMessage from "@/components/UI/AlertMessage";
import Modal from "@/components/UI/Modal";

export default {
  name: "MobileBookmarks",
  components: {Modal, AlertMessage, Item},
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup() {
    const {dispatch, getters} = useStore()
    const isActive = computed(() => getters['bookmarks/isMobileMenuActive'])
    const actualBreakpoint = computed(() => getters['actualBreakpoint'])

    const closeMobileBookmarks = () => dispatch('bookmarks/closeMobileBookmarks')

    const openBookmark = () => {
      dispatch('bookmarks/closeMobileBookmarks')
      dispatch('toggleMobileMenu')
    }

    return {
      isActive,
      actualBreakpoint,
      closeMobileBookmarks,
      openBookmark
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  flex: 1;
  margin: 2rem 0;
}
</style>