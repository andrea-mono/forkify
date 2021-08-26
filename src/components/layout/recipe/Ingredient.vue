<template>
  <div class="ingredient">
    <DoneIcon />
    <Text size="lg">{{ text }}</Text>
  </div>
</template>

<script>
import DoneIcon from "@/components/UI/icons/DoneIcon";
import Text from "@/components/UI/Text";

export default {
  name: "Ingredient",
  components: {Text, DoneIcon},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.ingredient {
  display: flex;
}
</style>