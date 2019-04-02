import MenuBar from '.././components/MenuBar.vue'

var MyPlugin = {}

MyPlugin.install = function(Vue){
	Vue.component("MenuBar",MenuBar)  //左标签 右组件内容
}
export default MyPlugin

