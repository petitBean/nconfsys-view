<template>
  <!-- 头部内容 -->
  <header class="header">
    <div style="height: 80px;box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);">
      <div style="width: 50%;height:79px;float: left">
        <img class="navbar-brand-logo" src="./../assets/image/logo.png">
      </div>
      <div  style="width:100px;display: inline-block;position: absolute;top:15px;bottom: 0;left: 240px;right: 0 ">
        <span style="font-size: 26px;color: #ff6a00;border-left: 1px solid #999 ; padding-left: 5px"> 登录</span>
      </div>
      <div style="width: 10%;height:79px;float: right;">
        <div style="margin: 25px">
          <a href="#" @click="toFirst">首页</a>
        </div>
      </div>
    </div>
  </header>

  <!-- 购物车商品内容 -->
</template>

<script>
    export default {
        name: "LHeader",
        props:['pag'],
        methods:{
            toFirst(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
