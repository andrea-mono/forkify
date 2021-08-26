<template>
  <div class="message">
    <HappyIcon />
    <Text class="text" size="xl" v-text="text"></Text>
  </div>
</template>

<script>
import HappyIcon from "@/components/UI/icons/HappyIcon";
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
  width: 80%;
  padding: 3rem 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
  text-align: center;

  > .text {
    color: #615551;
    line-height: 2.7rem;
    margin-top: 1.2rem;
    margin-left: 1.5rem;
    transform: translateY(-6px);

    @media screen and (min-width: 640px) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 640px) {
    width: 50%;
    flex-direction: row;
    align-items: baseline;
    text-align: left;
  }
}
</style>