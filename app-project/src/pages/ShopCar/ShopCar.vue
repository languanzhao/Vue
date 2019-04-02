<template>
	<div class="shopcar">
		<div class="main">
			<ul> 
																<!-- 添加key值 -->
				<li v-for="(item,i) of list" :key="item.id">
					<v-touch @swipeleft="swipeleftFn(i)" @swiperight="swiperightFn(i)" class="touch">
						<div class="wrapper"  ref="product">	 						
							<div class="showpart">    
								<label>
									<input type="checkbox" 
										hidden 
										:checked="item.isChecked"      
										@click="item.isChecked === false ? item.isChecked = true : item.isChecked = false"
										/>
										<i></i>
								</label>
					<img :src="item.src" />
				<div class="right">
							<span>{{item.type}}</span>
							<h2>{{item.title}}</h2>
							<p>{{item.text}}</p>
					<div class="bottom">
						<b>{{item.price | floatNumber | unit }}</b>
					<form>
							<button @click.prevent="min(item)">－</button>
							<input type="text" v-model="item.val" @blur="num(item)"/>
							<button @click.prevent="add(item)">＋</button>
					</form>
						</div>
					</div>
				</div>
					<div class="del" @click="del(i)">删除</div>
				     </div>	 
				</v-touch>
				</li>
			</ul>
			<div class="pay">
				<div class="leftpay">
				<div class="allchecked"> 
					<label>
						<input type="checkbox" hidden @click="AllChecked()" ref="input" :checked="checkedAll"/>
						<i></i>
					</label>
					<span>全选</span>
				</div>
				<!-- <div class="allchecked"> 
					<label>
						<input type="checkbox" hidden @click="checkedUn()" ref="checkedUn"/>
						<i></i>
					</label>
					<span>反选</span>
				</div> -->
				</div>
				<div class="total" v-if="showon"> 
					<b>总计：<i>{{total | floatNumber | unit}}</i></b>
					<span>去结算({{count}})</span>
				</div>
				<div class="total" v-else> 
					<!-- <b>总计：<i>{{total | floatNumber | unit}}</i></b> -->
					<span @click="toDelete()" class="remove">删除</span>
				</div>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);

