<template>
	<div class="proList">
		<h2>
			<span class="iconfont" v-html="info.titleIcon"></span>
			<span class="title">{{info.title}}</span>
		</h2>

		<swiper :options="swiperOption" tag="ul" class="proList-ul">
			<!-- slides -->
			<swiper-slide 
				tag="li" 
				v-for="(items,index) of info.proList" 
				class="proList-li" 
				:key="index"
			>
				<ul class="proList-items">
					<li 
						v-for="item of items.listArray" 
						:key="item.id" 
						class="proList-item"
					>
						<router-link to="/ProDetails">

							<div class="image">
																					<!-- 图片路径写法 -->
								<!-- <img :src="require(`@/img/${item.imgUrl}.png`)">    -->
								<img :src="item.imgUrl"/>
							</div>

							<div class="price">
								<span class="new_price">{{item.new_price | floatNums | rmb}}</span>
								<span class="old_price">{{item.old_price | floatNums | rmb}}</span>
							</div>

							<p>
								{{item.proInfo | ellipsis}}
							</p>

						</router-link>
					</li>
				</ul>
			</swiper-slide>

		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
		name: "proList",
		props:["info"],                  			//父传子   props   （json数据）
		data(){
			return {
				swiperOption: {}
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		filters:{
			floatNums(val){
				return val.toFixed(2)
			},
			rmb(val){
				return "￥"+val
			},
			ellipsis(val){
				const nums = 20                     //注：若截取字符串数量不够20，则会显示空白
				if(val.length > nums){
					return val.substring(0,nums)+"..."
				}
			}
		}
	}
</script>
<style scoped>
	.proList h2 {
		width: 100%;
		height: 96px;
		line-height: 96px;
		text-align: center;
		font-size: 40px;
		color: #f4b469;
		/* background:#f4b469; */
		margin-bottom: 10px;	
	}
	.proList h2 .iconfont{
		font-size: 50px;
		margin-right: 10px;
		color: #999;
		}

	.proList .proList-items {
		display: flex;
		justify-content: space-around;
	}

	.proList .proList-item {
		width: 324px !important;
		height: 464px;
		border: 3px solid #f4b469;
	}

	.proList .proList-item .image {
		width: 324px;
		position: relative;
		padding-bottom: 100%;
	}

	.proList .proList-item .image img {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
	}

	.proList .proList-item .price {
		height: 57px;
		display: flex;
		line-height: 57px;
		justify-content: space-around;
	}

	.proList .proList-item p {
		padding: 0 30px;
		line-height: 30px;
		color: #000000;
		
	}
	.new_price{
		color: red;
	}
	.old_price{
		text-decoration: line-through;
	}
</style>
