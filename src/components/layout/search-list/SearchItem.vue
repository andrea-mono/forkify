<template>
  <div class="search-item">
    <figure>
      <img :src="item.image_url" class="thumbnail" :alt="item.title">
    </figure>
    <div class="info">
      <h3 class="title" v-text="item.title"></h3>
      <Text size="sm" class="publisher" v-text="item.publisher"></Text>
    </div>
  </div>
</template>

<script>
import Text from "@/components/UI/Text";
export default {
  name: "SearchItem",
  components: {Text},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-item {
  padding: 2rem 3rem;
  cursor: pointer;
  display: flex;
  transition: all 200ms ease;

  figure {
    position: relative;
    flex: 0 0 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    display: block;

    > .thumbnail {
      width: 100%;
      height: 100%;
    }

    &:after {
      position: absolute;
      top: 0;
      background: linear-gradient(to right bottom,#fbdb89,#f48982);
      width: 100%;
      height: 100%;
      content: "";
      opacity: 50%;
      display: block;
    }
  }

  .info {
    flex: 1;
    padding: 1rem 2rem;

    > .title {
      font-size: 1.3rem;
      color: #f38e82;
      width: 250px;
      text-transform: uppercase;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }

    > .publisher {
      color: #918581;
      text-transform: uppercase;
      margin-top: .8rem;
    }
  }

  &:hover {
    background: #f9f5f3;
    transform: translateY(-3px);
  }
}
</style>