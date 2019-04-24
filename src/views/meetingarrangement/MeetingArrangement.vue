<template>
  <div class="veritas_bg">
    <Header></Header>
    <div class="main_bg">
      <div class="main_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huatong"></use>
        </svg>
        &emsp;
        <div class="main_title_font">
          会务安排
          <div class="linear_gradients"></div>
        </div>
      </div>

      <div class="main_body">
        <div>
          <span>酒店安排</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huatong"></use>
          </svg>
        </div>
        <div class="linear_gradients"></div>
        <div class="hotel_map">
          地图
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    name: "MeetingArrangement",
    components:{
      Header
    }
  }
</script>

<style scoped>

</style>
