<template>
    <div class="Prodetails">
        <van-swipe :autoplay="1000" :show-indicators="true">
            <van-swipe-item v-for="item of list" :key="item.id" :width="750" :height="500">
				<img :src="item.src" />
			</van-swipe-item>
        </van-swipe>
    </div>
</template>


<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
    export default{
        name:"Prodetails",
		data(){
			return{
				list:[{
					id:1,
					src:require("@/img/banner01.png")
				},{
					id:2,
					src:require("@/img/banner02.png")
				},{
					id:3,
					src:require("@/img/banner03.png")
				}]
			}
		}
    }
</script>

<style scoped>
.van-swipe{width: 750px;height: 500px;position: relative;}
.van-swipe-item{float: left;}
.van-swipe-item img{width: 750px;height: 500px;}
.Prodetails >>> .van-swipe__indicators{width:750px;height:30px;position: absolute;left:0px;bottom: 30px;}
.Prodetails >>> .van-swipe__indicators i{width: 30px;height: 30px;border-radius: 50%;background: red;display: inline-block;}
.Prodetails >>> .van-swipe__indicators .van-swipe__indicator--active{background: #000000;}
</style>
