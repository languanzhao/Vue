<template>
	<div class="home">

		<Search></Search>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<banner class="banner" :info="bannerList"></banner>

			<ul class="NavBar">
				<li v-for="item of list" :key="item.id">
					<router-link :to="item.url">
						<span class="iconfont" v-html="item.icon"></span>
						<b>{{item.title}}</b>
					</router-link>
				</li>
			</ul>
			<div class="titleImg"><img src="https://languanzhao.github.io/img-for-app-project/home01.png" /></div>
			<modelOne class="modelOne">
				<template slot="left">
					<router-link to="/ProDetails" class="picLeft" tag="div">
						<img src="https://languanzhao.github.io/img-for-app-project/homeImg01.png" />
						<div class="message">
							<span>男装中长款加厚风衣</span>
							<span>￥128</span>
						</div>
						<router-link to="" tag="div" class="shopCar">
							<span class="iconfont">&#xe60c;</span>
						</router-link>
					</router-link>
				</template>
				<template slot="right">
					<ul class="picRight">
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg02.png">
								<div class="message">
									<span>秋冬时尚大衣外套</span>
									<span>￥76</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg03.png">
								<div class="message">
									<span>秋季套装新系列</span>
									<span>￥106</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
					</ul>
				</template>
			</modelOne>
			<div class="titleImg"><img src="https://languanzhao.github.io/img-for-app-project/home02.png" /></div>
			<modelTwo class="modelTwo">
				<template slot="left">
					<router-link to="/ProDetails" class="picLeft" tag="div">
						<img src="https://languanzhao.github.io/img-for-app-project/homeImg04.png" />
						<div class="message">
							<span>毛呢外套冬装</span>
							<span>￥68</span>
						</div>
						<router-link to="" tag="div" class="shopCar">
							<span class="iconfont">&#xe60c;</span>
						</router-link>
					</router-link>
				</template>
				<template slot="right">
					<ul class="picRight">
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg05.png">
								<div class="message">
									<span>金丝绒中小童韩版休闲卫衣两件套 </span>
									<span>￥128</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg06.png">
								<div class="message">
									<span>女童长袖卫衣</span>
									<span>￥68</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg07.png">
								<div class="message">
									<span>珊瑚绒睡衣</span>
									<span>￥98</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
					</ul>
				</template>
			</modelTwo>
			<div class="titleImg"><img src="https://languanzhao.github.io/img-for-app-project/home03.png" /></div>
			<modelTwo class="modelTwo">
				<template slot="right">
					<router-link to="/ProDetails" class="picLeft" tag="div">
						<img src="https://languanzhao.github.io/img-for-app-project/homeImg08.png" />
						<div class="message">
							<span>毛呢外套冬装</span>
							<span>￥68</span>
						</div>
						<router-link to="" tag="div" class="shopCar">
							<span class="iconfont">&#xe60c;</span>
						</router-link>
					</router-link>
				</template>
				<template slot="left">
					<ul class="picRight">
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg09.png">
								<div class="message">
									<span>金丝绒中小童韩版休闲卫衣两件套 </span>
									<span>￥128</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg10.png">
								<div class="message">
									<span>珊瑚绒睡衣</span>
									<span>￥98</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg11.png">
								<div class="message">
									<span>长袖卫衣</span>
									<span>￥68</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
					</ul>
				</template>
			</modelTwo>
			<div class="titleImg"><img src="https://languanzhao.github.io/img-for-app-project/home04.png" /></div>
			<modelOne class="modelOne">
				<template slot="right">
					<router-link to="/ProDetails" class="picLeft" tag="div">
						<img src="https://languanzhao.github.io/img-for-app-project/homeImg12.png" />
						<div class="message">
							<span>男装中长款加厚风衣</span>
							<span>￥128</span>
						</div>
						<router-link to="" tag="div" class="shopCar">
							<span class="iconfont">&#xe60c;</span>
						</router-link>
					</router-link>
				</template>
				<template slot="left">
					<ul class="picRight">
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg13.png">
								<div class="message">
									<span>秋冬时尚大衣外套</span>
									<span>￥76</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
						<li>
							<router-link to="/ProDetails" tag="div" class="div">
								<img src="https://languanzhao.github.io/img-for-app-project/homeImg14.png">
								<div class="message">
									<span>秋季套装新系列</span>
									<span>￥106</span>
								</div>
								<router-link to="" tag="div" class="shopCar">
									<span class="iconfont">&#xe60c;</span>
								</router-link>
							</router-link>
						</li>
					</ul>
				</template>
			</modelOne>
		</van-pull-refresh>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		PullRefresh
	} from 'vant'
	Vue.use(PullRefresh)
	import Search from '../.././components/Search.vue'
	import banner from './components/banner.vue'
	import modelOne from './components/modelOne.vue'
	import modelTwo from './components/modelTwo.vue'
	// import axios from 'axios'
	export default {
		name: "home",
		components: {
			Search,
			banner,
			modelOne,
			modelTwo
		},
		data() {
			return {
				isLoading: false,
				bannerList: "",
				list: [{
					"id": 1,
					"icon": "&#xe689;",
					"title": "今日热销",
					"url": "/Home"
				}, {
					"id": 2,
					"icon": "&#xe697;",
					"title": "会员中心",
					"url": "/Home"
				}, {
					"id": 3,
					"icon": "&#xe666;",
					"title": "我的收藏",
					"url": "/Home"
				}, {
					"id": 4,
					"icon": "&#xe60c;",
					"title": "购物车",
					"url": "/Home"
				}, {
					"id": 5,
					"icon": "&#xe60a;",
					"title": "全部分类",
					"url": "/Home"
				}]
			}
		},
		created() {
			var that = this //若是import axios 如下写法 全局写法为this.$http.get
			this.$http.get('/api/homeJson') //axios.get('/api/homeJson')
				.then(function(res) {
					console.log(res)
					that.bannerList = res.data.data.banner
				})
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					this.$toast({
						type:"success",
						message:'已刷新'
					});
					this.isLoading = false;
				},1000);
			}
		}
	}
