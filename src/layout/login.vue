<template>
  <div class="login flex flex-center">
    <q-form
      style="width: 500px"
      class="bg-cyan-2 q-pa-lg rounded-borders"
      ref="loginForm"
    >
      <div class="text-h4">登录</div>
      <q-input
        v-model="username"
        label="账号"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 3) || '请输入用户名',
          (val) => val === 'admin' || '用户名或密码输入有误',
        ]"
      />
      <q-input
        v-model="password"
        label="密码"
        type="password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || '请输入密码',
          (val) => val === 'zcc' || '用户名或密码输入有误',
        ]"
      />
      <q-btn
        :loading="loading"
        class="logon-btn bg-logon-card-input"
        text-color="black"
        unelevated
        label="登 录 系 统"
        @click="logon"
      >
      </q-btn>
    </q-form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      left: false,
      text: "",
      isPwd: "password",
      password: "",
      username: "",
      loading: false,
    };
  },
  methods: {
    logon() {
      this.$refs.loginForm.validate().then((success) => {
        if (success) {
          this.loading = !this.loading;
          if (this.username === "admin" && this.password === "zcc") {
            this.$router.replace("/home");
          }
        } else {
          return;
        }
      });

      console.log(1);
    },
  },
};
</script>
<style lang="stylus">

.login {
  height: 100vh;
  background: url('../assets/login.jpg') no-repeat center;
  background-size: cover;
}
.logon-btn {
  font-size: 16px
  margin-top: 0px
  margin-bottom: 20px
  width: 100%
}
.bg-logon-card-input{
  background: linear-gradient(to right, #36d1dc 1%, #5b86e5 99%);
  transition: all 0.3s ease-in-out;
  background-size: 200% auto;
}
.bg-logon-card-input:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #5b86e5;
}
</style>
