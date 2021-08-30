<template>
  <teleport to="body">
    <transition name="slide">
      <div v-if="shown" class="snackbar">
        <Text size="lg">{{ text }}</Text>
        <AppButton title="Close" secondary @click="close">
          <TimesIcon size="xs" />
        </AppButton>
      </div>
    </transition>
  </teleport>
</template>

<script>
import {onMounted} from "vue";
import {useStore} from "vuex";

import Text from "@/components/UI/Text";
import AppButton from "@/components/UI/buttons/AppButton";
import TimesIcon from "@/components/UI/icons/TimesIcon";

export default {
  name: "Error",
  components: {TimesIcon, AppButton, Text},
  props: {
    shown: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      default: "Sorry, something's wrong occurred."
    },
    disappearAfter: {
      type: Number,
      default: 4000
    }
  },
  setup(props) {
    const {dispatch} = useStore()

    onMounted(() => {
      setTimeout(() => {
        close()
      }, props.disappearAfter)
    })

    const close = () => dispatch('setError', false)

    return {
      close
    }
  }
}
</script>

<style lang="scss" scoped>
.snackbar {
  position: fixed;
  bottom: 0;
  color: #fff;
  width: 100%;
  background: #ed213a;
  background: -webkit-linear-gradient(to right, #ed213a, #93291e);
  background: linear-gradient(to right, #ed213a, #93291e);
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.slide-enter-active {
    animation: slide-sm 100ms linear;
  }
  &.slide-leave-active {
    animation: slide-sm 100ms linear reverse;
  }
  
  @media screen and (min-width: 1024px) {
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    border-radius: .5rem;
    box-shadow: 0 2px 5px #6a6868;
    padding: 1rem 3rem;

    .button {
      margin-left: 2rem;
    }

    &.slide-enter-active {
      animation: slide 100ms linear;
    }
    &.slide-leave-active {
      animation: slide 100ms linear reverse;
    }

  }
}

@keyframes slide {
  from {
    transform: translate(-50%, 200%);
  }
  to {
    transform: translate(-50%, 0);
  }
}

@keyframes slide-sm {
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0);
  }
}
</style>