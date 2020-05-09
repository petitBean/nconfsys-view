<template>
  <Form ref="loginFormRef" :model="formInline" :rules="ruleInline" inlne>
    <FormItem prop="user">
      <Input type="text" class="v-input" v-model="formInline.user" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password"  class="v-input" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" style="height: 38px;background-color: #2d8cf0;border-color: #2d8cf0" class="v-input" @click="login">登录</Button>
    </FormItem>
    <div style="height: 40px;float: top">
      <div style="margin-right: 10px;float: right">
        <a href="/#" style="">免费注册</a>
      </div>
      <div style="margin-right: 10px;float: right">
        <a href="/#" style="">忘记密码</a>
      </div>
    </div>
  </Form>
</template>

<script>
    export default {
        name: "LoginFrom",
        components:{

        },
        data () {
            return {
                //表单绑定的数据
                formInline: {
                    user: '',
                    password: '',
                },

                //表单验证规则
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { max:15,type: 'string', min: 6, message: '密码至少6位', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                window.sessionStorage.clear();
            },
            login() {
                //登录前表单预验证
                this.$refs.loginFormRef.validate( (valid)=>{
                    if (!valid){
                        return;
                    }
                    let loginUrl='http://localhost:8671/nconf-gateway/api-auth-service/auth-service/oauth/token?client_id=c1&client_secret=secret&grant_type=password&redirect_url=http://www.baidu.com&username='
                                 +this.formInline.user+'&password='+this.formInline.password;
                    let confirmUrlBase='http://localhost:8671/nconf-gateway/api-auth-service/auth-service/oauth/check_token?token=';
                    let message=this.$Message;
                     this.$http.post(loginUrl).then((response)=>{
                         let res=response.data;
                         let access_token='';
                         //登录成功
                         if (response.status===200){
                            access_token=res.access_token;
                             this.$Message.success('登录成功！');
                             //保存用户信息
                             //保存token
                             window.sessionStorage.setItem("token",access_token);
                         }
                         //校验token
                         this.$http.post(confirmUrlBase+access_token).then((resp)=>{
                             if(resp.status!==200){
                                 return;
                             }
                             //保存用户名
                             let username=resp.data.user_name;
                             window.sessionStorage.setItem("username",username);
                         }).catch(function (error) {
                             window.sessionStorage.clear();
                             message.error("系统异常！");
                         });
                         //跳转到首页
                         this.$router.push('/home');
                     }).catch(function (error) {
                         if (error.response) {
                             let status=error.response.status;
                             //失败，判断主要的几个状态
                             if(status===504){
                                message.warning("网络异常，请重试！");
                                 return;
                             }
                             if (status===500){
                                 message.error("系统异常！");
                             }
                             message.error("用户名或者密码不正确！");
                         } else if (error.request) {
                              message.error("系统异常！");
                         } else {
                             console.log('Error', error.message);
                             message.error("系统异常！");
                         }
                         console.log(error.config);
                     });

                });
            }
        }
    }
</script>

<style scoped>

</style>
