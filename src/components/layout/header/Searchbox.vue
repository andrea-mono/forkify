<template>
  <form class="search" :class="w" @submit.prevent="onSubmit">
    <AppTextbox :input="search" title="Search over 1,000,000 recipes..." @refresh="handleValue" />
    <AppButton title="Search" class="search-btn" :disabled="canSubmit">
      <SearchIcon />
    </AppButton>
  </form>
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";

import AppTextbox from "@/components/UI/AppTextbox";
import AppButton from "@/components/UI/AppButton";
import SearchIcon from "@/components/UI/icons/SearchIcon";

export default {
  name: "Searchbox",
  components: {SearchIcon, AppButton, AppTextbox},
  props: {
    w: {
      type: String,
      default: "full"
    }
  },
  setup() {
    const {dispatch} = useStore()

    const search = ref('')

    const handleValue = (value) => {
      search.value = value
    }

    const canSubmit = computed(() => search.value && !search.value.replace(/\s/g, '').length) // not empty & not only whitespaces

    const onSubmit = () => {
      dispatch('toggleSearchActive')
      dispatch('recipes/setCurrentRecipe', null)
      dispatch('recipes/search', search.value)
      search.value = ''
    }

    return {
      search,
      handleValue,
      canSubmit,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  flex-wrap: wrap;

  &.half {
    width: 50%;
  }

  &.full {
    width: 100%;
  }

  .search-btn {
    width: 100%;
    margin-top: 1rem;
  }

  @media screen and (min-width: 640px) {
    align-items: center;
    flex-wrap: nowrap;

    .search-btn {
      position: absolute;
      right: 0;
      width: auto;
      margin-top: 0;
    }
  }
}
</style>