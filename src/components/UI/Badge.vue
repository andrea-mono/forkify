<template>
  <transition name="pop">
    <div v-if="length" class="badge" :class="{ xs: length > 9 }">
      <span v-text="length > 9 ? '9+' : length" :class="{ xs: length > 9 }"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Badge",
  props: {
    length: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.badge {
  position: absolute;
  top: -6px;
  right: -2px;
  font-size: .9rem;
  color: #fff;
  background: linear-gradient(to right bottom, #fbdb89, #f48982);
  padding: .2rem .5rem;
  border-radius: 50%;

  > span {
    &.xs {
      font-size: .7rem;
    }
  }

  &.xs {
    padding: .2rem .3rem;
  }

  &.pop-enter-active {
    animation: popIn 500ms ease-in-out;
  }
  &.pop-leave-active {
    animation: popIn 500ms ease-in-out reverse;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
   }
}
</style>