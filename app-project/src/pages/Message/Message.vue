<template>
    <div class="Discount">
        <div class="header">
        	<span class="iconfont back" @click="toBack()">&#xe603;</span>
        	<h2>思帆歌商城</h2>
        	<span class="iconfont search" @click="toSearch()">&#xe600;</span>
        </div>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
													<!-- 绑定 -->
		<proList :info="hot"></proList>                       
		<proList :info="baby"></proList>
		<proList :info="beauty"></proList>
		<proList :info="life"></proList>
		<proList :info="food"></proList>
		<proList :info="global"></proList>
		</van-pull-refresh>
        <MenuBar></MenuBar>
    </div>
</template>

<script>
import Vue from 'vue'
import { PullRefresh } from 'vant'
Vue.use(PullRefresh)
import proList from './components/proList.vue'           //导入 proList
// import axios from 'axios'                             //导入axios   已在main.js使用全局不需引入
    export default{
        name:"Discount",
		components:{
		
		proList
		},
		data(){
			return{
				hot:"",                
				baby:"",
				beauty:"",
				life:"",
				food:"",
				global:"",
				isLoading: false,
			}
		},
		methods:{
			toBack(){
				this.$router.go(-1)
			},
			toSearch(){
				this.$router.push("SearchPage")   //头部搜索
			},
			onRefresh() {
				setTimeout(() => {
					this.$toast({
						type:"success",
						message:'已刷新'
						});
					this.isLoading = false;
				}, 1000);
			}
		},
		created(){                                //axios 格式
			var that = this
			this.$http.get('/api/discountJson')
			.then(function(res){
				console.log(res)
				that.hot = res.data.data.hot
				that.baby = res.data.data.baby
				that.beauty = res.data.data.beauty
				that.life = res.data.data.life
				that.food = res.data.data.food
				that.global = res.data.data.global
				console.log(that.baby);
				
			})
		}
    }
</script>

<style scoped>
.Discount{padding:80px 0px 110px 0px;}
/*头部使用弹性布局分开两边 且 固定定位 */
.Discount .header{
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
.Discount .header span{font-size:36px;}
</style>