import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "shopcar",
  props: ["showon"],
  data() {
    return {
      list: [
        // 					{
        // 						"isChecked":false,
        // 						"id":1,
        // 						"src":require("../../img/shopcar01.png"),
        // 						"type":"套装系列",
        // 						"title":"2017新款两件套儿童春秋运动装韩版女孩",
        // 						"text":"中大童外套衣服 白色时尚外套黑色长裤",
        // 						"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":2,
        // 					  	"src":require("../../img/shopcar02.png"),
        // 					  	"type":"套装系列",
        // 					  	"title":"2017品牌秋季儿童牛仔背带裙两件套",
        // 					  	"text":"中大童外套衣服 黑色条纹长袖外套长裤",
        // 					  	"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":3,
        // 						"src":require("../../img/shopcar03.png"),
        // 						"type":"套装系列",
        // 						"title":"童装男童秋装套装2017新款韩版儿童牛仔",
        // 						"text":"中大童外套衣服 蓝色磨白牛仔外衣裤装",
        // 						"price":119,
        // 						"val":1
        // 					  }
        // 					,
        // 					  {
        // 						  "isChecked":false,
        // 						"id":4,
        // 						"src":require("../../img/shopcar01.png"),
        // 						"type":"套装系列",
        // 						"title":"2017新款两件套儿童春秋运动装韩版女孩",
        // 						"text":"中大童外套衣服 白色时尚外套黑色长裤",
        // 						"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":5,
        // 					  	"src":require("../../img/shopcar02.png"),
        // 					  	"type":"套装系列",
        // 					  	"title":"2017品牌秋季儿童牛仔背带裙两件套",
        // 					  	"text":"中大童外套衣服 黑色条纹长袖外套长裤",
        // 					  	"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":6,
        // 						"src":require("../../img/shopcar03.png"),
        // 						"type":"套装系列",
        // 						"title":"童装男童秋装套装2017新款韩版儿童牛仔",
        // 						"text":"中大童外套衣服 蓝色磨白牛仔外衣裤装",
        // 						"price":119,
        // 						"val":1
        // 					  },
        // 					  {
        // 						"isChecked":false,
        // 						"id":7,
        // 						"src":require("../../img/shopcar01.png"),
        // 						"type":"套装系列",
        // 						"title":"2017新款两件套儿童春秋运动装韩版女孩",
        // 						"text":"中大童外套衣服 白色时尚外套黑色长裤",
        // 						"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":8,
        // 					  	"src":require("../../img/shopcar02.png"),
        // 					  	"type":"套装系列",
        // 					  	"title":"2017品牌秋季儿童牛仔背带裙两件套",
        // 					  	"text":"中大童外套衣服 黑色条纹长袖外套长裤",
        // 					  	"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":9,
        // 						"src":require("../../img/shopcar03.png"),
        // 						"type":"套装系列",
        // 						"title":"童装男童秋装套装2017新款韩版儿童牛仔",
        // 						"text":"中大童外套衣服 蓝色磨白牛仔外衣裤装",
        // 						"price":119,
        // 						"val":1
        // 					  },
        // 					  {
        // 						"isChecked":false,
        // 						"id":10,
        // 						"src":require("../../img/shopcar01.png"),
        // 						"type":"套装系列",
        // 						"title":"2017新款两件套儿童春秋运动装韩版女孩",
        // 						"text":"中大童外套衣服 白色时尚外套黑色长裤",
        // 						"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":11,
        // 					  	"src":require("../../img/shopcar02.png"),
        // 					  	"type":"套装系列",
        // 					  	"title":"2017品牌秋季儿童牛仔背带裙两件套",
        // 					  	"text":"中大童外套衣服 黑色条纹长袖外套长裤",
        // 					  	"price":119,
        // 						"val":1
        // 					},{
        // 						"isChecked":false,
        // 						"id":12,
        // 						"src":require("../../img/shopcar03.png"),
        // 						"type":"套装系列",
        // 						"title":"童装男童秋装套装2017新款韩版儿童牛仔",
        // 						"text":"中大童外套衣服 蓝色磨白牛仔外衣裤装",
        // 						"price":119,
        // 						"val":1
        // 					  }
      ]
    };
  },
  methods: {
    toBack() {
      this.$router.push("Home");
    },
    toClick() {
      this.$router.push("SearchPage");
    },
    min(item) {
      var val = Number(item.val);
      if (val > 1) {
        val--;
        item.val = val;
      }
    },
    add(item) {
      var val = Number(item.val);
      val++;
      item.val = val;
    },
    num(item) {
      var val = Number(item.val);
      var re = /^\+?[1-9][0-9]*$/;
      if (!re.test(val)) {
        item.val = 1;
      }
    },
    AllChecked() {
      //点击全选时商品都勾选，反之
      var a = this.$refs.input;
      this.list.forEach(function(item, i) {
        if (a.checked) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
      });
      // if(a.checked){
      // 	this.list.forEach(function(item,i){
      // 	item.isChecked = true
      // })
      // }else{
      // 	this.list.forEach(function(item,i){
      // 	item.isChecked = false
      // })
      // }
    },
    checkedUn() {
      // var b = this.$refs.checkedUn;
      // this.list.forEach(function(item, i) {
      //   if (b.checked) {
      //     item.isChecked = !item.isChecked;
      //     // if(item.isChecked === true){
      //     // 	item.isChecked = false
      //     // }else{
      //     // 	item.isChecked = true
      //     // }
      //   } else {
      //     item.isChecked = !item.isChecked;
      //     // if(item.isChecked === true){
      //     // 	item.isChecked = false
      //     // }else{
      //     // 	item.isChecked = true
      //     // }
      //   }
      // })
    },
    swipeleftFn(i) {
      //className wrapper替换成left
      this.$refs.product[i].className = "left"; //数组形式添加 i
    },
    swiperightFn(i) {
      this.$refs.product[i].className = "wrapper"; //
    },
    del(i) {
      //点击删除
      this.list.splice(i, 1);
      localStorage.setItem("proItems", JSON.stringify(this.list));
      if (this.list.length === 0) {
        localStorage.clear("proItems");
        this.$router.go(0); //跳转到本页
      }
    },
    toDelete() {
      var that = this;
      var unCheckedArr = [];
      var CheckedArr = [];
      this.list.forEach(function(item, i) {
        if (item.isChecked === false) {
          unCheckedArr.push(item); //将未勾选的存入数组unCheckedArr中，点击删除时保留未勾选
          console.log(item);
        } else {
          CheckedArr.push(item); //将勾选的存入数组CheckedArr中，点击删除时获取勾选个数
        }
      });
      //console.log(CheckedArr.length)
      if (CheckedArr.length != 0) {
        this.$dialog
          .confirm({
            title:
              "确认要删除这" + "  " + CheckedArr.length + "  " + "件商品吗？",
            closeOnClickOverlay: true, //点击蒙层时是否关闭弹窗
            confirmButtonText: "确定",
            cancelButtonText: "我再想想"
          })
          .then(() => {
            //点击确定时发生的事件
            localStorage.setItem(
              "proItems",
              JSON.stringify((this.list = unCheckedArr))
            );
            if (this.list.length === 0) {
              localStorage.clear("proItems")
              this.$router.go(0); //跳转到本页，即刷新一次
            }
          })
          .catch(() => {})
      } else {
        this.$toast({
          type: "fail",
          message: "未选择",
          duration: 1500,
          position: "middle"
        });
      }
    }
  },
  filters: {
    //添加单位和四舍五入后两位 需要return
    unit(val) {
      return "¥" + val
    },
    floatNumber(val) {
      return val.toFixed(2)
    }
  },
  computed: {
    //计算总计
    total() {
      var all = 0
      this.list.forEach(function(item, i) {
        if (item.isChecked === true) {
          all += item.price * item.val
        }
      });
      return all
    },
    checkedAll() {
      //每件商品都勾选时全选勾选  this.$refs不能再计算属性使用
      var bool = true;
      this.list.forEach(function(item, i) {
        if (item.isChecked === false) {
          bool = false
        }
      });
      // if(this.list.length === 0){
      // 	 bool = false
      // }
      return bool
    },
    count() {
      //计算属性计算{{count}}里的数量
      var countArr = [];
      this.list.forEach(function(item, i) {
        if (item.isChecked === true) {
          countArr.push(item)
        }
      });
      return countArr.length
    }
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("proItems"))) {
      var proInfo = JSON.parse(localStorage.getItem("proItems"))
      this.list = proInfo
      console.log(proInfo)
    } else {
      this.$emit("proItemsNo")
    }
  }
};
</script>

