/* eslint-env jest */

import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import AddUser from '@/components/page-modules/AddUser'
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
		AddUser: jest.fn().mockReturnValue(Promise.resolve())
	}
}

function m() {
	return mount(AddUser, {
		localVue,
		propsData: {
			isShown: true
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
	it('check when userName is not valid (length more over 5)', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)
		const userNameInput = w.findAll('input').at(2)

		firstNameInput.setValue('Johnaa')
		lastNameInput.setValue('Karteraa')
		userNameInput.setValue('longName')

		expect(w.vm.$v.firstName.$invalid).toBe(false)
		expect(w.vm.$v.lastName.$invalid).toBe(false)
		expect(w.vm.$v.userName.$invalid).toBe(true)
		expect(w.find('button').is('[disabled]')).toBe(true)
	})

	it('check when userName is not unique', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)
		const userNameInput = w.findAll('input').at(2)

		firstNameInput.setValue('Johnaa')
		lastNameInput.setValue('Karteraa')
		userNameInput.setValue('jean')

		expect(w.vm.$v.firstName.$invalid).toBe(false)
		expect(w.vm.$v.lastName.$invalid).toBe(false)
		expect(w.vm.$v.userName.isUnique).toBe(false)
	})

	it('check when all fields are empty', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)
		const userNameInput = w.findAll('input').at(2)

		firstNameInput.setValue('')
		lastNameInput.setValue('')
		userNameInput.setValue('')

		expect(w.vm.$v.firstName.$invalid).toBe(true)
		expect(w.vm.$v.lastName.$invalid).toBe(true)
		expect(w.vm.$v.userName.$invalid).toBe(true)
	})

	it('check when all is ok', () => {
		const w = m()

		const firstNameInput = w.findAll('input').at(0)
		const lastNameInput = w.findAll('input').at(1)
		const userNameInput = w.findAll('input').at(2)

		firstNameInput.setValue('Johnaa')
		lastNameInput.setValue('Karteraa')
		userNameInput.setValue('short')

		expect(w.vm.$v.firstName.$invalid).toBe(false)
		expect(w.vm.$v.lastName.$invalid).toBe(false)
		expect(w.vm.$v.userName.$invalid).toBe(false)
		expect(w.vm.$v.userName.isUnique).toBe(true)
	})
})
