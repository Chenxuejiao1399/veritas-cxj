<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  font-size: 14px;
  height: 100vh;
  overflow: hidden;
  color: #333333;
}
body {
  margin: 0;
  padding: 0;
}
</style>
