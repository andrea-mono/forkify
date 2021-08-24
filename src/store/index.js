import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenuOpened: false,
  },
  mutations: {
    toggleMobileMenu(state) {
      state.mobileMenuOpened = !state.mobileMenuOpened
    }
  },
  actions: {
    toggleMobileMenu({commit}) {
      commit('toggleMobileMenu')
    }
  },
  getters: {
    isOpened(state) {
      return state.mobileMenuOpened
    }
  },
  modules: {
  }
})
