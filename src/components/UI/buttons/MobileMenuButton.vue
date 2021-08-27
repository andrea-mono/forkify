<template>
  <div class="mobile-menu">
    <transition name="fade" mode="out-in">
      <BurgerIcon v-if="!isOpened" @click="toggle" />
      <TimesIcon v-else @click="toggle" />
    </transition>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed} from "vue";
import TimesIcon from "@/components/UI/icons/TimesIcon";
import BurgerIcon from "@/components/UI/icons/BurgerIcon";

export default {
  name: "MobileMenuButton",
  components: {BurgerIcon, TimesIcon},
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