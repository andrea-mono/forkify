<template>
  <form class="search" :class="w" @submit.prevent="onSubmit">
    <AppTextbox :input="search" title="Search over 1,000,000 recipes..." @refresh="handleValue" />
    <AppButton title="Search" class="right" :disabled="canSubmit">
      <SearchIcon />
    </AppButton>
  </form>
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";

import AppTextbox from "@/components/UI/AppTextbox";
import AppButton from "@/components/UI/AppButton";
import SearchIcon from "@/components/UI/SearchIcon";

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
  align-items: center;

  &.half {
    width: 50%;
  }

  &.full {
    width: 100%;
  }

  .right {
    position: absolute;
    right: 0;
  }
}
</style>