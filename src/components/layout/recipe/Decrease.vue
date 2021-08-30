<template>
  <button class="decrease" @click="handleClick">
    <DecreaseIcon />
  </button>
</template>

<script>
import DecreaseIcon from "@/components/UI/icons/DecreaseIcon";

export default {
  name: "Decrease",
  components: {DecreaseIcon},
  setup(_,{emit}) {
    const handleClick = () => {
      emit('decrease')
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.decrease {
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