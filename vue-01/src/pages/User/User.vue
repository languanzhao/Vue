<template>
    <div class="User">
            <ul>
				<li 
					@click="tab(i)" 
					v-for="(item,i) of tabArr" 
					:key="i"
					>
					<router-link :to="item.url">{{item.title}}</router-link>
				</li>
			</ul>
			<router-view></router-view>
           <MenuBar></MenuBar>
    </div>
</template>

<script>
// 	import Page01 from './components/page01'
// 	import Page02 from './components/page02'
    export default{
        name:"User",
		components:{
// 			Page01,
// 			Page02
		},
		data(){
			return{
				index:0,
				tabArr:[
					{
						title:'选项一',
						url:'/User/Page01'
					},
					{
						title:'选项二',
						url:'/User/Page02'
					}
				]
			}
		},
		methods:{
			tab(i){
				this.index = i
			}
		}
    }
</script>

<style scoped>

</style>

