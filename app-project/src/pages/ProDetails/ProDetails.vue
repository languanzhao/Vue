<template>
	<div class="ProDetails" ref="ProDetails">
		<div class="header">
			<span class="iconfont back" @click="goback()">&#xe603;</span>
			<router-link to="/judgeCar" class="iconfont car" @click="car()">&#xe60c;</router-link>
			<banner class="banner"></banner>
			<div class="title">
				<div>
					<h2>{{title}}</h2>
					<p>{{text}}</p>
				</div>
				<div class="share" @click="share()">
					<span class="iconfont">&#xe61d;</span>
					<b class="text">分享</b>
				</div>
			</div>
			<div class="other">
				<span class="newprice">￥998.00</span>
				<b>价格：<i>￥269.00</i></b>
				<div class="mes">
					<span>免运费</span>
					<span>88人已付款</span>
					<span>广东佛山</span>
				</div>
			</div>
			<div class="choice">
				<ul class="options">
					<li @click="choice()">
						<router-link to="">
							<b>选择 颜色分类 参考身高</b>
							<span class="iconfont">&#xe603;</span>
						</router-link>
					</li>
					<li @click="parameters()">
						<router-link to="">
							<b>产品参数</b>
							<span class="iconfont">&#xe603;</span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="tab">
				<ul>
					<li @click="totab(i)" :class="i === index ? 'on' : null" v-for="(item,i) of tab" :key="item.id">
						<router-link :to="item.url">{{item.text}}</router-link>
					</li>
				</ul>
				<router-view></router-view>
			</div>
		</div>
		<div class="Menu">
			<div class="left">
				<div @click='reduceClick()'>
					<span class="iconfont">&#xe601;</span>
					<b>客服</b>
				</div>
				<div @click="addClick()">
					<span class="iconfont" ref="mul" :id="mul === true ? 'mul' : null">&#xe614;</span>
					<b>收藏</b>
				</div>
			</div>
			<div class="right">
				<span class="join" @click="showmask()">加入购物车</span>
				<span class="buy" @click="showmask()">立即购买</span>
			</div>
		</div>

		<div class="mask" v-show="bool">
			<div class="bg" @click="closeMask()"></div>
			<order class="order" @close="closeMask()" @a="b()" @c="c()" :titles="title" :texts="text"></order>
		</div>

		<div class="alert" v-show="boolB">
      <van-icon name="success" />
      <p>成功添加到购物车</p>
    </div>
		<!-- vant ui 组件库 popup 弹出层 -->
		<van-popup v-model="showChoice" position="bottom">
			<div class="proInfo">
				<h2>产品参数</h2>
				<ul>
					<li>
						<span>产品系列:</span>套装系列
					</li>
					<li>
						<span>产品颜色:</span>红 黄 绿 蓝
					</li>
					<li>
						<span>尺寸大小:</span>S M L XL
					</li>
					<li>
						<span>适合人群:</span>8-15岁
					</li>
					<li>
						<span>产品指数:</span>普通 长款
					</li>
				</ul>
				<b @click="hide()">确定</b>
			</div>
		</van-popup>
		<van-popup v-model="showParameters" position="bottom">
			<div class="proInfo">
				<h2>产品参数</h2>
				<ul>
					<li>
						<span>产品系列:</span>套装系列
					</li>
					<li>
						<span>产品颜色:</span>红 黄 绿 蓝
					</li>
					<li>
						<span>尺寸大小:</span>S M L XL
					</li>
					<li>
						<span>适合人群:</span>8-15岁
					</li>
					<li>
						<span>产品指数:</span>普通 长款
					</li>
				</ul>
				<b @click="hide()">确定</b>
			</div>
		</van-popup>
		<van-popup v-model="isShare" position="right">
			<div class="otherway">
				<h2>分享到</h2>
				<ul>
					<li>
						<router-link to="">
							<span class="iconfont">&#xe667;</span>
						</router-link></li>
					<li>
						<router-link to="">
							<span class="iconfont">&#xe609;</span>
						</router-link></li>
					<li>
						<router-link to="">
							<span class="iconfont">&#xe69e;</span>
						</router-link></li>
				</ul>
			</div>
		</van-popup>
	</div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant"; //vant ui 组件库 popup 弹出层
