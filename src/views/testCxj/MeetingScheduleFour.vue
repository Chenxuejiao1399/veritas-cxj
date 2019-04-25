<template>
  <div class="metting" :style="noteBackground">
    <vue-headful title="会议日程"></vue-headful>
    <div class="main">
      <div class="title" :style="titleBackground">
        <span>会议日程</span></br>
      </div>
      <div class="metting_content">
        <div class="schedule_one">
          <div class="left_img"><img src="../../../static/images/circlebgm3.png"></div>
          <ul class="schedule_one_ul">
            <li>
              <span class="time">8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
            <li>
              <span class="time">8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
            <li>
              <span class="time">8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
            <li>
             <span class="time"> 8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
            <li>
              <span class="time">8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
            <li>
              <span class="time">8:00 - 9:00</span>
              <span class="metting_text">签到</span>
            </li>
          </ul>
        </div>

        <div class="schedule_two">
          <ul class="schedule_two_ul">
            <li>
              <span class="metting_text">签到</span>
              <span class="time">8:00 - 9:00 </span>
            </li>
            <li>
               <span class="metting_text">签到</span>
              <span class="time">8:00 - 9:00 </span>
            </li>
            <li>
              <span class="metting_text">签到</span>
              <span class="time">8:00 - 9:00 </span>
            </li>
            <li>
              <span class="metting_text">签到</span>
             <span class="time">8:00 - 9:00 </span>
            </li>
            <li>
              <span class="metting_text">全体人员签到</span>
              <span class="time">8:00 - 9:00 </span>
            </li>
          </ul>
          <div class="left_img"><img src="../../../static/images/circlebgm4.png"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      noteBackground:{
        backgroundImage: "url(" + require("../../../static/images/meetingfourbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
      titleBackground:{
        backgroundImage: "url(" + require("../../../static/images/meeting.png") + ")",
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
  line-height:42pt;
  margin:0 auto 15pt auto;
}
.metting_content{
  height:80vh;
  padding-bottom:20pt;
  position: relative;
}
.schedule_one .left_img{
  float:left;
  width:30vw;
}
.schedule_two .left_img{
  float:right;
  width:30vw;
}
.schedule_one_ul{
  width:68vw;
  float:left;
  margin-top: 4vh;
}
.schedule_two_ul{
  width:70vw;
  float:left;
  margin-top: 4.2vh;
}
.left_img img{
  width:100%;
}
.metting_content .schedule_one{
  overflow:hidden;
}
.metting_content .schedule_one ul li:nth-child(1){
  margin-left:-8vw;
}
.metting_content .schedule_one ul li:nth-child(2){
  margin-left:-3vw;
}
.metting_content .schedule_one ul li:nth-child(3){
  margin-left:0vw;
}
.metting_content .schedule_one ul li:nth-child(4){
  margin-left:1vw;
}
.metting_content .schedule_one ul li:nth-child(5){
  margin-left:0vw;
}
.metting_content .schedule_one ul li:nth-child(6){
  margin-left:-3vw;
}
.metting_content .schedule_one_ul li{
  height: 5.7vh;
  overflow:hidden;
  padding:0 5pt;
}
.metting_content .schedule_two_ul li{
  height: 5.5vh;
  overflow:hidden;
  padding:0 5pt;
}
.metting_content ul li span{
  display:block;
}
.metting_content .schedule_one .time{
  float:left;
  padding-top:2pt;
  text-align:left;
}
.metting_content .schedule_one .metting_text{
  width:63%;
  float:right;
}
.schedule_two{
  width:100vw;
  overflow:hidden;
}
.schedule_two .metting_text{
  float:left;
  width:55%;
  text-align:right;
  margin-right:4vh;
}
.metting_content .schedule_two ul li:nth-child(1){
  margin-right:-19vw;
}
.metting_content .schedule_two ul li:nth-child(2){
  margin-right:-11vw;
}
.metting_content .schedule_two ul li:nth-child(3){
  margin-right:-9vw;
}
.metting_content .schedule_two ul li:nth-child(4){
  margin-right:-5vw;
}
.metting_content .schedule_two ul li:nth-child(5){
  margin-right:-8vw;
}
</style>