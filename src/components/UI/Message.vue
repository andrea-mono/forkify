<template>
  <div class="message">
    <HappyIcon />
    <Text class="text" size="xl" v-text="text"></Text>
  </div>
</template>

<script>
import HappyIcon from "@/components/UI/HappyIcon";
import Text from "@/components/UI/Text";

export default {
  name: "Message",
  components: {HappyIcon, Text},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  font-weight: 700;
  width: 50%;
  padding: 4rem 2rem;
  margin: auto;
  display: flex;
  align-items: baseline;
  text-transform: none;
  text-align: left;

  > .text {
    color: #615551;
    line-height: 2.7rem;
    margin-left: 1.5rem;
    transform: translateY(-6px);
  }
}
</style>