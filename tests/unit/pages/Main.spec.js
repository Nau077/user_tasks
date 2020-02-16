/* eslint-env jest */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Main from '@/pages/Main'
import AddUser from '@/components/page-modules/AddUser'
import UserList from '@/components/page-modules/UserList'

const localVue = createLocalVue()

function m() {
	return shallowMount(Main, {
		localVue
	})
}

describe('test userList component', () => {
	it('checks vue instance, checks', () => {
		const w = m()

		expect(w.isVueInstance()).toBe(true)
		expect(w.find(AddUser).exists()).toBe(true)
		expect(w.find(UserList).exists()).toBe(true)
		expect(w.contains('section.main')).toBe(true)
	})
	it('checks add-form-block to be shown', () => {
		const w = m()
		w.vm.isShownAddForm = false
		w.find('button.main-btn.title-btn').trigger('click')
		expect(w.vm.isShownAddForm).toEqual(true)
	})
})
