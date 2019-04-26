<template>
  <div class="metting" :style="noteBackground">
    <vue-headful title="会议日程"></vue-headful>
    <div class="main">
      <div class="title">
        <span>会议日程</span>
      </div>
      <div class="metting_content">
        <ul>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到</span>
          </li>
          <li>
            <span class="time">8:00</span>
            <span class="metting_text">全体人员签到全体人员签到</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noteBackground: {
        backgroundImage: "url(" + require("../../../static/images/bg2.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }
    }
  }
}
</script>
<style scoped>
.metting {
  height: 100vh;
  padding-top: 25pt;
}
.main {
  height: 100vh;
  width: 100vw;
  padding-bottom: 20pt;
}
.title {
  font-size: 18px;
  text-align: center;
  width: 50vw;
  background-color: rgba(82, 56, 241, 0.5);
  line-height: 28pt;
  border-radius: 16pt;
  color: #fff;
  margin: 0 auto;
  margin-bottom: 30px;
}
.metting_content {
  margin-bottom: 20pt;
  height: 85vh;
  overflow: scroll;
  overflow-x: hidden;
}
.metting_content ul {
  padding-bottom: 5vh;
}
.metting_content ul li {
  padding: 8pt 20pt;
  margin: 5pt 0pt;
  background-color: rgba(13, 3, 70, 0.5);
  overflow: hidden;
  color: #fff;
}
.metting_content ul li span {
  display: block;
}
.metting_content ul li .time {
  width: 12%;
  float: left;
  padding-top: 2pt;
}
.metting_content ul li .metting_text {
  width: 85%;
  float: left;
}
</style>