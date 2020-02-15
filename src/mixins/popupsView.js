import { mapState, mapActions } from 'vuex'

export default {
	data() {
		return {
			isPopup: false,
			isEdit: false
		}
	},
	computed: {
		...mapState('users', ['users'])
	},
	methods: {
		...mapActions('users', ['EditUser', 'viewTodo']),
		closeDescPopup() {
			this.isPopup = false
		},
		closeEdit() {
			this.isEdit = false
		},
		saveEdit(value) {
			this.isEdit = value
		},
		editUser(fbKey) {
			const user = this.users.find(user => fbKey == user.fbKey)
			this.edit.editFirstName = user.firstName
			this.edit.editLastName = user.lastName
			this.edit.userName = user.userName
			this.edit.fbKey = user.fbKey
			this.isEdit = true
		}
	}
}
