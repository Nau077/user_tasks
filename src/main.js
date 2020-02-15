import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import Vuelidate from 'vuelidate'
import * as fb from 'firebase'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	created() {
		fb.initializeApp({
			apiKey: 'AIzaSyBz1ud0k4uWUypTDO4d23G9MsLLi3tUNrE',
			authDomain: 'pr-it-project.firebaseapp.com',
			databaseURL: 'https://users-task-599.firebaseio.com',
			projectId: 'users-task-599',
			storageBucket: 'users-task-599.appspot.com',
			messagingSenderId: '337888348444'
		})
		this.$store.dispatch('users/getUsers')
	},
	render: h => h(App)
}).$mount('#app')