</script>

<style scoped>
	.home {
		padding: 88px 0px 110px 0px;
	}

	.home .Search {
		position: fixed;
		top: 0px;
		z-index: 999;
		width: 100%;
	}

	/* 两种方法可使其定位居中 */
	/* .banner{position: absolute;left: 50%;margin-left: -375px;} */
		.banner {
		position: relative;
		left: 0px;
		right: 0px;
	margin: 0px auto;
}

	/* 首页轮播下的导航栏 */
	.NavBar {
		display: flex;
		justify-content: space-around;
		height: 180px;
		border-bottom: 20px solid #f6f6f6;
	}

	.NavBar li span {
		width: 110px;
		height: 110px;
		border-radius: 50%;
		display: block;
		text-align: center;
		line-height: 110px;
		font-size: 60px;
		font-family: "黑体";
		color: #fff;
		margin: 12px 0px 16px 0px;
	}

	.NavBar li b {
		display: block;
		font-size: 24px;
		color: #333;
		text-align: center;
		line-height: 24px;
	}

	.NavBar li:nth-child(1) span {
		background: #d1c0a5;
	}

	.NavBar li:nth-child(2) span {
		background: #a6937c;
	}

	.NavBar li:nth-child(3) span {
		background: #7e6b5a;
	}

	.NavBar li:nth-child(4) span {
		background: #59493f;
	}

	.NavBar li:nth-child(5) span {
		background: #362e2b;
	}

	.modelOne {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
	}

	.modelOne .picLeft {
		width: 360px;
		height: 610px;
		position: relative;
	}

	.modelOne .picLeft img {
		width: 360px;
		height: 610px;
	}

	.modelOne .message {
		width: 360px;
		height: 50px;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 0px;
		line-height: 50px;
		font-size: 24px;
	}

	.modelOne .shopCar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.6);
		line-height: 60px;
		text-align: center;
		display: block;
		position: absolute;
		bottom: 60px;
		right: 10px;
	}

	.modelOne .picRight {
		width: 360px;
		height: 610px;
	}

	.modelOne .picRight .div {
		width: 360px;
		height: 300px;
		position: relative;
	}

	.modelOne .picRight img {
		width: 360px;
		height: 300px;
	}

	.modelOne ul li:first-child {
		margin-bottom: 10px;
	}

	.modelTwo {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
	}

	.modelTwo .picLeft {
		width: 238px;
		height: 510px;
		position: relative;
	}

	.modelTwo .picLeft img {
		width: 238px;
		height: 510px;
	}

	.modelTwo .message {
		width: 238px;
		height: 50px;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 0px;
		line-height: 50px;
		font-size: 24px;
	}

	.modelTwo .shopCar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.6);
		position: absolute;
		bottom: 60px;
		right: 10px;
		line-height: 60px;
		text-align: center;
		display: block;
	}

	.modelTwo .picRight {
		width: 484px;
		height: 510px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.modelTwo .picRight .div {
		width: 236px;
		height: 250px;
		position: relative;
	}

	.modelTwo .picRight img {
		width: 236px;
		height: 250px;
	}

	.modelTwo ul li:first-child {
		margin-bottom: 10px;
		width: 484px;
		height: 250px;
	}

	.modelTwo ul li:first-child img {
		width: 484px;
		height: 250px;
	}

	.modelTwo ul li:first-child .message {
		width: 484px;
		height: 50px;
		position: absolute;
		bottom: 0px;
	}

	.modelTwo ul li:first-child .shopCar {
		position: absolute;
		bottom: 60px;
		right: -240px;
	}

	.titleImg {
		width: 750px;
		height: 224px;
		position: relative;
		left: 0px;
		right: 0px;
		margin: 0px auto 10px auto;
	}

	.titleImg img {
		width: 750px;
		height: 224px;
	}

	.modelOne .iconfont,
	.modelTwo .iconfont {
		color: #000000;
		font-size: 40px;
	}
</style>
