<template>
  <div>
    <r-header> </r-header>
    <div class="v-container-body" >
      <div class="v-container-content v-container-box-shadow">
        <div style="height: 60px;border-bottom-style: solid;border-bottom-color: #e8eaec;border-bottom-width:1px; ">
          <p style="text-align: center;margin-top: 9px;font-size: 24px">欢迎注册学术会议管理系统</p>
        </div>
        <div class="v-form-container ">
          <div>
            <p style="display: block;margin-left: 35px;margin-bottom:20px;font-size: 20px;font-family: 'Microsoft YaHei'"></p>
          </div>
          <!-- 登录表单-->
          <register-form></register-form>
          <div style="width: 120%;height:40px;margin-top: 50px">
            <div style="display: block;float: left;color: #2db7f5">
              <check-box style="margin-left: 20%;"></check-box>
            </div>
            <div style="display: block;float: left;color: #2db7f5">
              <a href="#">《学术会议管理网站服务条款》</a>
            </div >
            <div style="display: block;float: left;color: #2db7f5">
              <a href="#" >《法律声明和隐私权政策》</a>
            </div>
          </div>
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
  import RegisterForm from "../components/RegisterForm";
  import RHeader from "../components/RHeader";
  import CheckBox from "../components/CheckBox";
  import LFooter from "../components/LFooter";

    export default {
        name: "register-page",
        components:{
            CheckBox,
            RegisterForm,
            RHeader,
            LFooter,
        }
    }
</script>

<style scoped>

</style>
