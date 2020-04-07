<template>
  <div>
    <Input search v-on:on-search="cli" style="width: 300px" :placeholder="placeholder" />
  </div>
</template>
<script>
    export default {
          name:'SearchBox',
          props:['placeholder'],
          methods:{
              cli(value){
                  alert(value);
              }
          }
    }
</script>
