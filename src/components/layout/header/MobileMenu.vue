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
$height: 250px;

.mobile-menu {
  background: #faf9f9;
  width: 100%;
  height: $height;
  overflow: hidden;

  > .inner-content {
    height: 100%;
    padding: 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 640px) {
      padding: 6rem 3rem;
    }
  }

  .actions {
    padding-top: 2rem;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
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
    height: $height;
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