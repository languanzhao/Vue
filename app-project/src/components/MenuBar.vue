<template>
  <div class="MenuBar">
    <ul>
										<!-- / 默认为首页 -->
			<li v-for="item of list" :key="item.id"> 
				<router-link :to="item.url">                        
					<span class="iconfont" v-html="item.icon"></span>
					<span class="text">{{item.title}}</span>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      list: [
        {
          id: 1,
          icon: "&#xe63e;",
          title: "首页",
          url: "/Home"
        },
        {
          id: 2,
          icon: "&#xe61b;",
          title: "分类",
          url: "/Classify"
        },
        {
          id: 3,
          icon: "&#xe86f;",
          title: "今日折扣",
          url: "/Message"
        },
        {
          id: 4,
          icon: "&#xe7a6;",
          title: "购物车",
          url: "/judgeCar"
        },
        {
          id: 5,
          icon: "&#xe61e;",
          title: "我的帆歌",
          url: "/User"
        }
      ]
    }
  }
}
</script>


<style scoped>
.MenuBar {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  z-index: 999;
}
.MenuBar ul {
  display: flex;
  width: 100%;
  height: inherit;
}
.MenuBar ul li {
  width: 20%;
  height: inherit;
  background: #f4b469;
}
.MenuBar ul li a {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MenuBar ul li a .iconfont {
  font-size: 48px;
  color: #fff;
  line-height: 48px;
}
.MenuBar ul li a .text {
  font-size: 24px;
  color: #fff;
  line-height: 24px;
}
.MenuBar ul li span {
  display: block;
  margin: 3px 0px;
}
/* 点击后的效果 router-link 即a 标签自带高亮效果*/
.MenuBar ul li .router-link-exact-active {
  background: #fff;
}
.MenuBar ul li .router-link-exact-active span {
  color: #f4b469;
}
</style>
