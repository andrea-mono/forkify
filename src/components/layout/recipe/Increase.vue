<template>
  <button class="increase" @click="handleClick">
    <IncreaseIcon />
  </button>
</template>

<script>
import IncreaseIcon from "@/components/UI/icons/IncreaseIcon";

export default {
  name: "Increase",
  components: {IncreaseIcon},
  setup(_,{emit}) {
    const handleClick = () => {
      emit('increase')
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.increase {
  background: none;
  border: none;
  cursor: pointer;
  transition: all 100ms linear;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>