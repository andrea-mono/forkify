export default {
    toggleMobileMenu({commit}) {
        commit('toggleMobileMenu')
    },
    toggleAddRecipe({commit}) {
        commit('toggleAddRecipe')
    },
    toggleSearchActive({commit}, value) {
        commit('toggleSearchActive', value)
    },
    setViewportSize({commit}, width) {
        commit('setViewportSize', width)
    },
    setError({commit}, error) {
        commit('setError', error)
    }
}
