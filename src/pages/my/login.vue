<template>
  <div>
    <span>密码</span>
    <input type="text" v-model="value" />
    <button @click="login()">登录</button>
    <button @click="payment()">退出</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "1234"
    };
  },
  methods: {
    login() {
      window.sessionStorage.setItem("token", this.value);
       alert("登录成功")
      this.$router.push({
        name:"my-top",
        params:{login: this.value}
      })
    },
    payment(){
        this.$router.push("/")
    }
  }
};
</script>
<style lang="less" scoped>
</style>
