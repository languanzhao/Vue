<template>
    <div class="classify">
        <div class="header">
            <span class="iconfont back" @click="toBack()">&#xe603;</span>
			<h2>思帆歌商城</h2>
			<span class="iconfont search" @click="toSearch()">&#xe600;</span>
        </div>
        <div class="main">
            <div class="slideBar" ref="slideBar">
                <ul>
                    <li 
						v-for="(item,i) of list" 
						@click="toClick(i,$event)" 
						:key="i" 
						:class="{on:i === index}"
					>{{item}}</li>
                </ul>
            </div>

            <div class="wrapper" ref="wrapper">
                <ul class="wrapper_ul">
                    <li v-for="(items,i) of classify_prolist" ref="items" :key="i">
                        <ul class="items">
                            <li class="item" v-for="item of items" :key="item.id">
								<!-- router-link 若要包含块级元素可用  tag="" -->
								<router-link to="/shop" tag="div">         
									<img :src="item.src" alt="" @click="to()"/>
									<h3>{{item.text}}</h3>
								</router-link>
							</li>
                        </ul>
                    </li> 
                </ul>
            </div>
			
        </div>
    <MenuBar></MenuBar>
    </div>
</template>

<script>
    import BetterScroll from "better-scroll"
    export default{
        name:"classify",
		data(){
			return{
				list:["T恤系列","裤装系列","裙装系列","套装系列","外套系列"],
				clickEvent:false,
				scrollY:0,
				listHeight:[],
				classify_prolist:[]
			}
		},
		methods:{
			toBack(){
				this.$router.go(-1)
			},
			to(){
				this.$router.push("SearchPage")
			},
			toSearch(){
				this.$router.push("SearchPage")           //头部搜索
				},
			toClick(i){
				this.clickEvent = true                    //点击切换标题
				if(!event._constructed){
					return
				}else{
					var right =  this.$refs.items
					var el = right[i]
					this.rights.scrollToElement(el,500)
				}
			},
			initScroll(){
				var that = this
				this.lefts = new BetterScroll(this.$refs.slideBar,{
					click:true                        //设置链接跳转
				})
				this.rights = new BetterScroll(this.$refs.wrapper,{
					probeType:3,
					click:true                        //默认为false,设置链接跳转
				})
				
				this.rights.on("scroll",(props)=>{
					that.scrollY = Math.abs(Math.round(props.y))
					// console.log(props)
				})
				},
				getHeight(){
					var itemHeight = this.$refs.items
					var height = 0 
					this.listHeight.push(height)
					var that = this
					// console.log(itemHeight)
					for(var i=0;i<=itemHeight.length-1;i++){
						height += itemHeight[i].clientHeight
						that.listHeight.push(height)
					}
					 console.log(this.listHeight)
				}
			},
			mounted(){
				var that = this
				this.$nextTick(function(){
					that.initScroll()
					that.getHeight()
				})
		},
		computed:{
			index(){
				for(var i = 0; i<this.listHeight.length-1; i++){
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					
					if(this.scrollY >= h1 && this.scrollY < h2){
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
						return 0
					}
				}
			}
		},
		//easy-mock 数据后台 1736626696
		//一般creadted钩子函数主要是用来初始化数据。
		//mounted钩子函数一般是用来向后端发起请求拿到数据以后做一些业务处理。
		mounted(){
			var that = this
			this.$http.get('https://easy-mock.com/mock/5c3ae8ce1de3741096451235/example/vue') 
				.then(function(res) {
					console.log(res)
					that.classify_prolist = res.data.classify_prolist
				})
		}
    }
</script>

<style scoped>
.classify{padding-top: 85px;}
/*头部使用弹性布局分开两边 且 固定定位 */
.classify .header{
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
.classify .header span{font-size:36px;}
/* 让wrapper向右靠justify-content: flex-end; */
/* .wrapper{padding-top: 60px;} */

/* 注：表示撑满可用空间 height: -webkit-fill-available; */
.classify .main{
	display: flex;
	padding:10px 0px 130px 0px;
	/* background: #f1f1f1; */
	justify-content: flex-end;
	/* height: -webkit-fill-available;    */       
}
/* 左边导航栏固定定位 */
.main .slideBar{
	width:250px;
	height: auto;
	background: #fff;
	position: fixed;
	left:0px;
	top: 90px;
}

.slideBar ul li{
	width: inherit;
	height: 100px;
	position: relative;
	font-family: '黑体';
	font-size: 30px;
	color: #555555;
	text-align: center;
	line-height: 100px;
	border-bottom:2px solid #fff;
}
/* 导航栏每个li使用后置再定位实现 */
.slideBar ul li:after{
	content: "";
	background:#e5e5e5;
	width: 200px;
	height: 2px;
	position: absolute;
	left: 25px;
	bottom: -2px;
}
.slideBar ul .on{
	background:#f4b469;
	color: #fff;
	font-size: 40px;
}
/* 高度会影响滚动 */
.main .wrapper{
	width:500px;
	height:880px;
	
}
/* wrapper使用弹性布局需换行 */
.wrapper .items{
	display:flex;
	justify-content:space-around;
	flex-wrap:wrap;
}
/* h3的相对定位 */
.wrapper .item{
	width:235px;
	height:235px;
	margin-bottom:10px;
	position: relative;
}
.wrapper .item img{
	width: 235px;
	height: 235px;
}
/* 图片上的标题使用定位实现 */
.items .item h3{
	width: 235px;
	height:40px;
	text-align: center;
	line-height:40px;
	background:rgba(27,27,27,0.5) ;
	color:#fff;
	font-size:24px ;
	font-family: "黑体";
	position: absolute;
	bottom:0px;
}
	</style>
