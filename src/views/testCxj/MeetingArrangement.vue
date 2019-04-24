<template>
  <div class="metting">
    <vue-headful title="会议安排"></vue-headful>
    <van-collapse v-model="activeNames" class="show_date">
      <van-collapse-item name="1" :style="{backgroundImage: 'url(' + (activeImg ? activeImg : noActiveImg) + ')'}">
        <div slot="title">
          <span class="date">
            <i>07</i><i>3月</i>
          </span>
        </div>
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>export default {
  name: "MeetingArrangement",
  data() {
    return {
      activeNames: ['2'],
      noActiveImg:"static/images/metting-bgm1.png",
      activeImg:null,
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.metting {
  height: 100vh;
}
.show_date{
  width:100vw;
}
</style>
