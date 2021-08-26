<template>
  <div class="actions">
    <div class="info">
      <Time :minutes="30"/>
      <Servings :servings="4"/>
    </div>
    <ServingsActions />
    <Bookmark />
  </div>
</template>

<script>
import Time from "@/components/layout/recipe/Time";
import Servings from "@/components/layout/recipe/Servings";
import ServingsActions from "@/components/layout/recipe/ServingsActions";
import Bookmark from "@/components/layout/recipe/Bookmark";

export default {
  name: "Actions",
  components: {Bookmark, ServingsActions, Servings, Time}
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8rem 1rem 4rem 1rem;

  .info {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      height: auto;
      flex: 0 0 300px;
      flex-direction: row;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 8rem 8rem 4rem 8rem;
  }
}
</style>