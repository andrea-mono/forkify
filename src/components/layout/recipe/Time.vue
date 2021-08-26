<template>
  <div class="time">
    <TimeIcon />
    <Text size="lg">
      <strong class="text" v-text="minutes"></strong>
      minutes
    </Text>
  </div>
</template>

<script>
import TimeIcon from "@/components/UI/icons/TimeIcon";
import Text from "@/components/UI/Text";

export default {
  name: "Time",
  components: {Text, TimeIcon},
  props: {
    minutes: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.time {
  grid-area: time;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  .text {
    margin-left: 1rem;
    display: inline-block;
  }
}
</style>