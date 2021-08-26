import axios from "axios";

export default {
    async loadRecipe({commit}, id) {
        try {
            commit('setLoading')
            commit('setRecipe', await axios.get(`${process.env.VUE_APP_API_BASE_URL}get?rId=${id}`))
            commit('setLoading', false)
        }
        catch (e) {
            console.error(e)
        }
    },
    resetRecipe({commit}) {
        commit('setRecipe', null)
    }
}