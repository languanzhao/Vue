<template>
	<div class="shop">
		<div class="header">
			<span class="iconfont back" @click="toBack()">&#xe603;</span>
			<h2>思帆歌商城</h2>
			<span class="iconfont search" @click="toSearch()">&#xe600;</span>
		</div>
		<div class="tab">
			<ul class="title">
				<li 
				v-for="(item,i) of titleList" 
				:key="i"
				:class="i === index ? 'on' : null"
				@click="toClick(i)"
				>{{item}}</li>
			</ul>
			<div class="content">
				<ul
				v-for="(items,i) of conList" 
				:class="i === index ? 'on' : null"
				:key="i"
				>
					<li v-for="(item,i) of items" :key="item.id">
						<router-link to="/ProDetails"><img :src="item.scr" /></router-link>
						<div class="right">
							<div class="top">
								<router-link to="/ProDetails">
									<span>{{item.type}}</span>
									<h2>{{item.title}}</h2>
									<p>{{item.text}}</p>
								</router-link>
							</div>
							<div class="bottom">
								<i>{{item.price}}</i>
								<b>立即购买</b>
								<span class="iconfont">&#xe60c;</span>
							</div>  
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"shop",
		data(){
			return{
				titleList:["全部","新品","销量","价格","最新","筛选"],
				conList:[
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify01.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify02.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					],
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify02.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify01.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					],
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify07.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify08.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					],
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify01.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify02.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					],
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify01.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify02.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					],
					[{
						"id":1,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify01.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":2,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify02.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":3,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify03.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":4,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify04.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":5,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify05.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					},
					{
						"id":6,
						"scr":"https://languanzhao.github.io/img-for-app-project/classify06.png",
						"type":"套装系列",
						"title":"2017新款两件套儿童春秋运动装韩版女孩",
						"text":"中大童外套衣服 白色时尚外套黑色长裤",
						"price":189,
					}
					]
					
				],
				index:0
			}
			},
		methods:{
			    toClick(i){
					this.index = i
				},
				toBack(){
					this.$router.go(-1)
				},
				toSearch(){
					this.$router.push("SearchPage")   //头部搜索
					}
			}
	}
</script>

<style scoped>
.shop{padding-top: 130px;}
.shop .header{
	padding:22px 30px 22px 30px;
	width:100%;
	display: flex;
	justify-content: space-between;
	line-height: 36px;
	font-family: '黑体';
	font-size: 36px;
	color: #fff;
	background:#f4b469;
	position: fixed;
	top: 0px;
	z-index: 999;
	box-sizing:border-box;
}
.shop .header span{font-size:36px;}
.tab{width:100%;}
.tab .title{width:100%;height:50px;border-bottom:2px solid #CACACA;display: flex;justify-content: space-around;
		text-align:center;line-height:50px;position: fixed;top:80px;z-index: 999;background: #fff;}
.tab .title .on{color:#eda653;border-bottom: 3px solid #eda653;}
.tab .content .on{display: block;}
.tab .content ul{display: none;}

.content ul li{display:flex;justify-content:space-around;padding:18px 0px;border-bottom: 3px solid #BFBFBF;}
.content ul li img{width:224px;height:224px}
.content ul li .right{width:470px;height:224px;}
.content ul li .right .top{height:172px;}
.content ul li .right .top span{font-size: 24px;font-family: "黑体";color: #999;}
.content ul li .right .top h2{margin:10px 0px;font-size: 24px;font-family: "黑体";color: #333;font-weight: bold;line-height: 24px;}
.content ul li .right .top p{font-size: 24px;font-family: "黑体";color: #666;line-height: 24px;}

.content ul li .right .bottom{height:52px;display:flex;justify-content:space-between;line-height: 52px;}
.content ul li .right .bottom i{color: #ec5252;font-size: 28px;}
.content ul li .right .bottom b{display: block;width: 228px;height: 52px;background: #ff2626;line-height: 52px;color: #fff;font-size: 20px;text-align: center;}
.content ul li .right .bottom span{font-size: 30px;color: #f4b469;}
</style>