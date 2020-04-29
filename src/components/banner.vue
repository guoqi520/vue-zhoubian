<template>
  <div>
    <van-swipe class="my-swipe" autoplay="1000" >
      <van-swipe-item
        v-for="(item,i) in swipea"
        :key="i"
        @click="banner(item.id)"
      >{{item.id}}+{{i+1}}={{swipea.length}}</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: {
    swipea: Array
  },
  methods: {
    banner(id) {
      window.console.log(id);
    }
  }
};
</script>
<style scoped lang="less">
div{
  width: 100%;
  height: 150px;
  
  .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  overflow: hidden;
}
.banner {
  background-color: rosybrown;
}
}

</style>