<template>
    <div class="bgf5">
        <mt-header fixed title="密码登录">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <form action="">
            <div class="mgtop40">
                <mt-field label="账号"  v-model="form.account"></mt-field>
                <mt-field label="密码"  :type="mytype" v-model="form.password">
                    <mt-switch v-model="visibility" ></mt-switch>
                </mt-field>
                <mt-field label="验证码" v-model="form.captcha">
                    <img src="" height="45px" width="100px">
                </mt-field>
            </div>
        </form>
        <div class="padlr10 fs0-8 colred">
            <p>温馨提示:未注册过的账号，登录时自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
            <mt-button type="primary" size="large">登录</mt-button>
        </div>
        <div class="padlr10 mgtop10">
            <span class='col right'>重置密码?</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          account: '',
          password: '',
          captcha: ''
        },
        visibility: false
      }
    },
    watch: {
  
    },
    computed: {
      mytype: function () {
        return !this.visibility ? 'password' : ''
      }
    }
  }
</script>

<style scoped>

</style>