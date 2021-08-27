export default {
    setBookmarks(state, bookmarks) {
        state.bookmarks = JSON.parse(bookmarks)
    },
    addBookmark(state, bookmark) {
        state.bookmarks.unshift(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    },
    removeBookmark(state, bookmark) {
        state.bookmarks = state.bookmarks.filter(b => b.recipe_id !== bookmark.recipe_id)
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    },
    setMobileBookmarks(state, value) {
        state.isMobileMenuActive = value
    }
}