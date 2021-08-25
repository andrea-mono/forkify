<template>
  <div v-if="disableAll" class="controllers">
    <Controller v-if="disablePrev" :text="`Page ${currentPage - 1}`" @handle="changePage(currentPage - 1)" />
    <Controller v-if="disableNext" class="end" :text="`Page ${currentPage + 1}`" reversed @handle="changePage(currentPage + 1)" />
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import Controller from "@/components/layout/search-list/Controller";

export default {
  name: "Controllers",
  components: {Controller},
  setup() {
    const {dispatch, getters} = useStore()

    const currentPage = computed(() => getters['recipes/getCurrentPage'])
    const totalPages = computed(() => getters['recipes/getTotalPages'])
    const disableAll = computed(() => totalPages.value !== 1)
    const disablePrev = computed(() => currentPage.value !== 1)
    const disableNext = computed(() => currentPage.value !== totalPages.value)

    const changePage = (page) => {
      dispatch('recipes/changeCurrentPage', page)
    }

    return {
      currentPage,
      disableAll,
      disablePrev,
      disableNext,
      changePage
    }
  }
}
</script>

<style scoped>
.controllers {
  width: 100%;
  display: flex;
}
.end {
  margin-left: auto;
}
</style>