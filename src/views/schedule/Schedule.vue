<template>
  <div class="veritas_bg">
    <Header></Header>
    <div class="main_bg">
      <div class="main_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-calendar"></use>
        </svg>
        &emsp;
        <div class="main_title_font">
          会议日程
          <div class="linear_gradients"></div>
        </div>
      </div>
      <div class="main_subtitle">主会场</div>
      <timeline class="main_list">
        <timeline-item>
          <div class="text">
            <span>08:00-09:00</span>
            <span>来宾注册，参观展台</span>
          </div>
        </timeline-item>
        <timeline-item>
          <div class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </div>
        </timeline-item>
      </timeline>
      <!--<div class="main_list">
        <svg class="icon icon_start" aria-hidden="true">
          <use xlink:href="#icon-start"></use>
        </svg>
        <ul class="main_list_ul">
          <li class="text">
            <span>08:00-09:00</span>
            <span>来宾注册，参观展台</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>
          <li class="text">
            <span>9:00-9:10</span>
            <span>开幕致词</span>
            <span>大中华区总裁</span>
          </li>

        </ul>
        <svg class="icon icon_end" aria-hidden="true">
          <use xlink:href="#icon-old"></use>
        </svg>
      </div>-->
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import { Timeline, TimelineItem } from 'vux'
  export default {
    name: "Schedule",
    components:{
      Header,Timeline, TimelineItem
    }
  }
</script>

<style scoped>
.main_subtitle{
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  padding: 2vh 0;
}

 /* .main_list{
    position: relative;
  }

  .main_list_ul{
    position: relative;
    margin: 0;
    padding: 0 1vh;
  }

  .main_list .text{
    position: relative;
    list-style: none;
    border-left: 3px solid orange;
    padding: 0 5vw 2vh;
    display: flex;
    flex-direction: column;
  }

.main_list .text:before {
  position: absolute;
  content: "\2022";
  font-size: 20px;
  font-weight: bold;
  color: #f2d73f;
  left: -1.4vw;
  top: -3px;
}

.main_list .text::after {
  position: absolute;
  content: ">";
  color: #f2d73f;
  font-weight: bold;
  font-size: 12px;
  left: 1vw;
  top: 2px;
}

  .icon_start{
    position: absolute;
    top: -15px;
    left: .5vw;
  }

  .icon_end{
    position: absolute;
    bottom: -13px;
    left: 0.5vw;
  }*/

.main_list .text{
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 2vw;
}

.main_list .text::after {
  position: absolute;
  content: ">";
  color: red;
  font-weight: bold;
  font-size: 12px;
  left: -1vw;
  top:2px;
}

</style>

<style>
  .vux-timeline-item-head-first{
    width: 10px !important;
    height: 10px !important;
    left: 1px !important;
    top: 4px !important;
  }

  .weui-icon-success-no-circle:before {
    content: "" !important;
  }
</style>
