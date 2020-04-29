<template>
  <div>
    <van-tabs class="nav">
      <van-tab v-for="item in navList" :title="item.title" :key="item.id" @click="fun(item.id)">
        <div class="box">
          <div class="center_" v-for="(v,i) in item.center" :key="v.id" @click="fun(i)">
            <div class="img_">
              <img src="../assets/logo.png" alt />
            </div>
            <div class="right">
              <p>{{v.title}}</p>
              <div class="right_bottom">
                <span class="but">{{v.butA}}</span>
                <span class="but">{{v.butB}}</span>
                <span class="qian">{{v.qian|add}}</span>
                <span>{{v.xianjia|add}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  props: {
    navList: Array
  },
  filters: {
    add(val) {
      return "$" + val;
    }
  },

  methods: {
    fun(index) {
      window.console.log(index + 1);
    }
  }
};
</script>
<style lang="less" >
.nav {
  position: relative;
  top: 10px;
}
.box {
  padding: 0 0 10px;

}
</style>