Vue.use(Popup);

import { Toast } from "vant"; //轻提示
Vue.use(Toast);

import { Icon } from 'vant';
Vue.use(Icon);

import { mapMutations } from "vuex"; //vuex中的一个对象
import banner from "@/pages/ProDetails/components/banner.vue";
import detailspage from "./components/detailspage.vue";
import praise from "./components/praise.vue";
import order from "./components/order.vue";
export default {
  name: "ProDetails",
  components: {
    banner,
    detailspage,
    praise,
    order
  },
  data() {
    return {
      title: "2017品牌秋季儿童牛仔背带裙两件套",
      text: "中大童韩版黑条纹T恤+背带裤 150",
      index: 0,
      bool: false,
      boolB: false,
      mul: false,
      showChoice: false,
      showParameters: false,
      isShare: false,
      tab: [
        {
          id: 1,
          text: "商品详情",
          url: "/ProDetails/detailspage"
        },
        {
          id: 2,
          text: "买家口碑",
          url: "/ProDetails/praise"
        }
      ]
    };
  },
  methods: {
    totab(i) {
      this.index = i;
    },
    goback() {
      this.$router.push("/Home"); //路由已注册全局，故可使用this.$router
    },
    showmask() {
      this.bool = true;
      this.$refs.ProDetails.className = "classname";
    },
    closeMask() {
      this.bool = false;
      this.$refs.ProDetails.className = "";

      var that = this;
      setTimeout(function() {
        that.boolB = false;
      },1500);
    },
    b() {
      this.boolB = true;
    },
    c() {
      this.bool = false;
    },
    // ...mapMutations({                    		//简写 mapMutations 调用 用import
    // addClick:'ADD',
    // reduceClick:"reduce"
    // 	})
    addClick() {
      this.$store.commit("ADD"); //vuex使用   提交add方法
      
      this.mul = !this.mul;
      if (this.mul) {
        this.$toast.success({message: "已收藏", duration: 2000});
      } else {
        this.$toast.fail({ message: "已取消", duration: 2000 });
      }
    },
    reduceClick() {
      this.$store.commit("reduce"); //vuex使用   提交reduce方法
    },
    parameters() {
      //vant ui 组件库 popup 弹出层
      this.showParameters = !this.showParameters;
    },
    choice() {
      this.showChoice = !this.showChoice;
    },
    hide() {
      this.showParameters = false;
      this.showChoice = false;
    },
    share() {
      this.isShare = !this.isShare;
    }
  }
};
</script>

