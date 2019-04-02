<template>
    <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of list" :key="item.id">
                    <img :src="item.src" alt="">
                </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:"banner",
         components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                 list:[{
              "id":1,
              "src":require("@/img/banner01.png")
          },{
              "id":2,
              "src":require("@/img/banner02.png")
          },{
              "id":3,
              "src":require("@/img/banner03.png")
          }],
          swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:{
              stopOnLastSlide:true,
			  delay:2000,                         	 //播放间隔
			  disableOnInteraction: false
          },
          loop:true
        },
        swiperSlides: [1, 2, 3, 4, 5]
            }
        }
    }
</script>

<style scoped>
.banner{width: 750px;height: 320px;}
.banner img{width: 750px;height: 320px;}
.banner >>> .swiper-pagination-bullet{border:2px solid #7d7d7d;}
.banner >>> .swiper-pagination-bullet-active{background: #000;border-color: #000;}
</style>

