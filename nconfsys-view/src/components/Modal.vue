<template>
  <div style="">
    <div class="md-modal modal-msg md-modal-transition " v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeModal">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
           <!-- <p slot="message">你确认要删除此条数据吗?</p>-->
            <!--定义插槽-->
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <!--mdShow为true才显示,v-show只是改变display，dom一直在，v-if不是-->
    <div class="md-overlay" v-show="mdShow" @click="closeModal"></div>
  </div>

</template>

<script>
    export default {
        name: "modal",
        props:['mdShow'],
        methods:{
            closeModal(){
                //触发父组件的close方法关闭该子组件，不要在子组件直接修改父组件传过来的值，会导致被写死
                this.$emit('close');
            },
        }
    }
</script>

<style scoped>

</style>