<style scoped>
/* 图片定位居中 */
.ProDetails {
  position: relative;
}
.header {
  width: 750px;
  height: 1050px;
  position: relative;
  margin: 0 auto;
}
.header .banner {
  width: 750px;
  height: 800px;
}
.header .back {
  position: absolute;
  top: 30px;
  left: 24px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 30px;
}
.header .car {
  position: absolute;
  top: 30px;
  right: 24px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 30px;
}
.header .title {
  display: flex;
  justify-content: space-between;
  padding: 18px 22px 10px 22px;
}
.header .title .share {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header .title h2 {
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: bold;
}
.header .title p {
  font-size: 28px;
  font-weight: bold;
}
.header .share span {
  font-size: 55px;
  display: block;
  line-height: 55px;
  margin-bottom: 8px;
}
.header .share b {
  font-size: 24px;
  display: block;
  line-height: 24px;
  color: #666;
}
.header .other {
  padding: 0px 22px 10px 22px;
  border-bottom: 10px solid #f1f1f1;
}
.header .other span {
  display: block;
  font-size: 24px;
  color: #666;
}
.header .other .mes {
  display: flex;
  justify-content: space-between;
}
.header .other b {
  margin: 15px 0px;
  font-size: 24px;
  color: #666;
  display: block;
}
.header .other b i {
  text-decoration: line-through;
}
.header .other .newprice {
  color: #ff1d1d;
  font-size: 32px;
  font-weight: bold;
  line-height: 32px;
}
.header .choice ul {
  padding: 0px 22px;
}
.header .choice ul li {
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #f1f1f1;
  line-height: 52px;
}
.header .choice ul li a {
  display: flex;
  justify-content: space-between;
}
.options li .iconfont {
  font-size: 30px;
  transform: rotate(180deg);
  display: block;
  color: #000;
}
/* 底部菜单 */
.Menu {
  width: 100%;
  height: 100px;
  display: flex;
  position: fixed;
  bottom: 0px;
  z-index: 999;
}
.Menu .left {
  width: 33%;
  height: inherit;
  display: flex;
  justify-content: space-around;
  background: #f4b469;
  align-items: center;
}
.Menu .left div {
  width: 50%;
  height: inherit;
}
.Menu .left div span {
  display: block;
  font-size: 46px;
  color: #fff;
  margin: 12px 0px 10px 0px;
  line-height: 46px;
  text-align: center;
}
.Menu .left div b {
  display: block;
  font-size: 24px;
  color: #fff;
  line-height: 24px;
  text-align: center;
}
.Menu .right {
  width: 67%;
  height: inherit;
  display: flex;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  color: #fff;
}
.Menu .right .join {
  width: 50%;
  height: 100px;
  background: #ffa841;
  display: block;
}
.Menu .right .buy {
  width: 50%;
  height: 100px;
  background: #ff2626;
  display: block;
}
.tab {
  width: 750px;
  margin: 0 auto;
}
.tab ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin-bottom: 10px;
}
.tab ul li {
  font-size: 30px;
  width: 200px;
  text-align: center;
}
.tab ul li a {
  line-height: inherit;
}
.tab ul .on {
  border-bottom: 6px solid #ffa841;
}
/* 遮罩层  点击时遮罩层定位到顶部位置的同时内容也定位到顶部位置*/
.mask {
  width: 100%;
  height: 1254px;
  position: fixed;
  z-index: 10;
  top: 0px;
}
.bg {
  width: inherit;
  height: inherit;
  opacity: 0.5;
  background: #000;
}
.order {
  width: inherit;
  height: 600px;
  position: absolute;
  bottom: 0px;
  background: #fff;
}
/* 点击时,内容设置小于整个屏幕的高度,就不会滑动,的同时定位 */
.classname {
  height: 1254px;
  overflow: hidden;
  position: relative;
}
.Menu #mul {
  color: red;
}
.alert {
  width: 300px;
  height:200px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  opacity: 0.8;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 10;
  text-align: center;
  line-height: 80px;
  font-size: 26px;
}
.alert .van-icon-success{
  font-size:100px;
  }
.alert p{
  font-size:30px;
  line-height:40px;
}
/* vant ui 组件库 popup 弹出层 样式*/
.proInfo {
  width: 100%;
  height: 750px;
  margin: 0px auto;
  background: #ebe5e5;
}
.proInfo h2 {
  padding: 60px 0px 60px 0px;
  text-align: center;
  font-size: 40px;
}
.proInfo ul li {
  width: 100%;
  height: 60px;
  background: #d8c1c1;
  margin-bottom: 35px;
  padding-left: 50px;
  line-height: 60px;
  font-size: 30px;
  box-sizing: border-box;
}
.proInfo ul li span {
  font-size: 20px;
  color: #000;
  letter-spacing: 10px;
  padding-right: 30px;
}
.proInfo b {
  display: block;
  width: 600px;
  height: 90px;
  font-size: 40px;
  letter-spacing: 60px;
  text-indent: 60px;
  background: #ff2626;
  color: #fff;
  text-align: center;
  line-height: 90px;
  border-radius: 60px;
  margin: 0 auto;
}
.van-popup--right {
  width: 100%;
  height: 300px;
}
.otherway h2 {
  text-align: center;
  font-size: 36px;
  color: #999;
  font-weight: 500;
  border-bottom: 2px solid #999;
  line-height: 56px;
  padding-bottom: 16px;
}
.otherway ul {
  display: flex;
  justify-content: space-around;
  padding-top: 44px;
}
.otherway ul li {
  width: 98px;
  height: 98px;
  border-radius: 50%;
  text-align: center;
  line-height: 98px;
}
.otherway ul li:nth-child(1) {
  background: #04acee;
}
.otherway ul li:nth-child(2) {
  background: #11ac36;
}
.otherway ul li:nth-child(3) {
  background: #e73736;
}
.otherway ul li a .iconfont {
  color: #fff;
  font-size: 70px;
}

</style>
