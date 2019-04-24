<template>
  <div class="cc_bg">
    <div class="header">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="info">
      <div class="info-content"><a href="">点击话题查看回复</a></div>
    </div>
    <div class="chat-box main_bg"></div>
  </div>
</template>
<script>
export default {
  name: "communication"
}
</script>
<style scoped>
.cc_bg {
  overflow-y: hidden;
}
.header {
  display: flex;
  align-items: center;
  height: 6vh;
}
.header .left {
  width: 50%;
  height: 5vh;
  background: #4a4a4a;
}
.header .right {
  width: 50%;
  height: 5vh;
  background: #4a4a4a;
}
.info {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
</style>

