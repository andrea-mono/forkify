import { createStore } from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

// modules
import recipes from "@/store/modules/recipes";
import currentRecipe from "@/store/modules/currentRecipe";
import bookmarks from "@/store/modules/bookmarks";

export default createStore({
  state: {
    mobileMenuOpened: false,
    addRecipeOpened: false,
    searchActive: false,
    actualViewport: null,
    breakPoints: {
      md: '1023'
    }
  },
  mutations,
  actions,
  getters,
  modules: {
    recipes,
    currentRecipe,
    bookmarks
  }
})
