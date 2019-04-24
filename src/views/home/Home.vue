<template>
    <div class="veritas_bg">
      <div class="logo1">
        <img src="../../../static/images/problemConsult_header.png">
      </div>
      <div class="logo2">
        <img src="../../../static/images/problemConsult_header.png">
      </div>
      <div class="blocks">
        <flexbox :gutter="20">
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-huiyizichan"></span></div>
              <div class="main_item_title">峰会<br/>及赞助商介绍</div>
            </div>
          </flexbox-item>
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-calendar"></span></div>
              <div class="main_item_title">峰会日程</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-huatong"></span></div>
              <div class="main_item_title">演讲嘉宾</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="blocks">
        <flexbox :gutter="20">
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon">11</div>
              <div class="main_item_title">Skytap Demo</div>
            </div>
          </flexbox-item>
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-profilemale"></span></div>
              <div class="main_item_title">个人中心</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-clipboard"></span></div>
              <div class="main_item_title">会务安排</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="blocks">
        <flexbox :gutter="20">
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-chat"></span></div>
              <div class="main_item_title">社区交流</div>
            </div>
          </flexbox-item>
          <flexbox-item >
            <div class="main_item">
              <div class="main_item_icon">11</div>
              <div class="main_item_title">多云游戏</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="main_item">
              <div class="main_item_icon"><span class="iconfont icon-jilu"></span></div>
              <div class="main_item_title">反馈表及<br/>资料下载</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "Home",
    components: {
      Flexbox,FlexboxItem
    }
  }
</script>

<style scoped>
  .blocks{
    margin: 2vh;
  }
  .main_item{
    height:15vh;
    width:100%;
    background-color: rgba(0,0,0,0.2);
  }
  .logo1,.logo2{
    margin:4vh 2vh 0 2vh;
  }
  .logo1>img{
    width: 65vw;
    height: 10vh;
  }

  .logo2>img{
    width: 65vw;
    height:8vh;
  }

  .main_item_title{
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    padding-top: 5%;
  }

  .main_item_icon{
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>
