import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible.js'    //自适应尺寸
import './style/iconfont.css'            //引用图标

import './style/common.css'              //导入公共样式  import './style/common.css'

import glbal_menuBar from './plugins/global_menuBar.js'  //全局底部菜单栏插件
Vue.use(glbal_menuBar)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
