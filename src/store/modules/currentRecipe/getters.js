export default {
    getRecipe(state) {
        return state.recipe
    },
    getServings(state) {
        return state.recipe.servings
    },
    isLoading(state) {
        return state.isLoading;
    }
}