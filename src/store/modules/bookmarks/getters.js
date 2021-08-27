export default {
    getBookmarks(state) {
        return state.bookmarks
    },
    isActive(state) {
        return id => state.bookmarks.some(b => b.recipe_id === id)
    },
    isMobileMenuActive(state) {
        return state.isMobileMenuActive
    }
}