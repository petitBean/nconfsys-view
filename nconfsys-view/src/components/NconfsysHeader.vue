<template>
  <!-- 头部内容 -->
  <header class="header">
    <div style="height: 80px;box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);">
      <div style="width: 50%;height:79px;float: left">
        <img class="navbar-brand-logo" src="./../assets/image/logo.png">
      </div>
      <div  style="width:100px;display: inline-block;position: absolute;top:15px;bottom: 0;left: 240px;right: 0 ">
        <span style="font-size: 26px;color: #ff6a00;border-left: 0px solid #999 ; padding-left: 5px"> </span>
      </div>
      <div style="margin-right: 50px">
        <div style="width: 60px;height:79px;float: right;">
          <div style="margin: 25px 80px 25px 0px;">
            <drop-down-menu></drop-down-menu>
          </div>
        </div>
        <div v-show="islogin" style="width: 50px;height:79px;float: right;">
          <div class="a-hover" style="margin: 30px 0 20px 0px; color: black">
            <a  href="#" @click="toRegister">注册</a>
          </div>
        </div>
        <div v-if="islogin" style="width: 50px;height:79px;float: right;">
          <div class="a-hover" style="margin: 30px 0px 20px 0 ;color: black">
            <a  href="#"  @click="toLogin" >登录</a>
          </div>
        </div>
      </div>

    </div>
  </header>

  <!-- 购物车商品内容 -->
</template>

<script>
  import DropDownMenu from "./DrowpDownMenu";
    export default {
        name: "NconfsysHeader",
        props:[ ],
        components:{
            DropDownMenu,
        },
        data(){
            return{
                islogin:true,
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                let token=window.sessionStorage.getItem('token');
                if (token!==null){
                    this.islogin=false;
                }
            },
            toLogin(){
                this.$router.push('/user-login');
            },
            toRegister(){
                this.$router.push('/user-register');
            }
        }
    }
</script>

<style scoped>

</style>
