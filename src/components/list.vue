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
  margin-top: 5px;
  background-color: #fff;
  .list-top {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .list {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    display: flex;
  }
}
</style>
