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
  name: "AlertMsg",
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
  width: 60%;
  margin: auto;
  display: flex;
  align-items: baseline;
  text-transform: none;
  text-align: left;

  > .text {
    color: #615551;
    line-height: 2.7rem;
    margin-left: 1rem;
    transform: translateY(-13px);
  }
}
</style>