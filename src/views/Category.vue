<template>
  <div class="category">
    <ChiefRecomment />
  </div>
</template>

<script>
import ChiefRecomment from "@/components/category/ChiefRecomment";
export default {
  data() {
    return {};
  },

  components: {
    ChiefRecomment
  }
};
</script>

<style lang='less' scoped>
.category {
  width: 100%;
  position: relative;
}
</style>