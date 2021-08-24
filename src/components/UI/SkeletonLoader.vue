<template>
  <div class="skeleton-loader" :style="style"></div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SkeletonLoader",
  props: {
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '15px'
    },
    roundedFull: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const style = computed(() => {
      let obj = {
        width: props.w,
        height: props.h
      }

      if (props.roundedFull) {
        obj = {
          ...obj,
          borderRadius: '50%'
        }
      }

      return obj
    })

    return {
      style
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton-loader {
  display: inline-block;
  width: 100%;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
    );
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>