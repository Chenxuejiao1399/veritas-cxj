<template>
  <div class="bottomFooter" :style="navBgm"></div>
</template>
<script>
export default {
  data() {
    return {
      navBgm: {
        backgroundImage: "url(" + require("../../static/images/bottom.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    }
  }
}
</script>
<style scoped>
.bottomFooter {
  position: absolute;
  bottom: 0vh;
  width: 100vw;
  height: 18vh;
}
</style>





