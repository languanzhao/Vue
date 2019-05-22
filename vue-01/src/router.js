import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import Message from './pages/Message/Message.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import Page01 from './pages/User/components/page01.vue'
import Page02 from './pages/User/components/page02.vue'
import Page001 from './pages/User/components/page001.vue'
import Page002 from './pages/User/components/page002.vue'
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
      component: User,
			redirect:'/User/Page01',
			children:[
				{
					path:'/User/Page01',
					component:Page01,
					redirect:'/User/Page001',
					children:[
						{
							path:'/User/Page001',
							component:Page001
						},
						{
							path:'/User/Page002',
							component:Page002
						}
					]
				},
				{
					path:'/User/Page02',
					component:Page02
				}
			]
    },
    {
      name: "Prodetails",
      path: "/Prodetails",
      component: Prodetails
    }
  ]
})
