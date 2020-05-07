<template>
  <div>
    <TopBar topTitle="提交"></TopBar>
    <div style="height: 50px"></div>
    <div class="payment_top">
      <span>
        <van-count-down :time="time" @finish="finish" format="mm 分 ss 秒" />
      </span>
      <span>内未支付，订单将被取消</span>
    </div>
    <div class="payment_">
      <div class="payment_left">订单内容</div>
      <div>拉力赛打开电脑卡机上班打卡上班的教科开</div>
    </div>
    <div class="payment_">
      <div class="payment_left">订单编号</div>
      <div>1234567890</div>
    </div>
    <div class="payment_">
      <div class="payment_left">订单金额</div>
      <div>299.0</div>
    </div>
    <button @click="pay()" class="but">支付</button>

    <button @click="fun()" class="but">退出</button>
  </div>
</template>
<script>
import { Dialog } from "vant";
import TopBar from "@/components/topBar.vue";
export default {
  components: {
    TopBar
  },
  data() {
    return {
      time: 10 * 1000,
      num: "1234567899",
      flag: false
    };
  },
  created() {},
  beforeUpdate() {
    console.log(window.sessionStorage.setItem("key", this.time));
  },
  methods: {
    finish() {
      Dialog.alert({
        message: "未在规定时间内付款"
      })
        .then(() => {
          this.$router.push("/home-top");
          this.flag = false;
        })
        .catch(() => {
          return;
        });
    },
    fun() {
      window.sessionStorage.clear();
      this.$router.push("/home-top");
    },
    pay() {
      this.$router.push("/paymentok");
      let timedome = window.sessionStorage.setItem("key", this.time);
      console.log(timedome);
    }
  }
};
</script>
<style lang="less" scoped>
.payment_top {
  width: 100%;
  height: 100px;
  // background-color: #39a9ed;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
  border-bottom: 1px solid #999;
}
.payment_ {
  width: 100%;
  height: 50px;
  // background-color: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: 1px solid #999;
  font-size: 14px;
  .payment_left {
    width: 30%;
  }
}
.but {
  width: 90%;
  height: 50px;
  background-color: #3d3d3d;
  border: 0;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 50px;
  border-radius: 5px;
  color: #fff;
}
</style>
