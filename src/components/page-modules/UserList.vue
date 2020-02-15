<template lang="pug">
		.tasks-container
			p Users count: {{usersFiltered.length}}
			FilterSearch(
				:filteredArray.sync="usersFiltered"
				:arrayToFilter="users"
			)
				template(v-slot:title)
					label Search users (start type last name or first name)		
			transition-group(name="slide-fade")
				.task-list(v-for="user in usersFiltered" :key="user.fbKey")
					.task(v-if='!user.isEdit')
						.task-text 
							p User name: 
							span {{user.firstName}}
						.task-text 							
							p User lastname: 
							span {{user.lastName}}
						.task-text 							
							p Username: 
							span {{user.userName}}
						transition(name="slide-fade")
							.tasks-btns
								button.main-btn(@click="showEdit(user.fbKey)") Edit user
					transition(name="slide-fade")
						.user-edit(v-if="user.isEdit")
							EditUser(
								:fbKey='user.fbKey'
								@closeEdit='closeEdit'
							)
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FilterSearch from '@/components/custom/FilterSearch'
import EditUser from '@/components/page-modules/EditUser'

export default {
	name: 'UserList',
	components: {
		FilterSearch,
		EditUser
	},
	data() {
		return {
			usersFiltered: ''
		}
	},
	computed: {
		...mapState('users', ['users'])
	},
	methods: {
		...mapActions('users', ['editUser', 'showEditUser', 'hideEditUser']),
		editUser(fbKey) {
			this.$emit('editUser', fbKey)
		},
		showEdit(fbKey) {
			this.showEditUser(fbKey)
		},
		closeEdit(fbKey) {
			this.hideEditUser(fbKey)
		}
	}
}
</script>

<style scoped lang="scss">
.tasks-container {
	margin-top: 20px;
}
.task {
	display: flex;
	justify-content: space-between;
	background-color: white;
	max-width: 500px;
	margin: 20px auto 20px auto;
	padding: 10px;
	background: #f1f1f1;
	border: 2px solid #4caf50;
	.task-text {
		display: flex;
		flex-direction: column;
		text-align: left;
		max-width: 120px;
		width: 100%;
		word-wrap: break-word;
		word-break: break-all;
	}
	.tasks-btns {
		display: flex;
		flex-direction: column;
	}
}
</style>
