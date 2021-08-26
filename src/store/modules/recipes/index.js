import mutations from "@/store/modules/recipes/mutations";
import actions from "@/store/modules/recipes/actions";
import getters from "@/store/modules/recipes/getters";

const recipes = {
    namespaced: true,
    state: {
        recipes: null,
        selectedRecipe: null,
        currentPage: 1,
        totalPages: 0,
        limit: 9,
        error: false,
        isLoading: false
    },
    mutations,
    actions,
    getters
}

export default recipes