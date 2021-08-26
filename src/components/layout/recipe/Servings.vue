<template>
  <div class="servings">
    <PeopleIcon/>
    <Text size="lg">
      <strong class="text" v-text="servings"></strong>
      servings
    </Text>
  </div>
</template>

<script>
import PeopleIcon from "@/components/UI/icons/PeopleIcon";
import Text from "@/components/UI/Text";

export default {
  name: "Servings",
  components: {Text, PeopleIcon},
  props: {
    servings: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.servings {
  grid-area: servings;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  .text {
    margin-left: 1rem;
    display: inline-block;
  }
}
</style>