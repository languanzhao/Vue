import Vue from 'vue'
import Router from 'vue-router'

// import Home from './pages/Home/Home.vue'
// import Classify from './pages/Classify/Classify.vue'
// import Message from './pages/Message/Message.vue'
// import judgeCar from './pages/ShopCar/judgeCar.vue'
// import User from './pages/User/User.vue'
// import SearchPage from './pages/SearchPage.vue'
// import login from './pages/login.vue'
// import register from './pages/register.vue'
// import ProDetails from './pages/ProDetails/ProDetails.vue'
// import praise from './pages/ProDetails/components/praise.vue'
// import detailsPage from './pages/ProDetails/components/detailspage.vue'

//有三种写法形式
//一种如下，其一如上，另一种将路径放入component中      () => import('./pages/About/About')
// {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('./pages/About/About')
//     }

//路由懒加载
const Home = () => import('./pages/Home/Home.vue')
const Classify = () => import('./pages/Classify/Classify.vue')
const Message = () => import('./pages/Message/Message.vue')
const judgeCar = () => import('./pages/ShopCar/judgeCar.vue')
const User = () => import('./pages/User/User.vue')
const SearchPage = () => import('./pages/SearchPage.vue')
const login = () => import('./pages/login.vue')
const register = () => import('./pages/register.vue')
const ProDetails = () => import('./pages/ProDetails/ProDetails.vue')
const praise = () => import('./pages/ProDetails/components/praise.vue')
const detailsPage = () => import('./pages/ProDetails/components/detailspage.vue')
const shop = () => import('./pages/shop/shop.vue')
const address = () => import('./pages/User/address.vue')

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',                                  //    /  默认为打开的那个页面
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/judgeCar',
      name: 'judgeCar',
      component: judgeCar
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: SearchPage
    },
		{
			path:'/register',
			name:'register',
			component: register
		},
		{
			path:'/',
			name:'login',
			component: login
    },
    {
			path:'/ProDetails',
			name:'ProDetails',
      component: ProDetails,
      redirect:"/ProDetails/detailsPage",
      children:[{
          path:'/ProDetails/detailsPage',
          component:detailsPage
        },{
          path:'/ProDetails/praise',
          component:praise
        }]
    },
		{
			path:'/shop',
			name:'shop',
			component:shop
		},
		{
			path:'/address',
			name:'address',
			component:address
		}
    
  ]
})
