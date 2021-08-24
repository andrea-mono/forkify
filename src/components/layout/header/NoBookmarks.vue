<template>
  <div class="no-bookmarks">
    <WarningIcon />
    <Text class="text" size="lg">No bookmarks yet. Find a nice recipe and bookmark it ;)</Text>
  </div>
</template>

<script>
import WarningIcon from "@/components/UI/WarningIcon";
import Text from "@/components/UI/Text";

export default {
  name: "NoBookmarks",
  components: {Text, WarningIcon}
}
</script>

<style lang="scss" scoped>
.no-bookmarks {
  font-weight: 700;
  width: 60%;
  display: flex;
  align-items: baseline;
  text-transform: none;
  text-align: left;

  > .text {
    color: #615551;
    line-height: 2.7rem;
    margin-left: 1rem;
    transform: translateY(-13px);
  }
}
</style>