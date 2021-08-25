<template>
  <button class="nav-button" @mouseenter="toggle" @mouseout="toggle">
    <slot />
    <span class="title" v-text="title"></span>
    <Dropdown v-if="dropdown">
      <slot name="dropdown-content" />
    </Dropdown>
  </button>
</template>

<script>
import Dropdown from "@/components/layout/header/Dropdown";

export default {
  name: "NavButton",
  components: {Dropdown},
  props: {
    title: {
      type: String,
      required: true
    },
    dropdown: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-button {
  background: transparent;
  flex: 1;
  padding: 2rem;
  border: none;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms linear;

  > .title {
    font-size: 1.7rem;
    font-weight: 700;
    color: #615551;
    margin-left: 1rem;
    white-space: nowrap;
  }

  &:hover {
    .dropdown {
      opacity: 1;
      pointer-events: all;
    }
  }

  &:hover,
  &:active {
    background: #f2efee;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 1.2rem;
    border-radius: 0;

    > .title {
      font-size: 1.4rem;
    }
  }
}
</style>