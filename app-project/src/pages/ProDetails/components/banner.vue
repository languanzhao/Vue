<template>
    <div class="banner">
															<!-- 最大包裹层 -->
    	<swiper v-if="prodetails_banner.length>1" :options="swiperOption" ref="mySwiper">                      

															<!-- 一次滑动的内容 -->
			<swiper-slide v-for="item of prodetails_banner" :key="item.id">
				<img :src="item.url" class="img">
			</swiper-slide>

															<!-- 轮播点-->
			<div class="swiper-pagination" slot="pagination"></div>  
		</swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'                 			//插件必写
import { swiper, swiperSlide } from 'vue-awesome-swiper'        //插件必写

    export default{
        name:"banner",
        data() {
			return {
				prodetails_banner:[],
// 				prodetails_banner: [{
// 					id: 1,
// 					url: "https://languanzhao.github.io/img-for-app-project/prodetails.png"          //vue3.0图片路径写法
// 				}, {
// 					id: 2,
// 					url: "https://languanzhao.github.io/img-for-app-project/prodetails.png"
// 				}, {
// 					id: 3,
// 					url: "https://languanzhao.github.io/img-for-app-project/prodetails.png"
// 				}],
				swiperOption: {
					pagination: {                           	 //轮播点
						el: '.swiper-pagination'
					},
					autoplay:{                              	 //是否自动播放
						stopOnLastSlide:true,
						delay:2000,                         	 //播放间隔
						disableOnInteraction: false
					},
					loop:true
				},
				swiperSlides: [1, 2, 3]                      	  //多少个轮播点
			}
		},
		components: {                                             //import 的两个调用
			swiper,
			swiperSlide
		},
		//easy-mock 数据后台 1736626696
		created(){
			var that = this
			this.$http.get('https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/vue') 
				.then(function(res) {
					console.log(res)
					that.prodetails_banner = res.data.prodetails_banner
					
				})
		}
    }
</script>

<style scoped>
	.banner {
		width: 750px;
		height: 800px;
	}

	.banner img{
		width: 750px;
		height: 800px;
	}
													  /* 轮播点 背景 自带一些透明度 可以 设置  opacity: 1;*/ 
	.banner >>> .swiper-pagination-bullet{              
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
		opacity: 1;                   
	}
	.banner >>> .swiper-pagination-bullet-active{
		background: #ff9900;
	}
</style>
