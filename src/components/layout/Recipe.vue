<template>
  <div class="recipe">
    <Message text="Start by searching for a recipe or an ingredient. Have fun!" />
  </div>
</template>

<script>
import Message from "@/components/UI/Message";

export default {
  name: "Recipe",
  components: {Message}
}
</script>

<style lang="scss" scoped>
.recipe {
  background: #f9f5f3;
  flex: 1;
}
</style>