<template>
    <div class="Home">
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
   
        <banner></banner>
       
        <div class="bar">
            <ul>
                <li v-for="item of list" :key="item.id">
                    <router-link :to="item.url">
                    {{item.text}}
                    </router-link>
                </li>
            </ul>
        </div>

        <img src="@/img/hometitle01.png" class="title">
        <div class="content">
            <div class="left">
                <ul>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                </ul>
            </div>
            <div class="right">
                <img src="@/img/homebpic01.png" alt="">
                <span class="iconfont">1</span>
            </div>
        </div>

        <img src="@/img/hometitle02.png" class="title">
        <div class="content">
            <div class="right">
                <img src="@/img/homebpic01.png" alt="">
                <span class="iconfont">1</span>
            </div>
            <div class="left">
                <ul>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                </ul>
            </div>
            
        </div>
        <img src="@/img/homepng01.png" alt="" class="content_pic">

        <img src="@/img/hometitle03.png" class="title">
        <div class="content">
            <div class="right">
                <img src="@/img/homebpic01.png" alt="">
                <span class="iconfont">1</span>
            </div>
            <div class="left">
                <ul>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                    <li><router-link to="/Prodetails">
                        <img src="@/img/homepic01.png" alt="">
                        <span class="iconfont">1</span>
                    </router-link></li>
                </ul>
            </div>
            </div>

            <img src="@/img/hometitle04.png" class="title">

            <div class="special">
                <ul>
                   <li>
                       <router-link to="/Prodetails">
                           <img src="@/img/homepic01.png" alt="">
                           <span class="iconfont">1</span>
                       </router-link>
                   </li>
                   <li>
                       <router-link to="/Prodetails">
                           <img src="@/img/homebpic01.png" alt="">
                           <span class="iconfont">1</span>
                       </router-link>
                   </li>
                   <li>
                       <router-link to="/Prodetails">
                           <img src="@/img/homepic01.png" alt="">
                           <span class="iconfont">1</span>
                       </router-link>
                   </li>
                   <li>
                       <router-link to="/Prodetails">
                           <img src="@/img/homepic01.png" alt="">
                           <span class="iconfont">1</span>
                       </router-link>
                   </li>
                   <li>
                       <router-link to="/Prodetails">
                           <img src="@/img/homepic01.png" alt="">
                           <span class="iconfont">1</span>
                       </router-link>
                   </li>

                </ul>
            </div>
      <MenuBar></MenuBar>
    </div>
</template>

<script>
import banner from './components/banner.vue'
import Header from '@/components/Header.vue'
    export default{
        name:"Home",
        components:{
           banner,
           Header
        },
        data() {
         return {
            list:[{
                "id":1,
                "url":"/",
                "text":"新品区"
            },{
                "id":2,
                "url":"/",
                "text":"推荐区"
            },{
                "id":3,
                "url":"/",
                "text":"热门区"
            },{
                "id":4,
                "url":"/",
                "text":"预热区"
            }]
      }
    },
    }
</script>

<style scoped>
.Home .Header{position: fixed;top:0px;z-index: 999;} 
.bar{width: 100%;height: 200px;line-height: 200px;}
.bar ul{display: flex;justify-content:space-around;align-items: center;padding: 40px 0px;}
.bar ul li a{display:block;width:120px;height:120px;background:url(../../img/bg.png) center no-repeat;text-align: center;line-height: 120px;background-size: 120px;}

.Home{padding:90px 0px 110px 0px;}
.Home .title{width:100%;height:95px;}

.content{width: 100%;height:390px;display: flex;justify-content: space-around;margin-bottom: 30px;}
.content .left{width: 390px;height:390px;}
.content .left ul{display: flex;justify-content: space-between;flex-wrap: wrap;align-content: space-between;}
.content .left ul li{width: 188px;height: 188px;border-radius: 3px;border:2px solid #c3c3c3;margin-bottom: 10px;}
.content .left ul li a{display:block;width: 188px;height: 188px;position: relative;}
.content .left ul li a img{width: 93px;height: 88px;left: 0px;right: 0px;top: 0px;bottom: 0px;margin: auto;position: absolute;}
.content .left ul li a span{position: absolute;top:20px;right: 20px;}
.content .right{width: 310px;height: 390px;border:2px solid #c3c3c3;position: relative;}
.content .right img{width: 248px;height: 245px;left: 0px;right: 0px;top: 0px;bottom: 0px;margin: auto;position: absolute;}
.content .right span{position: absolute;top:20px;right: 20px;}

.content_pic{width: 750px;height: 231px;}

.special ul li:nth-child(2){width:310px;height: 386px;}
.special ul li:nth-child(2) a{display:block;width:310px;height: 386px;}
.special ul li:nth-child(2) a img{width: 248px;height: 245px;}
.special ul li:nth-child(4){position: absolute;top:200px;left: 9px;}
.special ul li:nth-child(5){position: absolute;top:200px;right: 9px;}
.special{width: 100%;height:390px;}
.special ul{display: flex;justify-content: space-around;flex-wrap: wrap;position: relative;}
.special ul li{width: 188px;height: 188px;border-radius: 3px;border:2px solid #c3c3c3;margin-bottom: 10px;}
.special ul li a{display:block;width: 188px;height: 188px;position: relative;}
.special ul li a img{width: 93px;height: 88px;left: 0px;right: 0px;top: 0px;bottom: 0px;margin: auto;position: absolute;}
.special ul li a span{position: absolute;top:20px;right: 20px;}
</style>

