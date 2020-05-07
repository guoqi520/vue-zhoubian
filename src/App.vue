<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
/* 默认样式 */
/* .element::-webkit-scrollbar { width: 0 !important } */
html,body{ overflow-y:scroll;}
 /* html,body{ overflow:scroll; min-height:100%;} */
/* html{ overflow:-moz-scrollbars-vertical;} */
html{font-size: 26.67vw;}
ul,p,ol,dl,dd,h1,h2,h3,h5,h4,h6,hr,td,input,body{margin:0; padding: 0;}
a{text-decoration: none; color: #666;}
body{
	font-family: "microsoft yahei";
	font-size: 12px;
}
li{list-style:none;}
input,textarea,select,area{outline: none;}
img{vertical-align: top; /*display:block;*/ border:none;}
h1,h2,h3,h4,h5,h6,b,strong{font-weight: normal;}
em,i{font-style: normal;}
.clearfix:after{content: ""; display: block; clear: both; height: 0; overflow: hidden; visibility: hidden;}
.clearfix{zoom:1;}
.fl{float:left;}
.fr{float:right;}
.border0{border:none;}

</style>