<style>
.shopcar .main ul .selectremove {
  width: 850px;
  display: flex;
  margin-left: -100px;
  transition: 0.5s;
}
/* .shopcar{background: #f1f1f1;padding:80px 0px 235px 0px;height:-webkit-fill-available;} */
.shopcar .header .back {
  font-size: 36px;
}
.shopcar .main ul {
  border-top: 20px solid #f1f1f1;
}
.shopcar .main ul li {
  border-bottom: 3px solid #f1f1f1;
}
/* 注意事项：
    使用左右滑动之后，发现不能上下滑动了，这是因为vue-touch 默认禁止了用户的手势操作，注意组件上有个css属性：touch-action: none；
    把这个属性覆盖一下就好了，如： touch-action: pan-y!important; */
.shopcar .main .touch {
  touch-action: pan-y !important;
}
/* 给定的类名left 让其向左偏移时有滑动效果*/
.shopcar .main ul li .left {
  width: 850px;
  display: flex;
  margin-left: -100px;
  transition: 0.5s;
}
/* v-touch里的最大包裹层 同时也是向右返回原本效果的类名，使其和向左有同样的滑动效果*/
.shopcar .main ul .wrapper {
  width: 850px;
  display: flex;
  transition: 0.5s;
}
/* 未滑动时显示的区域 */
.shopcar .main ul li .showpart {
  width: 750px;
  height: 222px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 4px;
  padding: 22px 0px;
}
/* 滑动时显示删除 */
.shopcar .main ul li .del {
  width: 100px;
  height: 222px;
  line-height: 222px;
  font-size: 40px;
  text-align: center;
  color: red;
  background: #f4b469;
  margin-top: 22px;
}

