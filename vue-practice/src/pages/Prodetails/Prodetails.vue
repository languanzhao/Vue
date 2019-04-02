<template>
	<div class="Prodetails">
		<div class="router" @click="router()">点击进入</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	export default{
		name:"Prodetails",
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			router(){
				this.$router.push("/About")
			}
		}
	}
</script>
<style scoped>
.router{
	
}
</style>