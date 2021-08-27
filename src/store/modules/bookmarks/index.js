import mutations from "@/store/modules/bookmarks/mutations";
import actions from "@/store/modules/bookmarks/actions";
import getters from "@/store/modules/bookmarks/getters";

const bookmarks = {
    namespaced: true,
    state: {
        bookmarks: [],
        isMobileMenuActive: false
    },
    mutations,
    actions,
    getters
}

export default bookmarks