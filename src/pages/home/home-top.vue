<template>
  <div id="box">
    <!-- 标题 -->
    <TopBar topTitle="敬选生活" />
    <!--空的盒子 -->
    <div class="null_"></div>
    <!-- 搜索框 -->
    <Seave />
    <img src="../../assets/aa.jpg" v-if="bools" style="width:100%;height:300px"/>

    <!--      <p>{{chanpin}}</p>-->
    <ul v-for="v in chanpin" :key="v.description" v-else>
      <li>{{v.description}}</li>
    </ul>

    <!-- 轮播图 -->
    <Banner :swipea="swipea" />
    <!--轮播图下面的四个分类-->
    <List :listDome="listDome" />
    <!--秒杀-->
    <Miaosha :listDome="listDome" v-show="bool" @fu="dome" />
    <!-- 导航 -->
    <div>{{textA}}</div>
    <Nav :navList="navList"></Nav>
    <!-- 返回顶部 -->
    <button @click="backtop" class="but">回到顶部</button>
    <!-- 我是有底线的 -->
    <div class="bottom_">我是有底线的。。。</div>
    <!--一个空盒子-->
    <div class="null_"></div>
    <!-- 底部路由按钮 -->
    <BottomBar />
  </div>
</template>
<script>
import BottomBar from "@/components/bottomBar.vue";
import TopBar from "@/components/topBar.vue";
import Seave from "@/components/seave.vue";
import Banner from "@/components/banner.vue";
import List from "@/components/list.vue";
import Miaosha from "@/components/miaosha.vue";
import Nav from "@/components/nav.vue";
import { Loading } from "vant";
export default {
  components: {
    Banner,
    BottomBar,
    List,
    Miaosha,
    Nav,
    TopBar,
    Seave
  },
  data() {
    return {
      chanpin: {},
      bools: true,
      textA: "",
      bool: true,
     
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
      ],
      navList: [
        {
          title: "电影",
          id: "001",
          center: [
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            },
            {
              img: "A",
              title:
                "A根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "002",
          center: [
            {
              img: "A",
              title:
                "B根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "11111",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "003",
          center: [
            {
              img: "A",
              title:
                "C根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "004",
          center: [
            {
              img: "A",
              title:
                "D根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "005",
          center: [
            {
              img: "A",
              title:
                "E根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "006",
          center: [
            {
              img: "A",
              title:
                "F根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "007",
          center: [
            {
              img: "A",
              title:
                "G根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        },
        {
          title: "电影",
          id: "008",
          center: [
            {
              img: "A",
              title:
                "H根据后台123性管理中配123的123性内容展示 展示使用TAB根据后台123性管理中配123的123性内容展示 展示使用TAB",
              butA: "用心选材",
              butB: "优雅高贵",
              qian: "8888",
              xianjia: "666"
            }
          ]
        }
      ],
      swipea: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    };
  },
  mounted() {
     window.addEventListener("scroll",this.showbtn);

    if (this.listDome.length === 0) return (this.bool = !this.bool);
    const that = this;
    that
      .axios({
        url: "/api",
        method: "post"
      })
      .then(ok => {
        window.console.log(ok.data.definitions);
        console.log(ok.data.definitions);
        if (this.chanpin != 0) {
          that.chanpin = ok.data.definitions.产品保费.properties;
          that.bools = false;
        }

        window.console.log(this.chanpin.length);
      });
  },
  methods: {
   
     // 显示回到顶部按钮
       showbtn(){
          let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          that.scrollTop = scrollTop
       },
      /**
        * 回到顶部功能实现过程：
        * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
        * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
        * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
        * 4. 最后记得在移动到顶部时，清除定时器
      */
      backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
    },
    dome(text) {
      this.textA = text;
      window.console.log(this.textA);
    }
  }
};
</script>
<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
  // background-color: rosybrown;
}
.null_ {
  width: 100%;
  height: 0.5rem;
}
.but {
  position: fixed;
  right: 0.05rem;
  bottom: 0.8rem;
}
.bottom_ {
  text-align: center;
  line-height: 0.5rem;
  letter-spacing: 0.05rem;
}
ul{
  -webkit-font-size: 0.01rem;
 
}
</style>
