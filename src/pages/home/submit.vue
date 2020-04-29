<template>
  <div>
    <TopBar topTitle="提交订单" />
    <div class="null_"></div>
    <div class="submit_">
      <div class="submit_top">
        <span>上海+迪士尼3日私家小团#连住2晚迪士尼度假区</span>
        <div class="submit_top_bottom">
          <span>￥10</span>
          <span>￥10000</span>
        </div>
      </div>
      <div class="submit_top">
        <span>上海+迪士尼3日私家小团#连住2晚迪士尼度假区+含迪士尼门票+24H专车</span>
        <div class="submit_top_bottom">
          <span>￥10</span>
          <span>￥10000</span>
        </div>
      </div>
      <div class="submit_top">
        <span>上海+迪士尼3日私家小团#连住2晚迪士尼度假区+含迪士尼门票+24H专车</span>
        <div class="submit_top_bottom">
          <span>￥10</span>
          <span>￥10000</span>
        </div>
      </div>
      <!-- 选择数量 -->
      <ul class="submit_ul">
        <li>
          <span>选择数量</span>
          <van-stepper v-model="value" button-size="20px" @change="fun()" />
        </li>
        <li>
          <span>姓名</span>
          <input type="text" placeholder="姓名" v-model="list.userName"/>
        </li>
        <li>
          <span>联系方式</span>
          <input type="text" placeholder="请输入手机号" v-model="list.phone"/>
        </li>
        <li>
          <span>备注</span>
          <p @click="show = true">输入你想要输入的内容，亲注意字数哦</p>
          <van-icon name="arrow" />
        </li>
      </ul>


    </div>
    <div class="null_"></div>
    <div class="submit_bottom">
      <div class="submit_bottom_left">
        <span>总计</span>
        <span>￥{{list.num}}</span>
      </div>
      <div class="submit_bottom_right" @click="submit()">提交</div>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/topBar";
export default {
  components: {
    TopBar
  },
  data() {
    return {
      value: "1个",
      zongjia: 11.5,
        
      show: false,
      list:{
        userName:"",
        phone:"",
         num: 11.5,
      }
    };
  },
  methods: {
    fun() {
      this.list.num = this.value * this.zongjia;
    },
    submit(){
      if(window.sessionStorage.getItem("token")){
          // alert("登录成功")
          this.$router.push("/payment")
          window.sessionStorage.setItem("name",JSON.stringify(this.list))
      }else{
        alert("您还没有登录")
        this.$router.push("/login")
      }
    }
  }
};
</script>
<style lang="less" scoped>
.null_ {
  height: 50px;
}
.submit_ {
  padding: 0 15px;
  box-sizing: border-box;
  .submit_top {
    width: 100%;
    height: 100px;
    border: 1px solid #006;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    box-sizing: border-box;
    span:nth-child(1) {
      font-size: 14px;
      display: inline-block;
    }
    .submit_top_bottom {
      span:nth-child(1) {
        color: red;
        font-weight: bold;
      }
      span:nth-child(2) {
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
  }
  .submit_ul {
    li {
      line-height: 40px;
      border-bottom: 1px solid #009;
      p {
        display: inline;
      }
    }
    li:nth-child(1) {
      display: flex;
    }
    span {
      width: 30%;
      display: inline-block;
    }
    input {
      border: 0;
    }
  }
}
.submit_bottom {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #999999;
  .submit_bottom_left {
    margin-left: 15px;

    span:nth-child(1) {
      font-size: 14px;
    }
    span:nth-child(2) {
      color: orangered;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  .submit_bottom_right {
    width: 150px;
    height: 50px;
    background-color: royalblue;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    margin-right: 1px;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
