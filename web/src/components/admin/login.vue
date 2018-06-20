<style>
    .login {
        width: 100%;
        min-height: 900px;
        height: 100%;
        background-image: url('../../../static/img/login-banner.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .login-con {
        position: absolute;
        right: 160px;
        top: 50%;
        -webkit-transform: translateY(-60%);
        transform: translateY(-60%);
        width: 300px;
    }
    .form-con {
        padding: 10px 0 0;
    }
    .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
    }
</style>

<template>
    <div class="login">
        <div class="login-con">
            <el-card :bordered="false">
                <p slot="title">
                    <i class="el-icon-share"></i>
                    欢迎登录
                </p>
                <div class="form-con">
                    <el-form ref="loginForm" :model="form" :rules="rules">
                        <el-form-item prop="userName">
                            <el-input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend"><i class="el-icon-share"></i></span>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend"><i class="el-icon-share"></i></span>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="handleSubmit" type="primary" long>登录</el-button>
                        </el-form-item>
                    </el-form>
                    <p class="login-tip">输入用户名和密码</p>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    userName: 'admin',
                    password: ''
                },
                rules: {
                    userName: [{
                        required: true,
                        message: '账号不能为空',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            handleSubmit() {
                let date = new Date()
                this.$cookie.set('user', this.form.userName, date)
                this.$cookie.set('password', this.form.password, date)
                // this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                this.$router.push({
                    path: '/admin/addarticle'
                });
            }
        }
    };
</script>