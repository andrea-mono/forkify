export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.data
    },
    setCurrentRecipe(state, id) {
        state.selectedRecipe = id
    },
    setTotalPages(state) {
        state.totalPages = Math.ceil(state.recipes.count / state.limit)
    },
    setError(state, error = true) {
        state.error = error
    },
    setLoading(state, value = true) {
        state.isLoading = value
    },
    changeCurrentPage(state, page) {
        state.currentPage = page
    }
}