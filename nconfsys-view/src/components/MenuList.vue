<template>
  <Menu :theme="theme3" active-name="1">
    <MenuGroup title="">
      <MenuItem v-for="item in itemlist"  :name= item.nam  @click.native="_menu_click">
        {{item.message}}
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>
<script>
    export default {
        props:["itemlist"],
        name:'MenuList',
        data () {
            return {
                theme3: 'primary',
            }
        },
        methods:{
            _menu_click(){
                console.log("item");
            }
        }
    }
</script>
