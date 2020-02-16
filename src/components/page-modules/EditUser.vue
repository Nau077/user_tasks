<template lang="pug">
	.task(
		:class="{ 'form-group--error': $v.firstName.$error && $v.lastName.$error}"
	)
		.main-user-block
			.task-text 
				p Edit 
				p User name:
				input(v-model.trim='firstName')
			.task-text
				p Edit 							
				p User lastname: 
				input(v-model.trim='lastName')
			transition(name="slide-fade")
				.tasks-btns
					button.main-btn(@click="closeEdit()") Close
					button.main-btn.edit-btn(
						@click="saveEdit()"
						:disabled="$v.firstName.$invalid || $v.lastName.$invalid"
						) Save
		.error(v-if="!$v.lastName.required || !$v.firstName.required")
			| All fields are required
		.error(v-if="!$v.lastName.minLength")
			| Minimum last name symbols length: {{$v.lastName.$params.minLength.min}}.
		.error(v-if="!$v.firstName.minLength")
			| Minimum first name symbols length: {{$v.firstName.$params.minLength.min}}.
		.error(v-if="!$v.lastName.maxLength")
			| Maximum last name symbols length: {{$v.lastName.$params.maxLength.max}}.
		.error(v-if="!$v.firstName.maxLength")
			| Maximum first name symbols length: {{$v.firstName.$params.maxLength.max}}					
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
	name: 'EditUser',
	props: {
		fbKey: String,
		isEdit: Boolean
	},
	data() {
		return {
			firstName: '',
			lastName: '',
			userName: ''
		}
	},
	validations: {
		firstName: {
			required,
			minLength: minLength(3),
			maxLength: maxLength(35)
		},
		lastName: {
			required,
			minLength: minLength(3),
			maxLength: maxLength(35)
		}
	},
	created() {
		this.setUser()
	},
	computed: {
		...mapState('users', ['users'])
	},
	methods: {
		...mapActions('users', ['EditUser']),
		saveEdit() {
			const payload = {
				firstName: this.firstName,
				lastName: this.lastName,
				userName: this.userName,
				fbKey: this.fbKey
			}
			this.EditUser(payload)
			this.$emit('closeEdit', this.fbKey)
		},
		closeEdit() {
			this.$emit('closeEdit', this.fbKey)
		},
		setUser() {
			const user = this.users.find(user => user.fbKey === this.fbKey)
			this.firstName = user.firstName
			this.lastName = user.lastName
			this.userName = user.userName
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
	flex-direction: column;
	background-color: white;
	max-width: 500px;
	margin: 20px auto 20px auto;
	padding: 10px;
	background: #f1f1f1;
	border: 2px solid #4caf50;
	.main-user-block {
		display: flex;
		justify-content: space-between;
		max-width: 500px;
		width: 100%;
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
	.error {
		color: rgb(196, 29, 29);
		margin: 15px auto 15px auto;
	}
}
</style>
