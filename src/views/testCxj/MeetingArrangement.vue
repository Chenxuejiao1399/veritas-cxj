<template>
  <div class="meeting_schedule">
    <vue-headful title="会议安排"></vue-headful>
    <div class="date_content">
      <div class="date_schedule" v-for="(schedule,time_index) in dateContent" :key="time_index">
        <div
          class="date"
          :style="!schedule.isShow ? navBgm2 : navBgm1"
          @click="changeClass(time_index,schedule)"
        >
          <span class="date_left">
            <i>{{schedule.date.slice(2,4)}}</i>
            <i>{{schedule.date.slice(0,2)}}</i>
          </span>
          <span class="date_right" :style="!schedule.isShow ? iconBgm1 : iconBgm2"></span>
        </div>
        <ul class="date_ul" v-show="schedule.isShow">
          <li class="date_ul_li">
            <div class="schedule_text" v-for="(item,index) in schedule.body" :key="index">
              <span class="schedule_time">{{item.time}}</span>
              <ul class="schedule_time_ul">
                <div class="schedule_detail">
                  <div>
                    <li>欢迎致辞：{{item.title}}</li>
                    <li>演讲人：{{item.speechmaker}}</li>
                    <li>{{item.job}}</li>
                  </div>
                </div>
              </ul>
            </div>
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
      navBgm1: {
        backgroundImage: "url(" + require("../../../static/images/meeting-bgm1.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        color: "#fff"
      }, //设置导航条背景，当下面的内容显示时导航背景为蓝色
      navBgm2: {
        backgroundImage: "url(" + require("../../../static/images/meeting-bgm2.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        color: "#666"
      },//设置导航条背景，当下面的内容不显示时导航背景为灰色
      iconBgm1: {
        backgroundImage: "url(" + require("../../../static/images/arrowsR.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
      iconBgm2: {
        backgroundImage: "url(" + require("../../../static/images/arrowsD.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
      dateContent: [
        {
          date: "3月07",
          isShow: false,
          body: [
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            }
          ]
        },
        {
          date: "3月08",
          isShow: true,
          body: [
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            },
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            },
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            },
          ]
        },
        {
          date: "3月09",
          isShow: false,
          body: [
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            },
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            }
          ]
        },
        {
          date: "3月10",
          isShow: false,
          body: [
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            },
            {
              time: "09:00",
              title: "Veritas公司的使命：多云时代的数据管理",
              speechmaker: "蔡四友",
              job: "华东区/华中区运营商及大企业部销售总监"
            }
          ]
        },
      ]
    }
  },
  methods: {
    changeClass(indexTemp, itemTemp) {
      let vm = this
      vm.dateContent.forEach(function (value, index, array) {
        if (indexTemp === index) {
          value.isShow = !itemTemp.isShow;
        }
      })
    }
  }
}
</script>
<style>
.meeting_schedule {
  height: 100vh;
  width: 100vw;
  background: #f9f9f9;
}
.date_content {
  height: 100vh;
  overflow: auto;
}
.date_right {
  width: 3vw;
  height: 4vh;
  display: inline-block;
  float: right;
  line-height: 4vh;
  margin: 1vh 5vw 0vh 0vw;
}
.date_left {
  display: inline-block;
  float: left;
  margin-left: 5vw;
}
.date {
  height: 4vh;
  line-height: 4vh;
  overflow: hidden;
}
.date_left i {
  font-style: normal;
}
.date_left i:nth-child(1) {
  font-weight: 700;
  font-size: 16px;
}
.date_left i:nth-child(2) {
  font-size: 12px;
  margin-top: 2vh;
}
.date_schedule {
  margin-bottom: 1vh;
  background: #f9f9f9;
}
.date_ul {
  padding: 0vh 1vh 0vh 1vh;
  background: #f9f9f9;
}
.date_ul .date_ul_li {
  overflow: hidden;
}
.schedule_text .schedule_time_ul {
  border-left: 1px solid #f1ecec;
  margin-left: 10vw;
  padding-left: 10vw;
  width: 100%;
}
.schedule_text .schedule_time_ul .schedule_detail {
  padding: 1vh 3vw 1vh 1vw;
}
.schedule_detail div {
  border: 1px solid #f0f0f0;
  width: 65%;
  background: #fff;
  padding: 2vw;
  border-radius: 4pt;
  box-shadow: 0 0 10px #ccc;
}
.schedule_time {
  display: inline-block;
  position: absolute;
  top: 50%;
  top: 50%;
  margin: -2vh 0 0 0;
  left: 2vw;
  width: 17vw;
  height: 4vh;
  background: #4bbbff;
  border-radius: 10pt;
  text-align: center;
  line-height: 4vh;
  color: #fff;
}
.schedule_text {
  display: inline-block;
  position: relative;
}
.schedule_detail li {
  line-height: 3.5vh;
}
.schedule_detail li:nth-child(1) {
  color: #333;
  font-weight: bold;
  font-size: 14px;
}
.schedule_detail li:nth-child(2) {
  color: #818181;
  font-size: 12px;
}
.schedule_detail li:nth-child(3) {
  color: #818181;
  font-size: 12px;
}
</style>


