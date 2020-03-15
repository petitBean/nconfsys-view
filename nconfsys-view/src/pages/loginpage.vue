<template>
  <div>
    <l-header></l-header>
    <div class="v-container-body" >
      <div class="v-container-content">
        <div style="height: 60px;border-bottom-style: solid;border-bottom-color: #e8eaec;border-bottom-width:1px; ">
<!--
          <p style="text-align: center;margin-top: 7px;font-size: 26px">欢迎登录学术会议管理系统</p>
-->
        </div>
        <div class="v-form-container">
          <div>
            <p style="display: block;margin-left: 35px;margin-bottom:20px;font-size: 20px;font-family: 'Microsoft YaHei'">密码登录</p>
          </div>
          <!-- 登录表单-->
          <login-from></login-from>
        </div>
        <div style="margin-top: 60px;height: 40px;border-top-style: solid;border-top-color:#e8eaec;border-top-width: 1px ">
           <div style="width: 47%;text-align: right;float: left">
             <p>其他登录方式</p>
           </div>
           <div style="float: left;margin-left:20px; ">
             <a href="#">QQ</a>
           </div>
           <div style="float: left;margin-left: 15px">
             <a href="#">微信</a>
           </div>
        </div>
      </div>
   </div>
  </div>


</template>

<script>
  import LHeader from "../components/LHeader";
  import LoginFrom from "../components/LoginForm";
    export default {
        name: "loginpage",
        components:{LHeader,
            LoginFrom,
        }
    }
</script>

<style scoped>

</style>
