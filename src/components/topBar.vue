<template>
    <div class="topBar">
        <div class="goback"></div>
        <span>{{topTitle}}</span>
    </div>
</template>

<script>
export default {
    props:{
        topTitle:String
    },
}
</script>

<style scoped>
    .topBar{
        width: 100%;
        height: 0.44rem;
        background: #F7F7F7;
        border-bottom: 0.02rem solid #D8D8D8;
        line-height: 0.44rem;
        text-align: center;
        position: fixed;
        z-index: 999
    }
    .goback{
        height: 0.16rem;
        position: absolute;
        left: 0.1rem;
        top: 0.15rem;
        font-size: 0.2rem;
    }
    .topBar>span{
        font-size: 0.18rem;
    }
</style>
