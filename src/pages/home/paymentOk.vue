<template>
    <div>
        我是支付成功页面
        <button @click="shopping()">继续购买</button>
    </div>
</template>
<script>
export default {
    methods:{
        shopping(){
            this.$router.push("/home-top")
        }
    }
}
</script>
<style lang="less" scoped>

</style>