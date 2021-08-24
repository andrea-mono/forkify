<template>
  <transition name="slide">
    <div v-show="isOpened" class="mobile-menu">
      <transition name="slide-right">
        <div v-show="isOpened" class="inner-content">
          <Searchbox/>
          <Actions class="actions"/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Searchbox from "@/components/layout/header/Searchbox";
import Actions from "@/components/layout/header/Actions";

import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: "MobileMenu",
  components: {Actions, Searchbox},
  setup() {
    const { getters } = useStore()

    const isOpened = computed(() => getters.isOpened)

    return {
      isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  background: #faf9f9;
  width: 100%;
  height: 200px;
  overflow: hidden;

  > .inner-content {
    height: 100%;
    padding: 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .actions {
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1023px) {
    display: none;
  }
}

.slide-enter-active {
  animation: slide 500ms;
}
.slide-leave-active {
  animation: slide 500ms reverse;
  animation-delay: 300ms;
}
.slide-right-enter-active {
  animation: slideLeft 500ms;
}
.slide-right-leave-active {
  animation: slideRight 500ms;
}

@keyframes slide {
  from {
    height: 0;
  }
  to {
    height: 200px;
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>