<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="opened" class="overlay" @click="handleEvent"></div>
    </transition>
    <transition name="slide">
      <div v-if="opened" class="modal">
        <div class="heading">
          <h2 v-text="title"></h2>
          <TimesIcon @click="handleEvent"/>
        </div>
        <div class="content">
          <slot/>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import {onUpdated} from "vue";

import TimesIcon from "@/components/UI/icons/TimesIcon";

export default {
  name: "Modal",
  components: {TimesIcon},
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: false
    }
  },
  emits: ['onclose'],
  setup(props, {emit}) {
    onUpdated(() => props.opened
                            ? document.querySelector('body').style.overflowY = 'hidden'
                            : document.querySelector('body').style.overflowY = 'auto')

    const handleEvent = () => emit('onclose')

    return {
      handleEvent
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;

  &.fade-enter-active {
    animation: fade 200ms ease;
  }
  &.fade-leave-active {
    animation: fade 200ms ease reverse;
    animation-delay: 300ms;
  }

  @media screen and (min-width: 1024px) {
    &.fade-enter-active {
      animation: fade 200ms ease;
    }
    &.fade-leave-active {
      animation: fade 200ms ease reverse;
    }
  }
}
.modal {
  position: fixed;
  top: 0;
  z-index: 30;
  background: #fff;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding: 2rem 0;
  overflow-y: auto;

  .heading {
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;

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
  .content {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2.5rem;
  }

  &.slide-enter-active {
    animation: slide-sm 300ms ease-in-out;
  }
  &.slide-leave-active {
    animation: slide-sm 300ms ease-in-out reverse;
  }

  @media screen and (min-width: 1024px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    border-radius: 1rem;

    &.slide-enter-active {
      animation: slide-lg 300ms ease-in-out;
    }
    &.slide-leave-active {
      animation: slide-lg 300ms ease-in-out reverse;
    }
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-sm {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0);
  }
}
@keyframes slide-lg {
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>