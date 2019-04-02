import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import Message from './pages/Message/Message.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import Prodetails from './pages/Prodetails/Prodetails.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    name:"Home",
    path:"/",
    component:Home
    },
    {
    name:"Classify",
    path:"/Classify",
   component:Classify
    },
    {
    name: "ShopCar",
      path: "/ShopCar",
      component: ShopCar
    }, {
      name: "Message",
      path: "/Message",
      component: Message
    }, {
      name: "User",
      path: "/User",
      component: User
    },
    {
      name: "Prodetails",
      path: "/Prodetails",
      component: Prodetails
    }
  ]
})
