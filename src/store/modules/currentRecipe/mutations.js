export default {
    setRecipe(state, recipe) {
        recipe ? state.recipe = recipe.data.recipe : state.recipe = recipe
    },
    setLoading(state, value = true) {
        state.isLoading = value
    }
}