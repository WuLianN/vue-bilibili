<template>
  <div id="app">
    <div class="header"></div>
    <div class="nav"></div>
    <div class="footer"></div>
  </div>
</template>

<style lang="less">
@red: red;
@green: green;
@blue: blue;

*{
  margin: 0;
  padding: 0;
}

.fullWidth {
  width: 100vw;
}

#app {
  .fullWidth;
  height: 100vh;
}

.header {
  .fullWidth;
  height: 10vh;
  background: @red;
}

.nav {
  .fullWidth;
  height: 80vh;
  background: @green;
}

.footer {
  .fullWidth;
  height: 10vh;
  background: @blue;
}
</style>
