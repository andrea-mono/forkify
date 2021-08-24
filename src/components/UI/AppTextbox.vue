<template>
  <input type="text" class="textbox" :placeholder="title">
</template>

<script>
export default {
  name: "AppTextbox",
  props: {
    title: {
      type: String,
      required: true
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