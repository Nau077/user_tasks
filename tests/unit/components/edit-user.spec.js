/* eslint-env jest */

import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
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
				isEdit: false,
				lastName: 'arrr',
				userName: 'siff'
			},
			{
				fbKey: '-M09HJlW3D_6_fn2WPqv',
				firstName: 'Michael',
				isEdit: false,
				lastName: 'Jekson',
				userName: 'jean'
			}
		]
	},
	actions: {
		EditUser: jest.fn().mockReturnValue(Promise.resolve())
	}
}

function m() {
	return mount(EditUser, {
		localVue,
		propsData: {
			fbKey: '-M08uINzvHr2z0eqDSfh',
			isEdit: true
		},
		// sync: false,
		store: new Vuex.Store({
			modules: {
				users
			}
		})
	})
}

describe('test user-add component', () => {
	it('checks when all fields are empty', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)

		firstNameInput.setValue('')
		lastNameInput.setValue('')

		expect(w.vm.$v.firstName.$invalid).toBe(true)
		expect(w.vm.$v.lastName.$invalid).toBe(true)
	})

	it('checks when all fields have insufficient length', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)

		firstNameInput.setValue('aa')
		lastNameInput.setValue('aa')

		expect(w.vm.$v.firstName.$invalid).toBe(true)
		expect(w.vm.$v.lastName.$invalid).toBe(true)
	})

	it('checks when all is ok', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)

		firstNameInput.setValue('Johnaa')
		lastNameInput.setValue('Karteraa')

		expect(w.vm.$v.firstName.$invalid).toBe(false)
		expect(w.vm.$v.lastName.$invalid).toBe(false)
	})

	it('checks disable button when fields are not invalid', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)
		const editBtn = w.find('.edit-btn')

		firstNameInput.setValue('qwrt')
		lastNameInput.setValue('qwer')

		expect(editBtn.is('[disabled]')).toBe(false)
	})
})
