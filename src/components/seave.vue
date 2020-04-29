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
    width: 354px;
    height: 36px;
    border: 1px solid #000;
    border-radius: 17px;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    i {
      font-size: 18px;
      margin-left: 20px;
    }
    input {
      width: 100%;
      height: 100%;
      border: 0;
      margin-left: 20px;
      background-color: #999;
    }
  }
}
</style>