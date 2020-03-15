<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inlne>
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
      <Button type="primary" style="height: 38px;background-color: #ff6a00;border-color: #ff6a00" class="v-input" @click="handleSubmit('formInline')">登录</Button>
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
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
