import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main'
import Users from '@/pages/Users'
import About from '@/pages/About'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main
	},
	{
		path: '/Users',
		name: 'Users',
		component: Users
	},
	{
		path: '/About',
		name: 'About',
		component: About
	}
]

const router = new VueRouter({
	routes
})

export default router
