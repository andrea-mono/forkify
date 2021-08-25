<template>
  <div class="alert">
    <WarningIcon />
    <Text class="text" size="lg" v-text="text"></Text>
  </div>
</template>

<script>
import WarningIcon from "@/components/UI/WarningIcon";
import Text from "@/components/UI/Text";

export default {
  name: "AlertMessage",
  components: {WarningIcon, Text},
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  font-weight: 700;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
  text-align: left;

  > .text {
    color: #615551;
    line-height: 2.7rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
    transform: translateY(-9px);

    @media screen and (min-width: 640px) {
      margin-top: 0;
      transform: translateY(-15px);
    }

    @media screen and (min-width: 1024px) {
      transform: translateY(-9px);
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