<template>
	<div class="judgeCar">
		<div class="header">
			<span class="iconfont back" @click="toBack()">&#xe603;</span>
			<h2>我的购物车</h2>
			<span @click="tochange()" ref="edit">编辑</span>
		</div>
		<div class="main">
			<ShopCar v-if="bool" :showon="showon"></ShopCar>
			<NullCar v-else></NullCar>
		</div>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import ShopCar from './ShopCar.vue'
	import NullCar from './NullCar.vue'
	export default {
		name:"judgeCar",
		components:{
			ShopCar,
			NullCar
		},
		data(){
			return{
				bool:false,
				showon:true
			}
		},
		mounted(){
			if(JSON.parse(localStorage.getItem("proItems"))){
				this.bool = true
			}else{
				this.bool = false
			}
			
		},
		methods:{
			proItemsNo(){
				this.bool = false
			},
			tochange(){
				var edit = this.$refs.edit
				if(edit.innerText === '编辑'){
					  edit.innerText = "完成"
					}else{
					  edit.innerText = '编辑'
					}
				this.showon = !this.showon
				
			},
			toBack(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
.judgeCar{
	padding:80px 0px 200px 0px;
	/* height: -webkit-fill-available; */
	}
.judgeCar .header {
	padding:22px 30px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	line-height: 36px;
	font-family: '黑体';
	font-size: 36px;
	color: #fff;
	background: #f4b469;
	box-sizing: border-box;
	position: fixed;
	top: 0px;
}
.judgeCar .header .back{font-size: 36px;}
</style>
