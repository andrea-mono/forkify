import axios from "axios";

export default {
    async loadRecipe({commit, dispatch}, id) {
        try {
            commit('setLoading')
            commit('setRecipe', await axios.get(`${process.env.VUE_APP_API_BASE_URL}get?rId=${id}`))
            commit('setLoading', false)
            dispatch('addTime')
            dispatch('convertIngredients')
        }
        catch (e) {
            console.error(e)
            dispatch('setError', true, { root: true })
            commit('setLoading', false)
        }
    },
    addTime({commit}) {
        const times = [30, 45, 60, 120]
        commit('addTime',  times[Math.floor(Math.random() * 4)])
    },
    convertIngredients({commit}) {
        commit('convertIngredients')
    },
    increaseServings({commit}) {
        commit('increaseServings')
    },
    decreaseServings({commit}) {
        commit('decreaseServings')
    },
    updateIngredients({commit}, action) {
        commit(action)
    },
    resetRecipe({commit}) {
        commit('setRecipe', null)
    }
}