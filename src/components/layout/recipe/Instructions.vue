<template>
  <div class="instructions">
    <h2>how to cook it</h2>
    <Text size="xl">
      This recipe was carefully designed and tested by <strong v-text="publisher"></strong>. Please check out directions at their website.
    </Text>
    <AppButton :url="url" title="directions" reversed>
      <ArrowIcon right />
    </AppButton>
  </div>
</template>

<script>
import Text from "@/components/UI/Text";
import AppButton from "@/components/UI/AppButton";
import ArrowIcon from "@/components/UI/icons/ArrowIcon";

export default {
  name: "Instructions",
  components: {ArrowIcon, AppButton, Text},
  props: {
    publisher: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.instructions {
  color: #918581;
  padding: 4rem 4rem 2rem 4rem;
  text-align: center;

  > h2 {
    font-size: 1.9rem;
    color: #f38e82;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 3rem;
  }

  > button, a {
    margin: 4rem auto;
  }

  @media screen and (min-width: 768px) {
    padding: 4rem 10rem 1rem 10rem;
  }
}
</style>