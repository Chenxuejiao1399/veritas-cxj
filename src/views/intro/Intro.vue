<template>
  <div class="veritas_bg">
    <Header></Header>
    <div class="main_bg">
      <div class="main_title">
        <span class="iconfont icon-huiyizichan"></span>
        &emsp;
        <div class="main_title_font">
          峰会介绍
          <div class="linear_gradients"></div>
        </div>
      </div>

      <div class="main_content">
        十年前，安全环境还没有像现在这样复杂，安全只是IT的一个部分，安全与存储结合在一起，更便于与用户的需求对接。但是，随着技术的发展和用户需求的变化，安全的重要性日益凸显，客户也萌生了建立独立的安全团队，将安全业务单独处理的需求。从客户角度来看，将安全和存储结合在一起所带来的价值越来越小。无论是赛门铁克还是VERITAS，都感觉只有专注于自己的业务，才能实现各自业务的可持续性发展。

        在分拆之前，赛门铁克必须兼顾安全和信息管理两大业务，无论是业务模式、市场策略和产品战略都无法做到专注、细精化和针对性，这无疑影响了赛门铁克整体业务的发展。三四年以前，赛门铁克已经发现了其中的问题
      </div>
      <div class="main_title">
        <span class="iconfont icon-huiyizichan"></span>
        &emsp;
        <div class="main_title_font">
          参与Veritas年度峰会Vision Solution Day听取：
          <div class="linear_gradients"></div>
        </div>
      </div>
      <div class="main_list">
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-dian"></use>
          </svg>
          IDC深度透析数字智能时代的技术趋势与企业转型
        </div>
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-dian"></use>
          </svg>
          IDC深度透析数字智能时代的技术趋势与企业转型
        </div>
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-dian"></use>
          </svg>
          IDC深度透析数字智能时代的技术趋势与企业转型
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: "Intro",
  components: {
    Header
  }
}
</script>
<style scoped>
.main_content {
  padding: 2vh 0;
}
.main_list {
  margin-top: 2vh;
}
</style>
