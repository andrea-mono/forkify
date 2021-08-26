<template>
  <div class="search-item" :class="{ active: isActive }" @click="loadRecipe(item.recipe_id)">
    <figure>
      <img :src="item.image_url" class="thumbnail" :alt="item.title">
    </figure>
    <div class="info">
      <h3 class="title" v-text="item.title"></h3>
      <Text size="sm" class="publisher" v-text="item.publisher"></Text>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import Text from "@/components/UI/Text";

export default {
  name: "SearchItem",
  components: {Text},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {getters, dispatch} = useStore()

    const recipe = computed(() => getters['currentRecipe/getRecipe'])
    const selectedRecipe = computed(() => getters['recipes/getSelectedRecipe'])
    const isActive = computed(() => props.item.recipe_id === selectedRecipe.value)

    const loadRecipe = (id) => {
      window.history.replaceState(null, null, `/recipe/${id}`);
      dispatch('recipes/setCurrentRecipe', id)
      dispatch('currentRecipe/loadRecipe', id)
    }

    return {
      recipe,
      isActive,
      loadRecipe
    }
  }
}
</script>

<style lang="scss" scoped>
.search-item {
  padding: 2rem 3rem;
  cursor: pointer;
  display: flex;
  transition: all 200ms ease;

  figure {
    position: relative;
    flex: 0 0 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    display: block;
    pointer-events: none;

    > .thumbnail {
      width: 100%;
      height: 100%;
    }

    &:after {
      position: absolute;
      top: 0;
      background: linear-gradient(to right bottom,#fbdb89,#f48982);
      width: 100%;
      height: 100%;
      content: "";
      opacity: 50%;
      display: block;
    }
  }

  .info {
    flex: 1;
    padding: 1rem 2rem;
    pointer-events: none;

    > .title {
      font-size: 1.3rem;
      color: #f38e82;
      width: 200px;
      text-transform: uppercase;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;

      @media screen and (min-width: 768px) {
        width: 100%;
      }

      @media screen and (min-width: 1024px) {
        width: 250px;
      }
    }

    > .publisher {
      color: #918581;
      text-transform: uppercase;
      margin-top: .8rem;
    }
  }

  &.active {
    background: #ece8e8;
  }

  &:not(.active) {
    &:hover {
      background: #f9f5f3;
      transform: translateY(-3px);
    }
  }
}
</style>