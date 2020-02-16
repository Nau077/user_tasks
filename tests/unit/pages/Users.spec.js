/* eslint-env jest */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Users from '@/pages/Users'
import UserList from '@/components/page-modules/UserList'

const localVue = createLocalVue()

function m() {
	return shallowMount(Users, {
		localVue
	})
}

describe('test userList component', () => {
	it('checks vue instance, checks exist of userList child', () => {
		const w = m()

		expect(w.isVueInstance()).toBe(true)
		expect(w.find(UserList).exists()).toBe(true)
	})
})
