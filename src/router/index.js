import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
 
const Home = resolve => {
  require.ensure(['@/views/Home'], () => {
    resolve(require('@/views/Home'))
  })
}

const NotFound = resolve => {
  require.ensure(['@/views/NotFound'], () => {
    resolve(require('@/views/NotFound'))
  })
}

const Error = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['@/views/Error'], () => {
    resolve(require('@/views/Error'))
  })
}

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{path:'/',name:'Home',component:Home},
    {path: '/member',name:'Member', component: NotFound },
		{path: '/error',name:'Error', component: Error },
		{path: '*',component: NotFound }
	]
})