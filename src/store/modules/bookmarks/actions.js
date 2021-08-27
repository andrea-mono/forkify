export default {
    addBookmark({commit}, bookmark) {
        commit('addBookmark', bookmark)
    },
    removeBookmark({commit}, bookmark) {
        commit('removeBookmark', bookmark)
    },
    checkBookmarks({commit}) {
        const bookmarks = localStorage.getItem('bookmarks')
        bookmarks ? commit('setBookmarks', bookmarks) : null
    },
    openMobileBookmarks({commit}) {
        commit('setMobileBookmarks', true)
    },
    closeMobileBookmarks({commit}) {
        commit('setMobileBookmarks', false)
    }
}