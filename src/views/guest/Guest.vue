<template>
    <div class="veritas_bg">
      <Header></Header>
      <div class="main_bg">
        <div class="main_title">
          <span class="iconfont icon-huatong"></span>
          &emsp;
          <div class="main_title_font">
            演讲嘉宾
            <div class="linear_gradients"></div>
          </div>
        </div>
        <div class="main_body">
          <flexbox>
            <flexbox-item :span="3">
              <img src="../../../static/images/3.jpg" style="width: 100%"/>
            </flexbox-item>
            <flexbox-item class="main_right">
              <span class="guestName">Jane Zhou</span>
              <span>全球高级副总裁</span>
              <span>数据管理产品部</span>
            </flexbox-item>
          </flexbox>
          <div class="main_bottom">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huatong"></use>
            </svg>
            Jane担任数据管理产品部数据管理产品部数据管理产品部数据管理产品部数据管理产品部数据管理产品部

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/Header'
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "Guest",
    components:{
      Header,Flexbox, FlexboxItem
    }
  }
</script>

<style scoped>
.main_right{
  display: flex;
  flex-direction: column;
}
</style>
