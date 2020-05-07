<template>
  <div>
    <!-- 我是轮播图下面的四个块块图 -->
    <div class="list-top" v-for="(item,i) in list" :key="i" @click="fun(i)">
      <div class="list">{{item.img}}</div>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { img: "a", title: "A" },
        { img: "b", title: "B" },
        { img: "c", title: "C" },
        { img: "d", title: "D" }
      ]
    };
  },
  methods: {
    fun(index) {
      window.console.log(index);
      this.$router.push("/cate")
    }
  }
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.05rem;
  background-color: #fff;
  .list-top {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .list {
    width: 0.4rem;
    height: 0.4rem;
    border: 0.01rem solid #000;
    display: flex;
  }
}
</style>
