<template>
  <div class="actions">
    <div class="info">
      <Time :minutes="recipe.time" />
      <Servings :servings="recipe.servings" />
    </div>
    <ServingsActions />
    <Bookmark :id="recipe.recipe_id" @save="handleSave" />
  </div>
</template>

<script>
import {useStore} from "vuex";

import Time from "@/components/layout/recipe/Time";
import Servings from "@/components/layout/recipe/Servings";
import ServingsActions from "@/components/layout/recipe/ServingsActions";
import Bookmark from "@/components/layout/recipe/Bookmark";

export default {
  name: "Actions",
  components: {Bookmark, ServingsActions, Servings, Time},
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {dispatch} = useStore()

    const handleSave = () => {
      !checkBookmarksExists() ? dispatch('bookmarks/addBookmark', props.recipe) : dispatch('bookmarks/removeBookmark', props.recipe)
    }

    const checkBookmarksExists = () => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
      const { recipe_id } = props.recipe

      return bookmarks ? bookmarks.find(b => b.recipe_id === recipe_id) : false
    }

    return {
      handleSave
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8rem 1rem 4rem 1rem;

  .info {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      height: auto;
      flex: 0 0 300px;
      flex-direction: row;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 8rem 8rem 4rem 8rem;
  }
}
</style>