<template>
  <div>
    <TopBar topTitle="分类商品" />
    <div class="null"></div>
  
    <div class="cate_top">
      <div class="cate_top_left" @click="fun()">
        <span>分类/排序</span>
        <i>
          <van-icon name="arrow-up" v-show="!up" />
        </i>
        <i>
          <van-icon name="arrow-down" v-show="up" />
        </i>
      </div>
      <div class="cate_top_right">
        <span>9</span>
        <input type="text" placeholder="您想搜啥？" class="inp" />
      </div>
    </div>

    <transition name="slide-fade">
      <div style="display:none" v-show="up">
        <div class="cate_fenlei">
          <span>分类</span>
          <div
            class="cate_nav"
            v-for="(v,i) in fenlei"
            :key="i"
            @click="active(i)"
            :class="{active:i==ins}"
          >{{v.name}}</div>
        </div>
        <div class="nav">
          <span>排序</span>
          <span
            v-for="(v,i) in navA"
            :key="i"
            @click="navlist(i)"
            :class="{active:i == innav}"
          >{{v.name}}</span>
        </div>
        
      </div>
    </transition>

    <div class="center_" v-for="(item,i) in listDome" :key="i" @click="add(i)">
      <div class="img_">
        <img src="../../assets/logo.png" />
      </div>
      <div class="right">
        <p>{{item.title}}</p>
        <div class="right_bottom">
          <span class="but">{{item.butA}}</span>
          <span class="but">{{item.butB}}</span>
          <span class="qian">{{item.qian|add}}</span>
          <span>{{item.xianjia|add}}</span>
        </div>
      </div>
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
      text:"1234567890",
      ins: 0,
      innav: 0,
      up: false,
      navA: [{ name: "新品" }, { name: "销量" }, { name: "价格" }],
      fenlei: [
        { name: "美食天地" },
        { name: "热门景点" },
        { name: "游乐园" },
        { name: "度假酒店" },
        { name: "金典景点推荐" },
        { name: "推荐" }
      ],
      listDome: [
        {
          img: "A",
          title:
            "根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
          butA: "用心选材",
          butB: "优雅高贵",
          qian: "8888",
          xianjia: "666"
        },
        {
          img: "A",
          title:
            "根据后台123性管理中配123的123性内容展示 展示使用性管理中配123的123性内容展示 展示使用TAB",
          butA: "用心选材",
          butB: "优雅高贵",
          qian: "8888",
          xianjia: "666"
        },
        {
          img: "A",
          title:
            "根据后台123性管理中配123的123性内容展示 展示性管理中配123的123性内容展示 展示使用TAB",
          butA: "用心选材",
          butB: "优雅高贵",
          qian: "8888",
          xianjia: "666"
        },
        {
          img: "A",
          title:
            "根据后台123性管理中配123的123性内容展示 展示性管理中配123的123性内容展示 展使用TAB",
          butA: "用心选材",
          butB: "优雅高贵",
          qian: "8888",
          xianjia: "666"
        },
        {
          img: "A",
          title:
            "根据后台123性管理中配123的123性内容展示 展示使管理中配123的123性内容展示 展示使用TAB",
          butA: "用心选材",
          butB: "优雅高贵",
          qian: "8888",
          xianjia: "666"
        }
      ]
    };
  },
  created(){window.scroll(0,0)},
  computed:{
      newtext(){
        return this.text.split('').reverse().join('')
      }
  },
  filters: {
    add(val) {
      return "￥" + val;
    }
  },
  methods: {
    fun() {
      this.up = !this.up;
       window.scroll(0, 0);
    },
    add() {
      this.$router.push("/add");
    },
    active(num) {
      this.ins = num;
      window.console.log(this.newtext)
    },
    navlist(numA) {
      this.innav = numA;
    }
  }
};
</script>
<style lang="less" scoped>
div {
  //   background-color: #d8d8d8;
  // height: 100%;
  box-sizing: border-box;

  .null {
    height: 50px;
  }
  .active {
    background-color: #39a9ed;
    border: 1px solid #39a9ed;
  }
  .cate_top {
    padding: 0 15px;
    // margin-top: 10px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    .cate_top_left {
      display: flex;
      align-items: center;
      font-size: 16px;
      i {
        vertical-align: bottom;
      }
    }

    .cate_top_right {
      width: 250px;
      height: 50px;
      background-color: #d8d8d8;
      border-radius: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      span {
        margin-left: 20px;
      }
      .inp {
        font-size: 18px;
        width: 200px;
        height: 100%;
        border: 0;
        background-color: #d8d8d8;
      }
    }
  }
  .cate_fenlei {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      display: inline-block;
      width: 90px;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
    }
    div {
      line-height: 30px;
      //   background-color: red;
      padding: 0 10px;
      border: 1px solid #000;
      border-radius: 15px;
      margin-left: 20px;
    }
  }
  .nav {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    span:not(:first-child) {
      border: 1px solid #000;
      width: 60px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 10px;
    }
  }
}
.center_ {
  margin-top: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid rgb(222, 222, 231);
  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      font-size: 16px;
      width: 100%;
      height: 40px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .right_bottom {
      .but {
        width: 50px;
        height: 20px;
        display: inline-block;
        background-color: #00d;
        margin-right: 5px;
        font-size: 8px;
        line-height: 20px;
        text-align: center;
        border-radius: 10px;
        margin-top: 10px;
      }
      .qian {
        text-decoration: line-through;
      }
    }
  }
}

// vue动画
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>