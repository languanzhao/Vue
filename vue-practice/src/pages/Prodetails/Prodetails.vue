<template>
	<div class="Prodetails">
		<button class="router" @click="router()">点击进入</button>
		<div>{{word}}</div>
		<contentM :word="word" :router="router" @sonVal="sonVal" ref="aaa"></contentM>
		<div>{{son}}</div>
		<div @click='parentClickTo'>父组件调用子组件的方法</div>
		
		<div>vue选项卡</div>
		<ul class="tab">
			<!-- <li 
				v-for="(item,i) of tab" 
				:key='i'
				@click="toTab(i)"
				>{{item.title}}</li> -->
			<li @click="toTab(0)">标题一</li>
			<li @click="toTab(1)">标题二</li>
			<li @click="toTab(2)">标题三</li>
		</ul>
		<div class="content">
			<div :style="{display:index === 0 ? 'block' : 'none'}">内容一</div>
			<div :style="{display:index === 1 ? 'block' : 'none'}">内容二</div>
			<div :style="{display:index === 2 ? 'block' : 'none'}">内容三</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import contentM from './components/content.vue'
	export default{
		name:"Prodetails",
		components:{
			contentM
		},
		data(){
			return{
				word:'我是父组件里的文字',
				son:'I am a sub component.',
				tab:[
					{title:'标题一'},
					{title:'标题二'},
					{title:'标题三'},
				],
				index:0
			}
		},
		methods:{
			router(){
				this.$router.push("/About")
			},
			sonVal(val){
				this.son = val
			},
			parentClickTo(){
				this.$refs.aaa.parentClick()
			},
			toTab(i){
				this.index = i
			}
		}
	}
</script>
<style scoped lang="less">
@import '../.././style/common';
.tab{
	display: flex;
	li{
		.w(100);
		.h(100);
		text-align: center;
		.lh(100);
		.bd(1,red)
		
	}
}
</style>