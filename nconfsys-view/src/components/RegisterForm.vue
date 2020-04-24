<template>
  <div>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="用户名" prop="username" >
        <Input type="text" v-model="formCustom.username" number placeholder="请输入你的用户名"></Input>
      </FormItem>
      <FormItem label="密   码" prop="password" >
        <Input type="password" v-model="formCustom.password" placeholder="请输入你的密码"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwordCheck">
        <Input type="password" v-model="formCustom.passwordCheck" placeholder="请再次输入你的密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" style="width: 100%" @click.native="register">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>

    export default {
        name:'RegisterForm',
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                else {
                    if (this.formCustom.passwordCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwordCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.password) {
                    callback(new Error('两次输入的密码不同!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不可为空'));
                }
                // 模拟异步验证效果
               else if (!Number.isInteger(value)) {
                   return  callback(new Error('用户名只可包含数字'));
                }
               else if (value<1000000){
                    return  callback(new Error('用户名必须大于6位'));
                }
                else if (value>999999999999){
                    return  callback(new Error('用户名必须小于12位'));
                }
              else {
                  callback();
                }
            };

            return {
                formCustom: {
                    password: '',
                    passwordCheck: '',
                    username: ''
                },
                ruleCustom: {
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { max:15,type: 'string', min: 6, message: '密码至少6位小于15位', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwordCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    username: [

                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            register(){
                this.$refs.formCustom.validate( (valid)=> {
                    if (!valid) {
                        return;
                    }
                    let regUrl = 'http://localhost:8671/nconf-gateway/api-auth-service/auth-service/register';

                    var params = new URLSearchParams();
                    params.append('userName', this.formCustom.username);
                    params.append('password', this.formCustom.password);
                    let message = this.$Message;
                    this.$http.post(regUrl, params).then((response) => {
                        console.log('UUUUUUUUU' + response.data.message);
                        let status = response.data.code;
                        let msg = response.data.message;
                        if (status === 200) {
                            this.$Message.success(msg);
                            this.$router.push('/user-login');
                        }
                        else {
                            this.$Message.error(msg);
                        }
                    }).catch((error) => {
                        let status = error.response.status;
                        message.error("系统异常！" + status)
                    });
                })
            },
      }
    }
</script>
