import MenuBar from '@/components/MenuBar.vue'

var Myplugins = {}

Myplugins.install = function(Vue){
    Vue.component("MenuBar",MenuBar)
}

export default Myplugins