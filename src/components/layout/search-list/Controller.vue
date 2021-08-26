<template>
  <AppButton :title="text" secondary :reversed="reversed" @click="handle">
    <ArrowIcon :right="reversed" />
  </AppButton>
</template>

<script>
import ArrowIcon from "@/components/UI/icons/ArrowIcon";
import AppButton from "@/components/UI/buttons/AppButton";

export default {
  name: "Controller",
  components: {AppButton, ArrowIcon},
  props: {
    text: {
      type: String,
      required: true
    },
    reversed: {
      type: Boolean
    }
  },
  setup(_, {emit}) {
    const handle = () => emit('handle')

    return {
      handle
    }
  }
}
</script>