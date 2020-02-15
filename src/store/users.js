import { fetchUsers, changeUser, createUser } from '@/services/usersServices'

export default {
	namespaced: true,
	state: {
		users: []
	},
	mutations: {
		SET_USERS(state, payload) {
			payload.forEach(user => {
				user.isEdit = false
			})
			state.users = payload
		},
		ADD_USER(state, payload) {
			state.users.push({
				fbKey: payload.fbKey,
				firstName: payload.firstName,
				lastName: payload.lastName,
				userName: payload.userName,
				isEdit: false
			})
		},
		EDIT_USER(state, payload) {
			const user = state.users.find(user => user.fbKey == payload.fbKey)
			user.firstName = payload.firstName
			user.lastName = payload.lastName
		},
		SHOW_EDIT(state, fbKey) {
			const user = state.users.find(user => user.fbKey == fbKey)
			user.isEdit = true
		},
		HIDE_EDIT(state, fbKey) {
			const user = state.users.find(user => user.fbKey == fbKey)
			user.isEdit = false
		}
	},
	actions: {
		async getUsers({ commit }) {
			const users = await fetchUsers()
			commit('SET_USERS', users)
		},
		async AddUser({ commit }, { firstName, lastName, userName }) {
			const fbKey = await createUser({ firstName, lastName, userName })
			const payload = {
				firstName,
				lastName,
				userName,
				fbKey
			}
			commit('ADD_USER', payload)
		},
		async EditUser({ commit }, payload) {
			await changeUser(payload)
			commit('EDIT_USER', payload)
			commit('HIDE_EDIT', payload.fbKey)
		},
		showEditUser({ commit }, payload) {
			commit('SHOW_EDIT', payload)
		},
		hideEditUser({ commit }, payload) {
			commit('HIDE_EDIT', payload)
		}
	}
}
