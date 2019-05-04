<template>
	<div class="content">
		<div :style="{color: color,fontSize:fontSize + 'px'}">这是Prodetails的一个组件</div>
		<div ref="changeWord" class="">{{word}}</div>
		<button @click="router">点击</button>
		<button @click="sonClick">点击传值到父组件</button>
		
		<div :class="objClass">class绑定方式一</div>
		<div :class="{active:active,error:error}">class绑定方式二</div>
		<div :class="a === true ? 'active':'error' ">class绑定方式三</div>
		
	    <div :style="{display:i === 0 ? 'none': 'block'}">style绑定方式</div>
	</div>
</template>

<script>
	export default{
		name:'content',
		props:['word','router'],
		data(){
			return{
				son:'我是子组件',
				color:'red',
				fontSize:30,
				objClass:{
					active:true,
					error:true
				},
				active:true,
				error:true,
				a:true,
				i:1
			}
		},
		methods:{
			sonClick(){
				this.$emit('sonVal',this.son)
			},
			parentClick(){
				this.$refs.changeWord.innerText = '我是父组件里的文字+1'
				this.$refs.changeWord.className = 'changeWord'
			}
		}
		
	}
</script>

<style scoped lang="less">
.changeWord{
	color: aqua;
}
.active{
	color: blue
}
.error{
	font-size: 90px;
}
</style>
