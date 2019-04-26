<template>
  <div class="dinner" :style="MainBackground">
    <vue-headful title="会议日程"></vue-headful>
    <div class="main">
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">09:00 - 10:45</span>
        </span>
        <span class="metting_contnet">第一环节，经济学教对话新经济</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">10:45 - 11:35</span>
        </span>
        <span class="metting_contnet">第二环节，经济学教对话科学家----科学家精神</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">11:35 - 11:45</span>
        </span>
        <span class="metting_contnet">第三环节，商业与禅意（佛教与企业家精神）</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">11:45 - 12:35</span>
        </span>
        <span class="metting_contnet">第四环节，颁奖环节第四环节，颁奖环节</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">12:35 - 12:45</span>
        </span>
        <span class="metting_contnet">第五环节，智库发布仪式</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="lunch_title link_time">12:45 - 13:50 午餐时间</span>
        </span>
        <span class="metting_contnet lunch_time"></span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">14:00 - 15:20</span>
        </span>
        <span class="metting_contnet">态度说----主题演讲</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">15:20 - 16:30</span>
        </span>
        <span class="metting_contnet">楼市未来圆桌对话</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">16:30 - 16:50</span>
        </span>
        <span class="metting_contnet">主题演讲</span>
      </div>
      <div class="link">
        <span>
          <van-icon name="clock-o"/>
          <span class="link_time">16:50 - 18:00</span>
        </span>
        <span class="metting_contnet">股市未来圆桌对话</span>
      </div>
      <div class="link especially">
        <span>
          <van-icon name="clock"/>
          <span class="link_time">19:00 - 21:40</span>
        </span>
        <span class="metting_contnet">
          态度说
          <i class="circle"></i>网易经济学家年夜会话
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MainBackground: {
        backgroundImage: "url(" + require("../../../static/images/meetingBg1.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }
}
</script>

<style scoped>
.dinner {
  height: 100vh;
}
.main {
  height: 95vh;
  width: 100vw;
  padding-top: 10pt;
  padding-bottom: 20pt;
  overflow: scroll;
  overflow-x: hidden;
}
p {
  padding: 0;
}
.van-icon-clock-o:before {
  content: "\F032";
  vertical-align: sub;
  margin-right: 8pt;
  margin-top: -2pt;
}
.van-icon-clock:before {
  color: #2265cc;
  vertical-align: sub;
  margin-right: 8pt;
  margin-top: -2pt;
}
.link {
  width: 86vw;
  margin: 0 auto;
}
.link span {
  display: inline-block;
  margin-bottom: 1pt;
}
.metting_contnet {
  padding-left: 15pt;
  margin-left: 5pt;
  height: 28pt;
  line-height: 28pt;
  border-left: 1pt solid #ccc;
  width: 100%;
}
.link_time {
  padding: 1pt 3pt;
}
.lunch_title {
  background: #efebeb;
}
.lunch_time {
  height: 15px;
}
.circle {
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: #2265cc;
  margin-bottom: 2px;
  border-radius: 2px; /* 图形的半径 */
  margin-left: 2pt;
  margin-right: 2pt;
}
.especially {
  color: #2265cc;
}
</style>
