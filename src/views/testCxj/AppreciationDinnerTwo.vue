<template>
  <div class="dinner">
    <vue-headful title="晚宴答谢"></vue-headful>
    <div class="bannerImg">
      <img src="static/images/banner.png" alt>
    </div>
    <div class="main">
      <div class="interaction">晚宴互动一</div>
      <div class="interaction">晚宴互动二</div>
      <div class="interaction">晚宴互动三</div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: "AppreciationDinnerTwo",
  components: {
    'footer-bottom': Footer
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.dinner {
  height: 100vh;
}
.bannerImg img {
  width: 100%;
}
.main {
  padding-top: 45pt;
  margin-top: -2pt;
  text-align: center;
  height: 70vh;
}
.interaction {
  line-height: 35pt;
  width: 75vw;
  border: 1pt solid #9898ff;
  border-radius: 20pt;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 23px;
  color: #636eff;
  font-weight: 700;
}
</style>
