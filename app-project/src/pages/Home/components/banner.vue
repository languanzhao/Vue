<template>
    <div class="banner">
															<!-- 最大包裹层 -->
    	<swiper v-if="info.length>1" :options="swiperOption" ref="mySwiper">                      
															<!-- 一次滑动的内容 -->
			<swiper-slide v-for="item of info" :key="item.id">
				<!-- <img :src="item.url" class="img"> -->
				<!-- <img :src="require(`@/img/${item.url}.png`)" alt=""> -->
				<img :src="item.url" alt="">
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
		props:["info"],
        data() {
					return {
						// info:[],
					swiperOption:{
					pagination: {                           	//轮播点
						el: '.swiper-pagination'
					},
					autoplay:{                              	//是否自动播放
						stopOnLastSlide:true,
						delay:2000,                         	//播放间隔
						disableOnInteraction: false
					},
					loop:true
				},
				swiperSlides: [1, 2, 3]                      	//多少个轮播点
			}
		},
		components: {                                           //import 的两个调用
			swiper,
			swiperSlide
		},
		methods:{
			
		},
		//轮播图可在父页面使用props传输，也可直接在当前页面请求数据
		created(){
// 			var that = this 									//若是import axios 如下写法 全局写法为this.$http.get
// 			this.$http.get('/api/homeJson')   //axios.get('/api/homeJson')
// 				.then(function(res) {
// 					console.log(res)
// 					that.info = res.data.data.banner
// 				})
		}
    }
</script>

<style scoped>
	.banner {
		width: 750px;
		height: 320px;
	}

	.banner img{
		width: 750px;
		height: 320px;
	}
													              /* 轮播点 */
	.banner >>> .swiper-pagination-bullet{              
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
	}
</style>