.shopcar .main ul li label {
  display: block;
  width: 26px;
  height: 26px;
  text-align: center;
  margin-left: 18px;
}
.shopcar .main ul li label input[type="checkbox"]:checked + i {
  background: url("https://languanzhao.github.io/img-for-app-project/dot.png")
    center no-repeat;
  background-size: 14px 14px;
}
.shopcar .main ul li label i {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #bfbfbf;
  display: inline-block;
}

.shopcar .main ul li img {
  width: 222px;
  height: 222px;
  margin: 0px 8px 0px 25px;
}
.shopcar .main ul li .right {
  width: 476px;
}
.shopcar .main ul li .right .bottom {
  display: flex;
  justify-content: space-between;
  margin: 90px 40px 0px 0px;
}
.shopcar .right span {
  font-size: 24px;
  font-family: "黑体";
  color: #999;
}
.shopcar .right h2 {
  font-size: 24px;
  font-family: "黑体";
  color: #333;
  font-weight: bold;
  margin: 10px 0px;
  line-height: 24px;
}
.shopcar .right p {
  font-size: 24px;
  font-family: "黑体";
  color: #666;
  line-height: 24px;
}
.shopcar .right b {
  font-size: 28px;
  color: #ec5252;
  line-height: 40px;
}
.shopcar .right form {
  width: 150px;
  height: 40px;
}
.shopcar .right form button {
  width: 40px;
  height: 40px;
  background: #dcdcdc;
  border: 0 none;
  text-align: center;
  line-height: 40px;
  font-weight: 400;
}
.shopcar .right input {
  width: 70px;
  height: 40px;
  background: #eeeeee;
  text-align: center;
  line-height: 40px;
}

.shopcar .pay {
  width: 100%;
  height: 90px;
  line-height: 90px;
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
}
/* 全选 */
.shopcar .pay .allchecked {
  display: flex;
  width: 100px;
  height: inherit;
  justify-content: space-around;
}
/* 全选按钮 */
.shopcar .pay .allchecked label input[type="checkbox"]:checked + i {
  background: url("https://languanzhao.github.io/img-for-app-project/dot.png")
    center no-repeat;
  background-size: 14px 14px;
}
.shopcar .pay .allchecked label i {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #bfbfbf;
  display: inline-block;
  margin: 32px 0px;
}
.shopcar .pay .leftpay {
  display: flex;
}
.shopcar .pay .allchecked span {
  font-size: 24px;
  color: #777777;
}

/* 去结算 */
.shopcar .pay .total {
  display: flex;
  justify-content: space-around;
}
.shopcar .pay .total b {
  font-size: 24px;
  color: #777777;
}
.shopcar .pay .total i {
  font-size: 36px;
  color: #ec5252;
}
.shopcar .pay .total span {
  display: block;
  width: 220px;
  height: 90px;
  background: #ff2626;
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-left: 28px;
}
.shopcar .pay .total .remove {
  border-radius: 90px;
}

/* 弹出框样式                     去除scoped*/
.van-dialog {
  width: 75%;
}
.van-dialog__header {
  font-size: 30px;
}
.van-dialog__confirm {
  height: 80px;
  background: #f4b469;
  color: #fff;
  font-size: 40px;
}
.van-dialog__cancel {
  height: 80px;
  background: #bfbfbf;
  color: #fff;
  font-size: 40px;
}
</style>
