/* eslint-env jest */
import { createLocalVue, mount } from '@vue/test-utils'
import About from '@/pages/About'

const localVue = createLocalVue()

function m() {
	return mount(About, {
		localVue
	})
}

describe('test userList component', () => {
	it('checks vue instance', () => {
		const w = m()

		expect(w.contains('section.about')).toBe(true)
		expect(w.isVueInstance()).toBe(true)
	})
})
