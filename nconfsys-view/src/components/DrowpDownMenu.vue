<template>
  <Dropdown style="margin-left: 20px">
    <Button type="primary">
      设置
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <DropdownMenu slot="list">
      <DropdownItem @click.native="toPersonalCerter">个人中心</DropdownItem>
      <DropdownItem @click.native="toFirst">返回首页</DropdownItem>
      <DropdownItem  @click.native="logout">退出</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
    export default {
        name:'DropDownMenu',
        methods:{
            logout(){
                window.sessionStorage.clear();
                this.$router.push('/user-login');
            },
            toFirst(){
                this.$router.push('/home');
            },
            toPersonalCerter(){
                let username=window.sessionStorage.getItem('username');
                if (username===null){
                    this.$Message.error('请登录');
                    this.$router.push('/user-login');
                }
                else {
                    this.$router.push('/personal-center');
                }
            }
        }

    }
</script>
