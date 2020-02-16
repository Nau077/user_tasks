/* eslint-env jest */

import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import UserList from '@/components/page-modules/UserList'
import FilterSearch from '@/components/custom/FilterSearch'
import EditUser from '@/components/page-modules/EditUser'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)
localVue.use(Vuex)

const users = {
	namespaced: true,
	state: {
		users: [
			{
				fbKey: '-M08uINzvHr2z0eqDSfh',
				firstName: 'John',
				isEdit: true,
				lastName: 'arrr',
				userName: 'siff'
			},
			{
				fbKey: '-M09HJlW3D_6_fn2WPqv',
				firstName: 'Michael',
				isEdit: false,
				lastName: 'Jekson',
				userName: 'jean'
			},
			{
				fbKey: '-M09M2LyDQ5HODrSa2B0',
				firstName: 'Maria',
				isEdit: false,
				lastName: 'isDB',
				userName: 'data'
			}
		]
	},
	actions: {
		showEditUser: jest.fn().mockReturnValue(Promise.resolve()),
		hideEditUser: jest.fn().mockReturnValue(Promise.resolve())
	}
}

function m() {
	return mount(UserList, {
		localVue,
		stubs: {
			FilterSearch,
			EditUser
		},
		store: new Vuex.Store({
			modules: {
				users
			}
		})
	})
}

describe('test userList component', () => {
	it('check call of vuex action that change isEdit field after emit', async () => {
		const w = m()

		await localVue.nextTick()
		w.find(EditUser).vm.$emit('closeEdit', '-M09HJlW3D_6_fn2WPqv')

		expect(users.actions.hideEditUser).toHaveBeenCalled()
		expect(users.actions.hideEditUser.mock.calls[0][1]).toMatch(
			'-M09HJlW3D_6_fn2WPqv'
		)
	})
	it('check users text', async () => {
		const w = m()
		await localVue.nextTick()

		function checkUsersText(row) {
			return w
				.findAll('span')
				.at(`${row}`)
				.text()
		}
		expect(checkUsersText(1)).toEqual('Michael')
		expect(checkUsersText(2)).toEqual('Jekson')
		expect(checkUsersText(3)).toEqual('jean')

		expect(checkUsersText(4)).toEqual('Maria')
		expect(checkUsersText(5)).toEqual('isDB')
		expect(checkUsersText(6)).toEqual('data')
	})
	it('check show edit working', async () => {
		const w = m()
		await localVue.nextTick()
		const editBtn = w.findAll('.main-btn').at(2)
		editBtn.trigger('click')
		expect(users.actions.showEditUser).toHaveBeenCalled()
	})
})
