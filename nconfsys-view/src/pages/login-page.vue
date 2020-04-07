<template>
  <div>
    <l-header></l-header>
    <div class="v-container-body" >
      <div class="v-container-content v-container-box-shadow">
        <div style="height: 60px;border-bottom-style: solid;border-bottom-color: #e8eaec;border-bottom-width:1px; ">
<!--
          <p style="text-align: center;margin-top: 7px;font-size: 26px">欢迎登录学术会议管理系统</p>
-->
        </div>
        <div class="v-form-container ">
          <div>
            <p style="display: block;margin-left: 35px;margin-bottom:20px;font-size: 20px;font-family: 'Microsoft YaHei'">密码登录</p>
          </div>
          <!-- 登录表单-->
          <login-from v-bind:pag="msg"></login-from>
        </div>
        <div style="margin-top: 90px;height: 40px;border-top-style: solid;border-top-color:#e8eaec;border-top-width: 1px ">
           <div style="width: 47%;text-align: right;float: left;padding: 4px">
             <p>其他登录方式</p>
           </div>
           <div style="float: left;margin-left:20px;height: 30px;width: 30px ;padding: 2px;margin-top: 4px">
             <a href="#"><img src="./../assets/image/login/qq-login.gif" style="width: 80%;height: 80%"></a>
           </div>
           <div style="float: left;margin-left: 15px;height: 30px;width: 30px">
             <a href="#"><img src="./../assets/image/login/weixin-login.gif" style="width: 100%;height: 100%"></a>
           </div>
          <div style="float: left;margin-left: 15px;height: 30px;width: 30px;margin-top: 2px">
            <a href="#"><img src="./../assets/image/login/weibo-login.gif" style="width: 100%;height: 100%"></a>
          </div>
        </div>
      </div>
    </div>
      <l-footer></l-footer>
  </div>

</template>

<script>
  import LHeader from "../components/LHeader";
  import LoginFrom from "../components/LoginForm";
  import LFooter from "../components/LFooter";
    export default {
        name: "login-page",
        data(){
           return{
               msg:'登录',
           }
        },
        components:{
            LHeader,
            LoginFrom,
            LFooter,
        }
    }
</script>

<style scoped>

</style>
