<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Mukta+Mahee');

html, body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  font-family: 'Abril Fatface', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
