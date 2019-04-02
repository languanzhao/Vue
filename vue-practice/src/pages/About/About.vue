<template>
	<div class="About">
		<Header>
				<template slot="left">
						<span class="iconfont">&#xe60a;</span>
				</template>
				<template slot="center">
					<form>
					
							<input type="text" placeholder="输入商品名称/关键词">
					
					</form>
				</template>
				<template slot="right">
						<span class="iconfont">&#xe60a;</span>
				</template>
		</Header>
		<div class="back" @click="back()">返回</div>
		<!-- 百度地图 -->
		<baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
		</baidu-map>
		 <div class="tab">
			 <ul>
				 <li @click="toTab(i)" :class="index === i ? 'on' : null" v-for="(item,i) of list" :key="item.id">
					 <router-link :to="item.to">{{item.text}}</router-link>
				 </li>
			 </ul>
			 <router-view></router-view>
		 </div>
		
	</div>
</template>
<script>
import Header from '@/components/Header'
	export default{
		name:"About",
		components:{
			Header
		},
		data(){
			return{
				center: {lng: 0, lat: 0},
				zoom: 3,
				index:0,
				list:[
					{
						id:1,
						to:"/About/detailsPage",
						text:"详情页"
					},
					{
						id:2,
						to:"/About/commentPage",
						text:"评论页"
					}
				]
			}
		},
		methods:{
				handler ({BMap, map}) {
					console.log(BMap, map)
					this.center.lng = 116.404
					this.center.lat = 39.915
					this.zoom = 15
			},
			toTab(i){
				this.index = i
			},
			back(){
				this.$router.push('/Prodetails')
			}
		}
	}
</script>
<style scoped>
.bm-view {
  width: 100%;
  height: 600px;
}
.tab ul{
	display: flex;
	justify-content: space-around;
}
.tab ul li a{
	color: blue;
	font-size: 30px;
	height: 100px;
}
.tab .on a{
	color: red;
}
</style>