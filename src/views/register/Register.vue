<template>
    <div class="veritas_bg">
      <Header></Header>
      <div class="main">
        <div class="title">
          <div>请输入以下消息</div>
        </div>
        <div class="main_inputs">
          <div class="item_input"><span>姓&emsp;名：</span><input type="text" name="username" v-model="username" placeholder="请输入姓名"/></div>
          <div class="item_input"><span>公&emsp;司：</span><input type="text" name="companyName" v-model="companyName" placeholder="请输入公司名称"/></div>
          <div class="item_input"><span>手机号：</span><input type="text" name="mobile" v-model="mobile" placeholder="请输入手机号"/></div>
          <div class="item_input"><span>邮&emsp;箱：</span><input type="text" name="email" v-model="email" placeholder="请输入邮箱地址"/></div>
        </div>
        <div class="main_bottom">
          <x-button class="btn_medium" @click.native="submitData">提&emsp;交</x-button>
        </div>
      </div>
      <!--验证时的弹出框-->
      <toast v-model="validateShow" type="warn" :text="message" position="middle" is-show-mask  width="10em"></toast>
    </div>
</template>

<script>
  import Header from '../../components/Header'
  import { XInput,Group,XButton,Flexbox, FlexboxItem,Toast } from 'vux'
  export default {
    name: "Register",
    components: {
      XInput,Group,XButton,Flexbox,FlexboxItem,Toast,
      Header
    },
    data(){
      return{
        username:'',
        companyName:'',
        mobile:'',
        email:'',
        validateShow:false,
        message:''
      }
    },
    mounted(){},
    methods:{
      submitData(){
        let vm = this;
        if(vm.validate()){

        }
      },
      validate(){
        let vm = this;
        let msg = "";
        let regP = /^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(147,145))\d{8}$/;
        let regE = /\w@\w*\.\w/;
        if(!vm.username){
          msg = "姓名不能为空！";
        }else if(!vm.companyName){
          msg = "公司名称不能为空！";
        }else if(!vm.mobile){
          msg = "手机号不能为空！";
        }else if (vm.mobile && !regP.test(vm.mobile)) {
          msg = "手机号格式不正确！";
        }else if(!vm.email){
          msg = "邮箱不能为空！";
        } else if (vm.email && !regE.test(vm.email)) {
          msg = "邮箱格式不正确！";
        }

        if(msg){
          vm.message = msg;
          vm.validateShow = true;
          return false;
        }else{
          return true;
        }

      }
    }
  }
</script>

<style scoped>
.btn_medium{
  width: 35vw;
  background-color: rgba(0,0,0,0.2);
  color:#fff;
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
.main{
  margin: 12vh 5vw;
}
.main_inputs{
  margin: 3vh 6vw;
}
.item_input{
  margin-bottom: 2vh;
}
.item_input>input{
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  height: 5vh;
  width: 56vw;
}

.main_bottom{
  margin-top: 10vh;
}

</style>

<style>
  input::-webkit-input-placeholder {
    color: #fff;
    padding-left: 8px;
  }
</style>
