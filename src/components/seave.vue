<template>
  <div>
    <div class="inp">
      <div class="center">
        <i>9</i>
        <input type="text" placeholder="请输入您想要搜索的内容" @focus="fun()" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    fun() {
      this.$router.push("/serve");
    }
  }
};
</script>
<style lang="less" scoped>
.inp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff ;
  .center {
    background-color: #999;
    width: 3.54rem;
    height: 0.36rem;
    border: 0.01rem solid #000;
    border-radius: 0.17rem;
    margin: 0.15rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    i {
      font-size: 0.18rem;
      margin-left: 0.2rem;
    }
    input {
      width: 100%;
      height: 100%;
      border: 0;
      margin-left: 0.2rem;
      background-color: #999;
    }
  }
}
</style>