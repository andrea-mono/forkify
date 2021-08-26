export default {
    setRecipe(state, recipe) {
        state.recipe = recipe.data.recipe
    },
    setLoading(state, value = true) {
        state.isLoading = value
    }
}