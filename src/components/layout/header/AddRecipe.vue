<template>
  <Modal :opened="isOpen" @onclose="closeModal">
    <div class="items">
      <AddRecipeBox title="recipe data">
        <AddRecipeItem title="Title"/>
        <AddRecipeItem title="URL"/>
        <AddRecipeItem title="Image URL"/>
        <AddRecipeItem title="Publisher"/>
        <AddRecipeItem title="Prep Time"/>
        <AddRecipeItem title="Servings"/>
      </AddRecipeBox>
      <AddRecipeBox title="ingredients">
        <AddRecipeItem title="Ingredient"/>
        <AddRecipeItem title="Ingredient"/>
        <AddRecipeItem title="Ingredient"/>
        <AddRecipeItem title="Ingredient"/>
        <AddRecipeItem title="Ingredient"/>
        <AddRecipeItem title="Ingredient"/>
      </AddRecipeBox>
    </div>
    <div class="action">
      <AppButton title="Upload (Not available yet)" disabled>
        <UploadIcon />
      </AppButton>
    </div>
  </Modal>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import Modal from "@/components/UI/Modal";
import AddRecipeBox from "@/components/layout/header/AddRecipeBox";
import AddRecipeItem from "@/components/layout/header/AddRecipeItem";
import AppButton from "@/components/UI/buttons/AppButton";
import UploadIcon from "@/components/UI/icons/UploadIcon";

export default {
  name: "AddRecipe",
  components: {UploadIcon, AppButton, AddRecipeItem, AddRecipeBox, Modal},
  setup() {
    const {dispatch, getters} = useStore()

    const isOpen = computed(() => getters['isAddRecipeOpened'])
    const closeModal = () => dispatch('toggleAddRecipe')

    return {
      isOpen,
      closeModal
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  padding: 2rem 2rem;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
}
.action {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>