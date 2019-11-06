<template>
    <div>
        <div class="header" style="background-image: url('static/image/u16.png');">
            <div class="login">
                <div class="login-img">
                    <img src="static/image/logo.png" alt="" style="width:60%;">
                </div>
                <div>
                    <mt-field label="账号:" placeholder="请输入账号" v-model="form.username"></mt-field>
                   
                    <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
                    <mt-button type="primary" style="width:100%" @click="login()">登录</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           loginForm:{

           },
           form:{
               username: null,
               password: null
           },
           rules: {
                name: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
                
            },
        }
    },
    methods: {
        loginHandle (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log(this.$refs[formName].validate);
            
            
          }
        });
      },
    login() {
        if (this.form.username != null && this.form.password != null) {
            this.$store.state.token = 'admin'
            this.$router.replace({path: '/'});

        }else {
            console.log(12);
            console.log(this.form.username);
            console.log(this.form.password);
            
        }
        
    }

    }
}
</script>
<style lang="less" scoper>
     
    .header {
        width: 100%;
        height: 100%;
        background-color: #0669AD;
        background-repeat:no-repeat;
        background-size:100%;
        background-position: left bottom;
        display: flex;
        justify-content: center;
        .login {
            margin-top: 100px;
            width: 500px;
            height: 500px;
            background: #1CC4F2;
            border-radius: 20px;
            .login-img {
            width: 100%;
            height: 200px;
            background-size:100%;
        }
        }
        
    }
</style>