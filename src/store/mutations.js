export default {
    toggleMobileMenu(state) {
        state.mobileMenuOpened = !state.mobileMenuOpened
    },
    toggleAddRecipe(state) {
        state.addRecipeOpened = !state.addRecipeOpened
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
    },
    setError(state, error = true) {
        state.error = error
    }
}