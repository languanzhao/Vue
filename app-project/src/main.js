import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'     //命名为store 
import 'lib-flexible/flexible.js'        //引用自适应

import './style/common.css'              //导入公共样式  import './style/common.css'
import './style/iconfont.css'            //引用图标
import './style/border.css'              //移动端1像素边框

import axios from 'axios'                //json数据
Vue.prototype.$http = axios              //json数据 全局写法 就直接使用 $http 即可 如：this.$router   this.$store

import global_menuBar from './plugins/global_menuBar.js' //底部菜单全局插件引入
Vue.use(global_menuBar)                                  //底部菜单全局插件使用

import VueTouch from 'vue-touch'         //手指滑动效果
Vue.use(VueTouch, {name: 'v-touch'})
    VueTouch.config.swipe = {
      threshold: 100                     //手指左右滑动距离
    }

// import FastClick from 'fastclick'        //移动端点击300毫秒延迟
// FastClick.attach(document.body)

import Vant from 'vant'                    //ui
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,                                 //$router 固定写法
  store,                                  //$store  固定写法
  render: h => h(App)
}).$mount('#app')
