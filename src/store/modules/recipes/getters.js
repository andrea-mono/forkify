export default {
    getSearchResults(state) {
        return state.recipes
    },
    getResultsLength(state) {
        return state.recipes.length > 0
    },
    anyError(state) {
        return state.error
    },
    isLoading(state) {
        return state.isLoading
    }
}