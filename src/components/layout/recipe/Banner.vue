<template>
  <figure>
    <ArrowIcon size="md" @click="back" />
    <img :src="asset" :alt="title">
    <h1>
      <span v-text="title"></span>
    </h1>
  </figure>
</template>

<script>
import {useStore} from "vuex";

import ArrowIcon from "@/components/UI/icons/ArrowIcon";

export default {
  name: "Banner",
  components: {ArrowIcon},
  props: {
    asset: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const {dispatch} = useStore()

    const back = () => {
      window.history.replaceState(null, null, '/');
      dispatch('recipes/setCurrentRecipe', null)
      dispatch('currentRecipe/resetRecipe')
    }

    return {
      back
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  position: relative;
  width: 100%;
  height: 320px;

  > .arrow {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    color: #fff;
    display: block;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > h1 {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 2;
    font-size: 2.7rem;
    color: #fff;
    width: 70%;
    line-height: 5rem;
    text-transform: uppercase;
    text-align: center;
    transform: translate(-50%, 20%) skewY(-6deg);

    > span {
      background: linear-gradient(to right bottom,#fbdb89,#f48982);
      padding: 1rem 2rem;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }

    @media screen and (min-width: 640px) {
      font-size: 3.4rem;
      line-height: 5.8rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 4rem;
      line-height: 6.7rem;
    }
  }

  &:after {
    position: absolute;
    top: 0;
    background: linear-gradient(to right bottom,#fbdb89,#f48982);
    width: 100%;
    height: 100%;
    content: "";
    opacity: .5;
    display: block;
  }
}
</style>