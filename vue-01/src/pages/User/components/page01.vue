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
// 	import Page001 from './page001.vue'
// 	import Page002 from './page002.vue'
    export default{
        name:"User",
		components:{
// 			Page001,
// 			Page002
		},
		data(){
			return{
				index:0,
				tabArr:[
					{
						title:'标题一',
						url:'/User/Page001'
					},
					{
						title:'标题二',
						url:'/User/Page002'
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

