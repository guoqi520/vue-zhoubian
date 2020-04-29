<template>
  <div>
    <TopBar topTitle="商品详情"></TopBar>
    <div class="null_"></div>
    <div>{{text}}</div>
    <div class="banner">
      <van-swipe class="my-swipe" :show-indicators="true" :height="350" @change="onChange">
        <van-swipe-item v-for="(v,i) in swipe" :key="i">
          <p v-for="(v,i) in textDome" :key="i">{{v}}</p>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{swipe.length}}</div>
          <div class="left">已售10</div>
        </template>
      </van-swipe>
    </div>
    <!-- 标题栏 -->
    <div class="center_">
      <div class="center_title">上海迪士尼3日私家小团#连住两晚迪士尼度假区+含迪士尼门票+24H专车</div>
      <div class="center_but">
        <span>酒店连住</span>
        <span>亲子精选</span>
        <span>专车转导</span>
      </div>
      <div class="center_map">地址：上海市虹口区海伦路440号</div>
    </div>

    <!-- 套餐栏 -->
    <div class="index">
      <div class="taocan">
        <div class="taocan_">
          <h2>选择套餐</h2>
          <div class="taocan_title">
            <p>上海迪士尼3日私家小团#连住两晚迪士尼度假区+迪士尼门票+24H专车</p>
            <div class="taocan_but">
              <span>￥11.2</span>
              <span>立即抢购</span>
            </div>
          </div>
          <div class="taocan_title">
            <p>上海迪士尼3日私家小团#连住两晚迪士尼度假区+迪士尼门票+24H专车</p>
            <div class="taocan_but">
              <span>￥11.2</span>
              <span v-show="bool">立即抢购</span>
              <span>无货</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 购买须知 -->
    <div style="width:100%;height:300px">
      <h2>购买须知</h2>
    </div>
    <div style="width:100%;height:300px">
      <h2>详情须知</h2>
    </div>
    <!-- 空盒子 -->
    <div class="null_"></div>
    <div class="null_"></div>

    <!-- 底部购买区域 -->
    <div class="bottom_bar">
      <div class="bottom_bar_left">
        <span>售前咨询</span>
        <span>售前咨询</span>
      </div>
      <div class="bottom_bar_right" @click="submit()">立即抢购</div>
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/topBar.vue";
export default {
  components: {
    TopBar
  },
  data() {
    return {
      text:"",
      bool: false,
      textDome: [],
      current: 0,
      swipe: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    };
  },
  created() {
    // A跳转到B，B页面停留在A页面的滚动位置；解决方法：将scrollTop设置为0
    window.scroll(0, 0);
    // 记录浏览次数
    if (localStorage.pagecount) {
      localStorage.pagecount = Number(localStorage.pagecount) + 1;
    } else {
      localStorage.pagecount = 1;
    }
    window.console.log("当前 " + localStorage.pagecount + " 人观看");
    this.text =  "当前 " + localStorage.pagecount + " 人观看"
  },
  mounted() {
    this.textDome = this.$route.params.list;
    window.console.log(this.textDome);
    window.sessionStorage.setItem("key", JSON.stringify(this.textDome));
  },
  methods: {
    onChange(index) {
      this.current = index;
      // console.log(index);
    },
    fun() {
      window.console.log(1);
      window.sessionStorage.clear();
    },
    submit() {
      this.$router.push("/submit");
    }
  }
};
</script>
<style lang="less" scoped>
div {
  .banner {
    transform: translate(0); //阻止轮播图带动下面的字体跳动
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .null_ {
    width: 100%;
    height: 50px;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .left {
    position: absolute;
    left: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .index {
    transform: translateZ(0); //阻止轮播图带动下面的字体跳动
  }
  .center_ {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .center_title {
      font-size: 16px;
    }
    .center_but {
      span {
        display: inline-block;
        width: 80px;
        height: 30px;
        background-color: Silver;
        margin-right: 10px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
      }
    }
  }
  .taocan {
    width: 100%;
    height: 250px;
    background-color: #cccccc;

    .taocan_ {
      width: 100%;
      height: 237px;
      box-sizing: border-box;
      padding: 15px;
      background-color: #fff;
      position: relative;
      top: 15px;
      h2 {
        font-weight: bold;
      }
      .taocan_title {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-size: 16px;
          margin-top: 15px;
        }
        .taocan_but {
          display: flex;
          justify-content: space-between;
          span:nth-child(1) {
            display: inline-block;
            width: 100px;
            height: 25px;
            // background-color: #0066ff;
            text-align: center;
            line-height: 25px;
            font-size: 16px;
            color: #ff6600;
            display: flex;
          }
          span:nth-child(2) {
            display: inline-block;
            width: 100px;
            height: 25px;
            background-color: #0066ff;
            text-align: center;
            line-height: 25px;
            font-size: 14px;
            border-radius: 15px;
            color: #fff;
          }
          span:nth-child(3) {
            display: inline-block;
            width: 100px;
            height: 25px;
            background-color: #cccccc;
            text-align: center;
            line-height: 25px;
            font-size: 14px;
            border-radius: 15px;
            color: #fff;
          }
        }
      }
    }
  }
  .bottom_bar {
    width: 100%;
    height: 50px;
    background-color: silver;
    position: fixed;
    bottom: 0px;
    // transform: translate(0,-500px);
    display: flex;
    justify-content: space-between;
    //
    .bottom_bar_left {
      span {
        display: inline-block;
        width: 35px;
        height: 35px;
        border: 1px solid #000;
        border-radius: 50%;
        padding: 5px;
        text-align: center;
        margin-left: 20px;
      }
    }
    .bottom_bar_right {
      width: 130px;
      height: 100%;
      background-color: #0066ff;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>