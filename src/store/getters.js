export default {
    isOpened(state) {
        return state.mobileMenuOpened
    },
    isAddRecipeOpened(state) {
        return state.addRecipeOpened
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
}