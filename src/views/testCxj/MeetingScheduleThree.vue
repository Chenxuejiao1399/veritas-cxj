<template>
  <div class="metting" :style="noteBackground">
    <vue-headful title="会议日程"></vue-headful>
    <div class="main">
      <div class="title">
        <span>大会日程</span></br>
        <span class="title_english">Conference Agenda</span>
      </div>
      <div class="metting_content">
        <ul>
          <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
             <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
             <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
             <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
           <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
           <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
          </li>
          <li>
            <span class="time">8:00 - 9:00</span>
            <span class="metting_text">全体人员签到签到签到</span>
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
      noteBackground:{
        backgroundImage: "url(" + require("../../../static/images/bg6.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }
    }
  }
}
</script>
<style scoped>
.metting{
  height:100vh;
  color:#e2e2e2;
  padding-top: 25pt;
}
.main{
  height:100vh;
  width:100vw;
  padding-bottom:20pt;
}
.title{
  font-size:18px;
  text-align:center;
  width:50vw;
  line-height:21pt;
  margin:0 auto 0 auto;
}
.title .title_english{
  font-size:14px;
}
.metting_content{
  height: 65vh;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10vh;
  padding-bottom: 5vh;
}
.metting_content ul li{
  padding: 0 2vw;
  height: 9vh;
  line-height: 8vh;
  overflow: hidden;
}
.metting_content ul li span{
  display:block;
}
.metting_content ul li .time{
  width:37%;
  float:left;
  padding-top:2pt;
  text-align:right;
}
.metting_content ul li .metting_text{
  width:54%;
  float:right;
}
</style>