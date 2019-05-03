<template>
	<div class="Header">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>
<script>
	export default{
		name:"Header"
	}
</script>
<style scoped lang="less">
@import '.././style/common';
.Header{
	width: 100%;
	.h(90);
	.bgc(#b0afaf);
	.bdr(100);
	// .bd(2,red);
	.bdt(4,#e72727);
	.bdb(4,#2fd82f);
	.bdr(4,#3d3df5);
	.bdl(4,#dd9818);
    .f-s-b;
	.pd-2(0,20);
	align-items: center;
	box-sizing: border-box;
	span{
		.fs(35);
	}
	form{
		.w(400);
		.h(60);
		.bdr(12);
		.bgc(#fff);
		input{
			.w(400);
			.h(60);
		}
	}
}
</style>