<template>
	<div class="MenuBar">
		<ul>
			<li v-for="item of list" :key="item.id">
				<router-link :to="item.url">
					<span class="iconfont" v-html="item.icon"></span>
					<span class="text">{{item.title}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"MenuBar",
		data(){
			return{
				list: [
					{
						id: 1,
						icon: "&#xe63e;",
						title: "首页",
						url: "/"
					},
					{
						id: 2,
						icon: "&#xe61b;",
						title: "分类",
						url: "/Prodetails"
					},
					{
						id: 3,
						icon: "&#xe86f;",
						title: "今日折扣",
						url: "/Message"
					},
					{
						id: 4,
						icon: "&#xe7a6;",
						title: "购物车",
						url: "/Shop"
					},
					{
						id: 5,
						icon: "&#xe61e;",
						title: "我的帆歌",
						url: "/User"
					}
				]
			}
		},
		created () {
			console.log("aaa")
			
		}
	}
</script>
<style scoped lang="less">
@import '.././style/common';
// ul{
// 	display: flex;
// 	justify-content: space-between;
// 	width: 100%;
// 	height: 100px;
// 	position: fixed;
// 	bottom: 0;
// 	background: #fff;
// 	z-index: 999;
// }
// ul li{
// 	width: 20%;
// 	height: inherit;;
// 	border: 1px solid;
// }
// ul li a{
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-direction: column;
// 	height: inherit;
// }
// ul li .iconfont{
// 	color: #07C160;
// }
// ul li span:first-child{
// 	font-size: 40px;
// 	color: #710909;
// }
// ul li span{
// 	color: #20A0FF;
// 	font-size: 20px;
// }
// /* 点击后的效果 router-link 即a 标签自带高亮效果*/
// ul li .router-link-exact-active{
// 	background: #07C160;
// }
// ul li .router-link-exact-active span:first-child{
// 	color: #fff;
// }
// ul li .router-link-exact-active span:last-child{
// 	color: #fff;
// }

@color:#000;
ul{
	.f-s-b;
	.h(100);
	.b();
	.bgc(#fff);
	width: 100%;
	position: fixed;
	z-index: 999;
	li{
		width: 20%;
		.h(100);
		.bd(1,#000);
		.iconfont{
			color: #07C160;
		}
		span{
			color: #20A0FF;
			.fs(20);
			&:first-child{
				.fs(40);
				color: #710909;
			}
		}
		a{
			.f-c;
			align-items: center;
			flex-direction: column;
			.h(100)
		}
		.router-link-exact-active{
			.bgc(#07C160);
			span{
				@color:#fff;  //最外层已定义为#000；但这需要修改故可在这重新定义
				&:first-child{
					color: @color;
				}
				&:last-child{
					color: @color;
				}
			}
		}
	}
}
</style>