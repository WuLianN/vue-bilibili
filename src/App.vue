<template>
  <div id="app">
    <Header />
    <Category />
  </div>
</template>

<script>
import Header from "./views/Header";
import Category from "@/views/Category";
export default {
  name: "app",
  components: {
    Header,
    Category
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
