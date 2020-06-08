<template>
  <div>
    <header class="header">
      <div style="height: 80px;box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);">
        <div style="width: 50%;height:79px;float: left">
          <img class="navbar-brand-logo" src="./../assets/image/logo.png">
        </div>
        <div  style="width:200px;display: inline-block;position: absolute;top:15px;bottom: 0;left: 240px;right: 0 ">
          <span style="font-size: 26px;color: #ff6a00;border-left: 1px solid #999 ; padding-left: 5px"> 找回密码</span>
        </div>
        <div style="width: 10%;height:79px;float: right;">
          <div style="margin: 25px">
            <a href="#" @click="toFirst">首页</a>
          </div>
        </div>
      </div>
    </header>
    <div class="v-container-body" >
      <div class="v-container-content v-container-box-shadow">
        <div style="height: 60px;border-bottom-style: solid;border-bottom-color: #e8eaec;border-bottom-width:1px; ">
        </div>
        <div class="v-form-containe " style="padding-bottom: 50px">
          <div>
            <p style="display: block;margin-left: 35px;margin-bottom:20px;font-size: 20px;font-family: 'Microsoft YaHei'"></p>
          </div>
          <!-- 登录表单-->
          <div style="margin: 90px">
            <Form ref="formValidate" style="margin-bottom: 100px" :model="formValidate1" :rules="ruleValidate" :label-width="80">
              <div style="width: 600px;margin: 15px">
                <FormItem label="用户名" prop="username">
                  <Input v-model="formValidate1.username" style="width: 400px" placeholder="输入用户名"></Input>
                </FormItem>
              </div>
              <div style="width: 600px;margin: 15px;display: block" >
                <FormItem label="邮箱" style="display: block" prop="email">
                  <div style="display: block;width: 100%">
                    <div style="display: block;width: 300px;float: left">
                      <Input v-model="formValidate1.email" style="width: 400px" placeholder=""></Input>
                    </div>
                  </div>
                </FormItem>
              </div>
              <FormItem style="margin: 40px;margin-left: 10px">
                  <Button type="primary" style="width: 400px"  @click="handleSubmit('formValidate')">
                    <div v-if="this.codeissended===0">密码初始化</div>
                    <div v-if="this.codeissended!==0">重新获取</div>
                  </Button>
              </FormItem>
            </Form>
          </div>
          <!--<login-from v-bind:pag="msg"></login-from>-->
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
        name: "findpassword",
        data(){
            return{
                codeissended:0,
                msg:'',
                formValidate1: {
                    email: '',
                    username:'',
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '用户名不可为空', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '邮箱不可为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                },
            }
        },
        components:{
            LHeader,
            LoginFrom,
            LFooter,
        },
        methods:{
            toFirst(){
                this.$router.push('/');
            },

            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                       // this.formValidate.username=window.sessionStorage.getItem('username');
                        console.log(this.formValidate1.email+this.formValidate1.username);
                        let url='http://localhost:8671/nconf-gateway/api-conf-service/conf-service/user/findpassword?userName='
                        +this.formValidate1.username
                        +'&email='+this.formValidate1.email;
                        this.$http.post(url).then((response)=>{
                            if (response.status===200){
                                // console.log(response.data);
                                if(response.data.code===200){
                                    this.code++;
                                    this.$Message.success('邮件已发送到：'+this.formValidate1.email+'请查收！');
                                }
                                else {
                                    this.$Message.error(response.data.message);
                                }
                            }
                            else if (response.status===504){
                                this.$Message.error('请求超时，请重试!');
                            }
                            else {
                                this.$Message.error('失败'+response.status);
                            }
                        }).catch();
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
