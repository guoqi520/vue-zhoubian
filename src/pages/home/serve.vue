<template>
    <div>
        <div class="inp">
            <div class="center">
                <i>9</i>
                <input type="text" placeholder = "请输入您想要搜索的内容" v-model="serve" >
            </div>
             <span style="font-size:20px" @click="fun()">搜索</span>
        </div>
        <span v-for="(item,i) in searchArr " :key="i">{{item}}</span>
        <div  v-show="flag" @click="qing()">清空历史记录</div>

    </div>
</template>
<script>
 import { Dialog } from 'vant';
export default {
    data() {
        return {
            serve:"",
            searchArr:[],
            flag:false

        }
    },
    methods:{
        fun(){
           window.console.log(this.serve) 
           window.sessionStorage.setItem('key',this.serve)
           if(this.serve){
               this.searchArr.push(this.serve)
               this.serve=""
               this.flag = true
           }
        },
        qing(){
            Dialog.confirm({
                message: '是否清空历史记录?'
            }).then(() => {
                this.searchArr=[];
                this.flag=false;
            }).catch(() => {
                return
            });
        }
    }
}
</script>
<style lang="less" scoped>
.inp{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    // background-color: red  ;
 .center{
    //  background-color: #999;
     width: 200px;
     height:36px;
     border: 1px solid #000;
     border-radius: 17px;
     margin: 15px 0;
     display: flex;
    justify-content: space-between;
    align-items: center;
     overflow: hidden;
    i{
        font-size: 18px;
        margin-left: 20px;
    }
    input{
        width: 100%;
        height:100%;
        border: 0;
        margin-left: 20px;
    //    background-color: #999;
    }
 }
}
</style>