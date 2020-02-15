<template lang="pug">
		transition(name="slide-fade")
			.wrapper-task(v-if='isShown')
				slot(name="title")
				span.close(
					@click="$emit('closeAdd')"
					) X
				form(		
					@submit.prevent='addUser()'
					:class="{ 'form-group--error': $v.firstName.$error && $v.lastName.$error && $v.userName.$error}"
					)
					p Add first name:
					input(
						type="text" 
						v-model.trim="firstName"
						)
					p Add last name:
					input(
						type="text" 
						v-model.trim="lastName"
						)
					p Add username:
					input(
						type="text"
						v-model.trim='userName'
					)
					button.main-btn(
						type="submit"
						:disabled="$v.firstName.$invalid || $v.lastName.$invalid || $v.userName.$invalid"
						) Add user
				.error(v-if="!$v.lastName.required || !$v.firstName.required || !$v.userName.required")
					| All fields are required
				.error(v-if="!$v.lastName.minLength")
					| Minimum last name symbols length: {{$v.lastName.$params.minLength.min}}.
				.error(v-if="!$v.firstName.minLength")
					| Minimum first name symbols length: {{$v.firstName.$params.minLength.min}}.
				.error(v-if="!$v.lastName.maxLength")
					| Maximum last name symbols length: {{$v.lastName.$params.maxLength.max}}.
				.error(v-if="!$v.firstName.maxLength")
					| Maximum first name symbols length: {{$v.firstName.$params.maxLength.max}}
				.error(v-if="!$v.userName.minLength")
					| Minimum user name symbols length: {{$v.userName.$params.minLength.min}}.
				.error(v-if="!$v.userName.maxLength")
					| Maximum user name symbols length: {{$v.userName.$params.maxLength.max}}.					
				.error(v-if="!$v.userName.isUnique")
					| The user name is not unique 												
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
	name: 'AddUser',
	props: {
		isShown: Boolean
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
		},
		userName: {
			required,
			minLength: minLength(4),
			maxLength: maxLength(5),
			isUnique(value) {
				const filterUsers = this.users.filter(user => {
					return user.userName === value
				})
				if (filterUsers.length > 0) return false
				return true
			}
		}
	},
	computed: {
		...mapState('users', ['users'])
	},
	methods: {
		...mapActions('users', ['AddUser']),
		addUser() {
			const payload = {
				firstName: this.firstName,
				lastName: this.lastName,
				userName: this.userName
			}
			this.AddUser(payload)
			this.firstName = ''
			this.lastName = ''
			this.userName = ''
			this.$emit('closeAdd')
		}
	}
}
</script>

<style scoped lang="scss">
.wrapper-task {
	margin: 20px auto 20px auto;
	width: 100%;
	max-width: 340px;
	padding: 10px;
	box-sizing: border-box;
	border: solid 1px black;
	position: relative;
	span.close {
		position: absolute;
		top: 10px;
		right: 20px;
		transform: scale(1.5);
		cursor: pointer;
	}
	form {
		display: flex;
		flex-direction: column;
		button {
			margin: 20px auto 20px auto;
			padding: 8px;
			max-width: 100px;
			width: 100%;
		}
	}
	p {
		margin: 5px auto 5px auto;
		max-width: 400px;
		width: 100%;
	}
	.error {
		color: rgb(196, 29, 29);
	}
}
</style>
