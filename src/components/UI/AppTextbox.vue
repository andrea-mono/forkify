<template>
  <input v-model="value" type="text" class="textbox" :class="{ secondary: secondary }" :placeholder="title" @input="newValue">
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "AppTextbox",
  props: {
    input: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const value = ref(null)

    watch(() => props.input, (newValue) => {
      value.value = newValue
    })

    const newValue = () => {
      emit('refresh', value.value)
    }

    return {
      value,
      newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.textbox {
  font-size: 2rem;
  width: 100%;
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 5rem;
  /*transition: all 300ms linear;*/

  &.secondary {
    padding: .5rem 1rem;
    border: 1px solid #dddddd;
    border-radius: 1rem;
    transition: all 100ms linear;

    &:focus {
      background: #f9f5f3;
      border-color: #f38e82;
    }
  }

  &::placeholder {
    font-size: 1.8rem;
    color: #d3c7c3;
  }

  &:focus {
    outline: none;
    /*box-shadow: 0 .2rem 1rem #ece5e5;
    transform: translateY(-2px);*/
  }
}
</style>