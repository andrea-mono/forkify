<template>
  <div class="mobile-menu">
    <transition name="fade" mode="out-in">
      <svg v-if="!isOpened"
           xmlns="http://www.w3.org/2000/svg"
           aria-hidden="true"
           role="img"
           id="footer-sample-full"
           width="3.2rem"
           height="3.2rem"
           preserveAspectRatio="xMidYMid meet"
           viewBox="0 0 24 24"
           @click="toggle"
      >
        <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"></path>
      </svg>
      <svg v-else
           xmlns="http://www.w3.org/2000/svg"
           aria-hidden="true"
           role="img"
           width="2.4rem"
           height="2.4rem"
           preserveAspectRatio="xMidYMid meet"
           viewBox="0 0 64 64"
           @click="toggle">
        <path
            d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
            fill="currentColor"></path>
      </svg>
    </transition>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed} from "vue";

export default {
  name: "MobileMenuButton",
  setup() {
    const { getters, dispatch } = useStore()

    const isOpened = computed(() => getters.isOpened)

    const toggle = () => {
      dispatch('toggleMobileMenu')
    }

    return {
      isOpened,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  color: #574945;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  > svg {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
}

.fade-enter-active {
  animation: fade 150ms ease-in-out;
}

.fade-leave-active {
  animation: fade 150ms ease-in-out reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>