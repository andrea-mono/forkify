<template>
  <div class="dropdown">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Dropdown"
}
</script>

<style lang="scss" scoped>
$height: 80px;

.dropdown {
  position: absolute;
  bottom: -$height;
  right: 0;
  background: #fff;
  height: $height;
  opacity: 0;
  display: none;
  pointer-events: none;
  transition: opacity 500ms linear;

  @media screen and (min-width: 1023px) {
    width: 450px;
    display: block;
  }
}
</style>