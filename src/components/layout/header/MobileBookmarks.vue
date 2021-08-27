<template>
  <teleport to="body">
    <transition name="slide">
      <div v-if="isActive" class="mobile-bookmarks">
        <div class="heading">
          <h2>My Bookmarks</h2>
          <TimesIcon @click="closeMobileBookmarks" />
        </div>
        <AlertMessage v-if="!items.length" text="No bookmarks yet. Find a nice recipe and bookmark it ;)" />
        <div v-else>
          <Item v-for="item in items" :key="item.recipe_id" :item="item" @click="openBookmark" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import Item from "@/components/layout/search-list/Item";
import AlertMessage from "@/components/UI/AlertMessage";
import TimesIcon from "@/components/UI/icons/TimesIcon";

export default {
  name: "MobileBookmarks",
  components: {TimesIcon, AlertMessage, Item},
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup() {
    const {dispatch, getters} = useStore()
    const isActive = computed(() => getters['bookmarks/isMobileMenuActive'])

    const closeMobileBookmarks = () => {
      dispatch('bookmarks/closeMobileBookmarks')
    }

    const openBookmark = () => {
      dispatch('bookmarks/closeMobileBookmarks')
      dispatch('toggleMobileMenu')
    }

    return {
      isActive,
      closeMobileBookmarks,
      openBookmark
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-bookmarks {
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fff;
  width: 100%;
  height: 100%;

  > .heading {
    display: flex;
    justify-content: space-between;
    padding: 4rem 2rem;

    > h2 {
      font-size: 2rem;
      color: #574945;
      text-transform: uppercase;
      text-align: center;
      margin-left: 1rem;
    }

    > svg {
      cursor: pointer;
    }
  }

  &.slide-enter-active {
    animation: slide 300ms ease-in-out;
  }
  &.slide-leave-active {
    animation: slide 300ms ease-in-out reverse;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>