<template>
  <div id="box">
      <!-- 标题 -->
      <TopBar topTitle="敬选生活" />
      <!--空的盒子 -->
      <div class="null_"></div>
      <!-- 搜索框 -->
      <Seave />
      <!-- 轮播图 -->
      <Banner :swipea="swipea"/>
      <!--轮播图下面的四个分类-->
      <List :listDome="listDome"/>
      <!--秒杀-->
      <Miaosha :listDome="listDome" v-show="bool" @fu="dome"/>
      <!-- 导航 -->
       <div >{{textA}}</div>
      <Nav :navList="navList"></Nav>
      <!-- 返回顶部 -->
      <button @click="backTop" class="but">回到顶部</button>
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
      textA:"",
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
 async mounted() {
    if (this.listDome.length === 0) return this.bool = !this.bool;
  // await this.axios({
  //     url:"https://uat.apigateway.jz-ins.com/huijun",
  //     method:"post"
  //   }).then((ok)=>{
  //     window.console.log(ok)
  //   })
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    dome(text){
      this.textA = text
     window.console.log( this.textA)
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
  height: 50px;
}
.but {
  position: fixed;
  right: 5px;
  bottom: 80px;
}
.bottom_ {
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
}
</style>