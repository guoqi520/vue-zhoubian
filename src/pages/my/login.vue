<template>
  <div>
    <span>密码</span>
    <input type="text" v-model="valuea" ref="inpligon" maxlength="11" />
    <button @click="login()">登录</button>
    <button @click="payment()">退出</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valuea: "12345678901"
    };
  },
  methods: {
    login() {
      if(this.$refs.inpligon.value.length===11){
        window.sessionStorage.setItem("token", this.valuea);
        this.$router.push({name:"my-top", params:{login: this.valuea}
        })
        alert("登录成功")

      }else {
        alert("你的手机号码有误")
      }
    },
    payment(){
        this.$router.push("/")
    }
  }
};
</script>
<style lang="less" scoped>
</style>
