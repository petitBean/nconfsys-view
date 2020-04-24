<template>
  <Dropdown style="margin-left: 20px">
    <Button type="primary">
      设置
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <DropdownMenu slot="list">
      <DropdownItem>修改密码</DropdownItem>
      <DropdownItem>编辑资料</DropdownItem>
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
            }
        }

    }
</script>
