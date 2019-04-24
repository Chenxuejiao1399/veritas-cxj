<template>
  <div class="logo">
    <flexbox>
      <flexbox-item :span="3/8"><img src="../../static/images/problemConsult_header.png" class="logo_img"></flexbox-item>
      <flexbox-item :span="2/8"></flexbox-item>
      <flexbox-item><img src="../../static/images/problemConsult_header.png" class="logo_img"></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem} from 'vux'
  export default {
    name: "Header",
    components: {
      Flexbox,FlexboxItem
    },

  }
</script>

<style scoped>
  .logo{
    margin: 4vh 5vw 0 5vw;
  }
  .logo_img{
    width: 100%;
    height: 50px;
  }
</style>
