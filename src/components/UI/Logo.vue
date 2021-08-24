<template>
  <div class="logo-container">
    <a href="/">
      <img id="logo" src="../../assets/logo.png" alt="Forkify">
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss" scoped>
.logo-container {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    width: 100%;
    height: 45px;
    object-fit: contain;
  }
}
</style>