import { createStore } from 'vuex'

import recipes from "@/store/modules/recipes";

export default createStore({
  state: {
    mobileMenuOpened: false,
    searchActive: false,
    actualViewport: null,
    breakPoints: {
      md: '1023'
    }
  },
  mutations: {
    toggleMobileMenu(state) {
      state.mobileMenuOpened = !state.mobileMenuOpened
    },
    toggleSearchActive(state, value = true) {
      !state.searchActive ? state.searchActive = value : null
    },
    setViewportSize(state, width) {
      let index = 0;

      state.actualViewport = Object.values(state.breakPoints).map(bp => {
        if (width < +bp) {
          return Object.keys(state.breakPoints)[index]
        }

        index++
      })
    }
  },
  actions: {
    toggleMobileMenu({commit}) {
      commit('toggleMobileMenu')
    },
    toggleSearchActive({commit}, value) {
      commit('toggleSearchActive', value)
    },
    setViewportSize({commit}, width) {
      commit('setViewportSize', width)
    }
  },
  getters: {
    isOpened(state) {
      return state.mobileMenuOpened
    },
    searchActive(state) {
      return state.searchActive
    },
    actualBreakpoint(state) {
      if (!state.actualViewport) {
        return
      }

      return state.actualViewport[0]
    }
  },
  modules: {
    recipes
  }
})
