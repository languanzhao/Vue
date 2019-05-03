import Vue from 'vue'
import Router from 'vue-router'
//三种写法
import Home from './pages/Home/Home'            //形式一
																								//形式二 About
// const User = () => import('./pages/User/User')  //形式三
import User from './pages/User/User'
import Prodetails from './pages/Prodetails/Prodetails'
import About from './pages/About/About'
import detailsPage from './pages/About/components/detailsPage'
import commentPage from './pages/About/components/commentPage'
import Message from './pages/Message/Message'
import Shop from './pages/Shop/Shop'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
	  meta:{
	  	title:'首页'
	  },
    },
		{
			path:"/Prodetails",
			name:"Prodetails",
			component:Prodetails,
			meta:{
				title:'详情'
			},
		},
		{
			path: '/Shop',
			name: 'Shop',
			component: Shop,
			meta:{
				title:'商店'
			},
		},
		{
			path: '/Message',
			name: 'Message',
			component: Message,
			meta:{
				title:'消息'
			},
		},
    {
      path: '/About',
      name: 'about',
      // component: () => import('./pages/About/About')
			component:About,
			redirect:"/About/detailsPage",
			children:[
				{
					path:"/About/detailsPage",
					component:detailsPage,
					meta:{
						title:'细节'
					},
				},
				{
					path:"/About/commentPage",
					component:commentPage,
					meta:{
						title:'评论'
					},
				}
				]
    },
		{
			path:'/User',
			name:'User',
			component:User,
			meta:{
				title:'用户'
			},
		}
  ],
  
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router