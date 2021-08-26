import axios from "axios";

export default {
    async search({commit, state}, value) {
        try {
            state.error ? commit('setError', false) : null

            commit('changeCurrentPage', 1)
            commit('setLoading')
            commit('setRecipes', await axios.get(`${process.env.VUE_APP_API_BASE_URL}search?q=${value}`))
            commit('setLoading', false)
            commit('setTotalPages')
        }
        catch (e) {
            console.error(e)
            commit('setRecipes', [])
            commit('setLoading', false)
            commit('setError')
        }
    },
    setCurrentRecipe({commit}, id) {
        commit('setCurrentRecipe', id)
    },
    changeCurrentPage({commit}, page) {
        commit('changeCurrentPage', page)
    }
}
