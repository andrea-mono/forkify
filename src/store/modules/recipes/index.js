import mutations from "@/store/modules/recipes/mutations";
import actions from "@/store/modules/recipes/actions";
import getters from "@/store/modules/recipes/getters";

const recipes = {
    namespaced: true,
    state: {
        recipes: null,
        error: false,
        isLoading: false
    },
    mutations,
    actions,
    getters
}

export default recipes