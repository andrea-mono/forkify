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
$height: 180px;

.dropdown {
  position: absolute;
  bottom: -$height;
  right: 0;
  z-index: 5;
  background: #fff;
  height: $height;
  opacity: 0;
  box-shadow: 0 .2rem 1rem #ece5e5;
  display: none;
  overflow-y: auto;
  pointer-events: none;
  cursor: default;
  transition: opacity 500ms linear;

  @media screen and (min-width: 1024px) {
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>