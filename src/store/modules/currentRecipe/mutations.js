export default {
    setRecipe(state, recipe) {
        recipe ? state.recipe = recipe.data.recipe : state.recipe = recipe
    },
    setLoading(state, value = true) {
        state.isLoading = value
    },
    addTime(state, time) {
        state.recipe = {
            ...state.recipe,
            time: time,
            servings: 4
        }
    },
    convertIngredients(state) {
        state.recipe.ingredients = state.recipe.ingredients.map(ing => {
            let qty = ing.match(/\d+([/]\d+)?/g)
            const ingredient = qty ? ing.slice(qty[0].length + 1) : ing

            // transform fractional numbers to decimal
            if (qty && qty[0].includes('/')) {
                qty = qty[0].split('/')
                qty = +qty[0] / +qty[1]
            }

            return {
                qty: +qty,
                ingredient
            }
        })
    },
    increaseIngredients(state) {
        state.recipe.ingredients.forEach(ing => {
            ing.qty = (ing.qty * state.recipe.servings) / (state.recipe.servings - 1)
        })
    },
    decreaseIngredients(state) {
        state.recipe.ingredients.forEach(ing => {
            ing.qty = (ing.qty * state.recipe.servings) / (state.recipe.servings + 1)
        })
    },
    increaseServings(state) {
        const { servings } = state.recipe
        state.recipe.servings = servings + 1
    },
    decreaseServings(state) {
        const { servings } = state.recipe
        servings > 1 ? state.recipe.servings = servings - 1 : null
    }
}