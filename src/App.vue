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
  padding: 0;
  margin: 0;

  /* width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 0;
  padding-bottom: 0.9rem; */
}
body {
  margin: 0;
  padding: 0;
}
</style>
