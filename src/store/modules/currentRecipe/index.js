import mutations from "@/store/modules/currentRecipe/mutations";
import actions from "@/store/modules/currentRecipe/actions";
import getters from "@/store/modules/currentRecipe/getters";

const currentRecipe = {
    namespaced: true,
    state: {
        recipe: null,
        isLoading: false
    },
    mutations,
    actions,
    getters
}

export default currentRecipe