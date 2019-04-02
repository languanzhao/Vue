<template>
    <div class="Classify">
     <Header>
          <template slot="left">
              <span class="iconfont">&#xe60a;</span>
          </template>
          <template slot="center">
              <form>
              <span class="iconfont">&#xe60a;</span>
                <input type="text" placeholder="输入商品名称/关键词">
              <span class="iconfont">&#xe60a;</span>
          </form>
          </template>
          <template slot="right">
              <span class="iconfont">&#xe60a;</span>
          </template>
      </Header>

    <div class="tab">
       <ul class="title">
          <li v-for="(item,i) of titleList" :key="item.id" :class="i === index ? 'on' : null" @click="toClick(i)">{{item.title}}</li>
       </ul>
       <div class="content">
         
              <ul v-for="(items,i) of conList" :key="i" :class="i === index ? 'on' : null">
                    <li v-for="(item,i) of items" :key="i">
                      <router-link :to="item.url">
                          <img :src="item.src" alt="">
                      </router-link>
                    </li>
              </ul>
            
       </div>
    </div>

    <MenuBar></MenuBar>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
    export default{
        name:"Classify",
        components:{
            Header
        },
        data(){
            return{
               index:0,
               titleList:[{
                    "id":1,
                    "title":"香器"
               },{
                    "id":2,
                    "title":"花器"
               },{
                    "id":3,
                    "title":"茶器"
               },{
                    "id":5,
                    "title":"食器"
               },{
                    "id":6,
                    "title":"礼器"
               },{
                    "id":8,
                    "title":"福器"
               }],
               conList:[
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic02.png")
                   }],
                   [{
                       "id":1,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":2,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":3,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":4,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },
                   {
                       "id":5,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   },{
                       "id":6,
                       "url":"/",
                       "src":require("@/img/homepic01.png")
                   }]
                   
                   ]            
               }
           
        },
        methods:{
            toClick(i){
                this.index = i
            }
        }
    }
</script>

<style scoped>
.Classify{padding:90px 0px 110px 0px;}
.Classify .Header{position: fixed;top:0px;z-index: 999;} 

.tab{display: flex;justify-content:flex-end;margin-top: 40px;}
.tab .title{width: 148px;border: 1px solid #b0afaf;position: fixed;left: 20px;top: 130;}
.tab .title li{width: 148px;height: 50px;margin-top: 10px;text-align: center;line-height: 50px;}
.tab .title .on{background: #000;color: #fff;}

.content{width: 570px;}
.content ul{width: 570px;display: none;}
.content ul li{width:270px;height:270px;border: 2px solid #b0afaf;margin-bottom: 10px;float:left;margin-right: 10px;}

.content .on{display: block;}
/* 图片居中定位方法 */
.content ul li a{display:block;width:270px;height:270px;position: relative;}
.content img{width:200px;height:200px;left:0px;right:0px;top:0px;bottom:0px;position:absolute;margin:auto;}
</style>

