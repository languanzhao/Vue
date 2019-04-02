<template>
    <div class="user">
			<div class="header">
				<img src="https://languanzhao.github.io/img-for-app-project/user.png" class="pic"/>
				<div class="image">
					<img src="https://languanzhao.github.io/img-for-app-project/user02.png" />
				</div>
			</div>
			<div class="collecting">我的收藏(<span>{{count}}</span>)我的购物车(<span>{{start}}</span>)</div>
			<ul class="main">
						<li v-for="item of list" :key="item.id">
								<div>
									<span class="iconfont" v-html="item.icon"></span>
									<span>{{item.text}}</span>
								</div>
								<router-link :to="item.url">    
									<span class="iconfont" v-html="item.rightIcon"></span>
								</router-link>
						</li>
			</ul>
			<div class="less"></div>
			<div class="more"></div>
      <MenuBar></MenuBar>
    </div>
</template>

<script>
import Vue from 'vue'
import { PullRefresh } from 'vant'
Vue.use(PullRefresh)
import { mapState } from 'vuex'                                  //vuex中的一个对象
    export default{
        name:"user",
				data(){
					return{
						list:[{
									"id":1,
									"icon":"&#xe605;",
									"text":"购买记录",
									"rightIcon":"&#xe603;",
									"url":'/ProDetails'
						  },{
							  		"id":2,
									"icon":"&#xe645;",
									"text":"我的收藏",
									"rightIcon":"&#xe603;",
									"url":'/ProDetails'
							},{
									"id":3,
									"icon":"&#xe604;",
									"text":"我的订单",
									"rightIcon":"&#xe603;",
									"url":'/ProDetails'
							},{
									"id":4,
									"icon":"&#xe615;",
									"text":"管理收货地址",
									"rightIcon":"&#xe603;",
									"url":'/address'
							},{
									"id":5,
									"icon":"&#xe697;",
									"text":"修改个人资料",
									"rightIcon":"&#xe603;",
									"url":'/ProDetails'
							},]
					}
				},
				computed:{
					...mapState(['count','start'])      //简写     mapState头部调用 用import
// 					count(){
// 						return this.$store.state.count 
// 					},
// 					start(){
// 						return this.$store.start
// 					}
		}		
    }
</script>

<style scoped>

.user{background: red;}
.user .header{background: #f4b469;width: 100%;height: 320px;position: relative;}
.user .header .pic{width:750px;height:320px;position:absolute;left:0px;right:0px;margin:0px auto;}

.user .header .image img{position:absolute;width:150px;height:150px;border-radius:50%;left:0px;right:0px;top: 0px;bottom: 0px;margin: auto;}
.user .header:after{content:"吃撑的你";width:150px;height:35px;border-radius:25px;background: #2d1e0d;
										color: #fff;font-size:24px;line-height:35px;text-align:center;position: absolute;left: 0px;right: 0px;bottom:50px;margin: 0 auto;}
.main{width: 100%;height: 900px;background: #f1f1f1;padding-top: 40px;}
.main li{display: flex;justify-content: space-between;height: 80px;line-height: 80px;background: #fff;padding: 0px 30px;margin-bottom: 40px;}
.main div .iconfont{font-size: 40px;color: #f4b469;margin-right: 10px;}
/* 向左换为向右 */
.main a .iconfont{color: #666;font-size: 40px;display: block;transform: rotate(180deg);}

.collecting{background:#fff;width:100%;height:40px;line-height:40px;display: flex;justify-content: space-around;} 

</style>
