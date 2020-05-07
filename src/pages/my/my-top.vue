<template>
  <div>
    <TopBar topTitle="个人中心" />
    <div class="null_"></div>
    <div class="my_top">
      <img src="../../assets/logo.png" />
      <p @click="login" v-show="bool">{{name}}</p>
      <p v-show="bools" @click="showPopup">{{logins}}</p>
    </div>
    <div class="my_bottom">
      <div class="my_bottom_list">
        <img src="../../assets/logo.png" />
        <p>我的订单</p>
      </div>
      <div class="my_bottom_list">
        <img src="../../assets/logo.png" />
        <p>联系客服</p>
      </div>
      <div class="my_bottom_list">
        <img src="../../assets/logo.png" />
        <p>投诉建议</p>
      </div>
      <button @click="del">退出</button>
    </div>
    <van-popup v-model="show">
      <div class="inp_">
        修改用户名称：
        <input type="text" ref="ok_" maxlength="5" :value="logins"/>
        <button @click="ok">确定</button>
      </div>
    </van-popup>
    <BottomBar />
  </div>
</template>
<script>
import TopBar from "@/components/topBar";
import BottomBar from "@/components/bottomBar";
export default {
  components: {
    BottomBar,
    TopBar
  },
  data() {
    return {
      name: "登录注册",
      logins: "",
      bool: false,
      bools: true,
      show: false,
      okname: ""
    };
  },
  created() {
    this.logins = window.sessionStorage.getItem("token");
    if (this.logins === null) {
      this.bool = true;
    }
    window.console.log(this.logins);
  },
  methods: {
    ok() {
      this.show = false;
      this.logins = this.$refs.ok_.value;
    
      window.sessionStorage.setItem("token", this.logins);
      window.console.log(this.logins);
    },
    del() {
      if (confirm("您确定退出登录吗") ) {
        window.sessionStorage.clear();
        this.bools = false;
        this.bool = true;
        // this.$router.push("/login");
      }
    },
    login() {
      this.$router.push("/login");
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style lang="less" scoped>
.null_ {
  height: 50px;
}
.my_top {
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 100px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    box-shadow: 0 0 10px #cccccc;
  }
  p {
    margin-left: 20px;
    font-size: 24px;
    font-weight: bold;
  }
}
.my_bottom {
  box-sizing: border-box;
  padding: 0 20px;

  .my_bottom_list {
    display: flex;
    align-items: center;
    margin: 10px 0;
    img {
      width: 50px;
      height: 50px;
      border: 1px solid #000;
      border-radius: 50px;
      padding: 10px;
      box-sizing: border-box;
    }
    p {
      margin-left: 20px;
      font-size: 18px;
    }
  }
}
.inp_ {
  width: 300px;
  height: 100px;
  /*background-color: #39a9ed;*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}
</style>
