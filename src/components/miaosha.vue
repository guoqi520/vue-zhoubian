<template>
  <div>
    <div class="box">
      <div class="div_">
        <span class="solid"></span>
        <span>今日秒杀</span>
        <span class="solid"></span>
      </div>
      <div class="center_" v-for="(item,i) in listDome" :key="i" @click="fun(i)" >
        <div class="img_">
          <img src="../assets/logo.png"/>
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
    <div>
     <button @click="chuanzhi()">传值</button>
    </div>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      text:"我是传的值",
      
    }
  },
  props: {
    listDome: Array
  },
  filters: {
    add(val) {
      return "￥" + val;
    }
  },
  methods: {
    fun(id) {
      this.$router.push({
        name: "add",
        params: { list: { id: id, text: "我是组件" } }
      });
    },
    chuanzhi(){
      this.$emit("fu",this.text)
      window.console.log(this.text)
    }
  },
  mounted(){
  //   this.axios({
  //     url:" http://localhost:8080/",
  //     method:"get",
  //     params:{}
  //   }).then((ok)=>{
  //     window.console.log(ok)
  //   })
  }
};
</script>
<style lang="less" >

.box {
  padding-top: 0.1rem;
  background-color:rgb(222, 222, 231);

.div_ {

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 0.6rem;
  background-color: #fff;
  position: relative  ;
  top: 0.2rem;
  font-size: 0.18rem;
  // transform: translate(0,20px);
  transform: translateZ(0);//阻止轮播图带动下面的字体跳动
  clear:both;
  border-top:0.2rem;
  // float: none;
  margin-bottom: 0.2rem;
  .solid {
    display: inline-block;
    width: 1rem;
    background-color: #000;
    border: 0.01rem solid #000;
  }
}
}
.center_ {
  width: 100%;
  height: 1rem;
  display: flex;
  box-sizing: border-box;
  padding: 0 0.1rem;
  background-color: #fff;
  border-bottom: 0.01rem solid  rgb(222, 222, 231);
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    p {
      font-size: 0.16rem;
      width: 100%;
      height: 0.4rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .right_bottom {
      .but {
        width: 0.5rem;
        height: 0.2rem;
        display: inline-block;
        background-color: #00d;
        margin-right: 0.05rem;
        font-size: 0.08rem;
        line-height: 0.2rem;
        text-align: center;
        border-radius: 0.1rem;
        margin-top: 0.1rem;
      }
      .qian {
        text-decoration: line-through;
      }
    }
  }
}
</style>