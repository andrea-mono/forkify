export default {
    setRecipes(state, recipes) {
        state.recipes = recipes.data
    },
    setError(state, error = true) {
        state.error = error
    },
    setLoading(state, value = true) {
        state.isLoading = value
    }
}