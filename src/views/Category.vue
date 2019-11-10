<template>
  <div class="category">
    <ChiefRecomment />
    <Popularize />
  </div>
</template>

<script>
import ChiefRecomment from "@/components/category/ChiefRecomment";
import Popularize from "@/components/category/Popularize";
export default {
  data() {
    return {};
  },

  components: {
    ChiefRecomment,
    Popularize
  }
};
</script>

<style lang='less' scoped>
.category {
  width: 100%;
  position: relative;
}
</style>