<template>
    <div class="veritas_bg">
      <div class="main">
        <div class="title">
          <span>个人中心</span>
        </div>
        <div class="content">
          <div>姓名：<span>马文强</span></div>
          <div>公司：<span>北京博昂思营销管理咨询有限公司</span></div>
          <div>职位：<span>线上小组</span></div>
          <div>手机号：<span>13656263256</span></div>
          <div>邮箱：<span>nakdsja@bandwnent.com</span></div>
          <div>身份类别：<span>用户</span></div>
        </div>
        <div class="QRcode">
          <img src="../../../static/images/1.png">
        </div>
      </div>
    </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "Center",
    components: {
      Flexbox,FlexboxItem
    }
  }
</script>

<style scoped>
.main{
  margin: 4vh 10vw;
}
.title{
  background-color: rgba(0,0,0,0.2);
  padding: 2vh;
}
.title>div{
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  padding-bottom: 1vh;
  border-bottom: 2px solid;
  border-image: -webkit-linear-gradient(90deg,#0000ff,#ff0000) 5 10;
  border-image: -moz-linear-gradient(90deg,#0000ff,#ff0000) 5 10;
  border-image: linear-gradient(90deg,#0000ff,#ff0000) 5 10;
}

  .content div{
    padding-top: 3vh;
    letter-spacing: 1px;
  }

  .QRcode{
    text-align: center;
    margin-top: 10vh;
  }

  .QRcode>img{
    width: 30vw;
  }
</style>
