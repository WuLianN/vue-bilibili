<template>
  <div class="header">
    <TopNav />
    <BottomNav />
  </div>
</template>

<script>
import TopNav from "@/components/header/TopNav";
import BottomNav from "@/components/header/BottomNav";

export default {
  data() {
    return {};
  },

  components: {
    TopNav,
    BottomNav
  }
};
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  height: 228px;
}
</style>