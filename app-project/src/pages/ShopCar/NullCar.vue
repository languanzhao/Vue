<template>
	<div class="NullCar">
		<div class="mes">
			<span class="iconfont">&#xe60c;</span>
			<p>购物车还是空的快去逛逛吧~</p>
		</div>
	</div>
</template>
<script>
	export default {
		name:"NullCar"
	}
</script>
<style scoped>
.NullCar .header .back{font-size: 36px;}
.NullCar{
	width: 750px;
	height: 1000px;
	position: relative;
	overflow: hidden;
	margin: 0 auto;
}
.mes{
	width: 280px;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	height: 236px;
}
.mes .iconfont{
	font-size: 86px;
}
.mes p{
	font-size: 40px;
	line-height: 60px;
}
</style>
