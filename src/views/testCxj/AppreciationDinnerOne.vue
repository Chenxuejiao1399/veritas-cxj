<template>
  <div class="dinner">
    <vue-headful title="晚宴答谢"></vue-headful>
    <div class="bannerImg">
      <img src="static/images/banner.png" alt>
    </div>
    <div class="main">
      <van-row type="flex" justify="space-around">
        <van-col span="7">
          <div class="interaction">
            <p>
              <img src="static/images/logoDinner.png">
            </p>
            <p>晚宴互动一</p>
          </div>
        </van-col>
        <van-col span="7">
          <div class="interaction">
            <p>
              <img src="static/images/logoDinner.png">
            </p>
            <p>晚宴互动二</p>
          </div>
        </van-col>
        <van-col span="7">
          <div class="interaction">
            <p>
              <img src="static/images/logoDinner.png">
            </p>
            <p>晚宴互动三</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: "AppreciationDinnerOne",
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
  padding-top: 40pt;
  margin-top: -2pt;
  text-align: center;
  height: 70vh;
  background: #fbfbfb;
}
.interaction {
  width: 100%;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 10px #ccc;
  border-radius: 3px;
  text-align: center;
  color: #4669ff;
}
.interaction img {
  width: 48pt;
  height: 35pt;
}
</style>
