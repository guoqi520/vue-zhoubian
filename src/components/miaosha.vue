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
  padding-top: 10px;
  background-color:rgb(222, 222, 231);

.div_ {

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: relative  ;
  top: 20px;
  font-size: 18px;
  // transform: translate(0,20px);
  transform: translateZ(0);//阻止轮播图带动下面的字体跳动
  clear:both;
  border-top:20px;
  // float: none;
  margin-bottom: 20px;
  .solid {
    display: inline-block;
    width: 100px;
    background-color: #000;
    border: 1px solid #000;
  }
}
}
.center_ {
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid  rgb(222, 222, 231);
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
</style>