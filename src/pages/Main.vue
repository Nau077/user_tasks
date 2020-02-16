<template lang="pug">
section.main
	.container
		transition(name="slide-fade")
			.wrapper-main-btn(v-if='!isShownAddForm')
				button.main-btn.title-btn(@click="viewTasks()") Add user
		AddUser(
			@closeAdd='closeAdd()'
			:isShown='isShownAddForm'
		)
			template(v-slot:title="")
				h2 Add user:
		UserList
</template>

<script>
import AddUser from '@/components/page-modules/AddUser'
import UserList from '@/components/page-modules/UserList'

export default {
	name: 'Main',
	components: {
		AddUser,
		UserList
	},
	data() {
		return {
			isShownAddForm: false
		}
	},
	methods: {
		viewTasks() {
			this.isShownAddForm = true
		},
		closeAdd() {
			this.isShownAddForm = false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped scoped lang="scss">
.main {
	max-width: 1100px;
	width: 100%;
	position: relative;
	margin: auto;
}
.wrapper-view-btn {
	max-width: 300px;
	width: 100%;
	margin: auto;
}

.wrapper-main-btn {
	max-width: 300px;
	width: 100%;
	margin: 20px auto 20px auto;
}

.title-btn {
	width: 100%;
	padding: 10px;
}
.content {
	display: flex;
	justify-content: center;
	margin: 20px 0 20px 0;
}
.content p {
	margin-right: 10px;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
