<template>
    <div>
        <div class="bottombar">
            <router-link to="/home-top" tag="div"><div class="tu tua"></div>首页</router-link>
            <router-link to="/my-top" tag="div"><div class="tu tub"></div>我的</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bottombar{
        background-color: #fff;
        display: flex;
        width: 100%;
        height: 0.5rem;
        position: fixed;
        bottom: 0;
        font-size: 12px;
        text-align: center;
        padding-top:5px;
        box-sizing: border-box ;
        border-top: 1px solid rgb(222, 222, 231);
    }
    .bottombar>div{
       flex: 1;
    }
    .tu{
        width: 12%;
        height: 56%;
        margin-left:82px;
        background-image: url(../assets/bar.png);
        background-size: 1rem 0.5rem;
    }
    .tua{
        background-position: 100px 25px
    }
    .tub{
        background-position: 123px 25px
    }
    .router-link-active{
        color:#922846;
    }
    .router-link-active>.tua{
        background-position: 100px 50px;
    }
    .router-link-active>.tub{
        background-position:123px 50px;
    }
   
</style>
