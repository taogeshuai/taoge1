import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import taoge from '../components/taoge'
import taoge2 from '../components/taoge2'
import hehaiyan from '../components/hehaiyan'

Vue.use(Router)

export default new Router({
  routes: [
	  {
		  // 重定向
		  path:'',
		  redirect:'/taoge'
	  },
    {
      path: '/taoge/:abc',
      name: 'taoge',
      component: taoge,
	  // meta:{
		 //  title:'taoge'
	  // }
    },
	{
		path: '/taoge2',
		name: 'taoge2',
		component: taoge2,
		// meta:{
		// 		  title:'taoge2'
		// }
		
	},
	{
		path:'/hehaiyan',
		component: hehaiyan
	}
  ],
	mode:'history',
	linkActiveClass:'active'
	
}
)
//  Router.beforeEach((to,from,next) => {
// 	document.title =to.meta.title
// 	next()
// })
// router.afterEach((to,from)=>{
// 	if(to.path === "/taoge"){
//     alert("进来news了哦");
//   }
// })