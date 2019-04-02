<template>
    <div class="Search">
        <div class="header">
        <span class="iconfont code">&#xe620;</span>
        <form>
            <span class="iconfont to_search">&#xe600;</span>
            <input type="text" class="text" placeholder="请输入搜索内容" @click="toClick()">
        </form>
        <span class="iconfont mes">&#xe86f;</span>
    </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    toClick() {
      this.$router.push("SearchPage"); //跳转到  SearchPage.vue 页面
    }
  }
};
</script>

<style scoped>
.Search .header {
  display: flex;
  justify-content: space-between;
  padding: 22px 0px;
  background: #f4b469;
}

.Search .code {
  font-size: 44px;
  line-height: 44px;
  color: #fdf3e7;
  padding-left: 5px;
}
.Search form {
  width: 550px;
  height: 44px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
}
.Search form .text {
  width: 484px;
  height: inherit;
  font-family: "黑体";
  font-size: 20px;
  float: left;
  text-align: center;
  line-height: 44px;
  padding-right: 22px;
}
.Search form .to_search {
  width: 44px;
  height: inherit;
  font-size: 24px;
  display: block;
  float: left;
  text-align: center;
  line-height: 44px;
  color: #f4b469;
}
.Search .mes {
  font-size: 44px;
  line-height: 44px;
  color: #fdf3e7;
  padding-right: 10px;
}
input::-webkit-input-placeholder {
  color: #ffb35a;
  /* placeholder字体大小  */
}
</style>

