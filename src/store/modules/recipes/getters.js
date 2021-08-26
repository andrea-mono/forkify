export default {
    paginatedResults(state) {
        const { recipes, currentPage, limit } = state

        if (!recipes) {
            return
        }

        return recipes.recipes.slice((currentPage - 1) * limit, currentPage * limit)
    },
    getResultsLength(state) {
        return state.recipes.length > 0
    },
    getSelectedRecipe(state) {
        return state.selectedRecipe
    },
    getCurrentPage(state) {
        return state.currentPage
    },
    getTotalPages(state) {
        return state.totalPages
    },
    anyError(state) {
        return state.error
    },
    isLoading(state) {
        return state.isLoading
    }
}