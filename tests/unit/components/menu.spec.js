/* eslint-env jest */
import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Menu from '@/components/Menu'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

function m() {
	return mount(Menu, {
		localVue,
		router
	})
}

describe('test userList component', () => {
	it('checks menu routes', async () => {
		const w = m()
		function getLink(row) {
			return w.findAll('.router-t').at(`${row}`)
		}

		getLink(0).trigger('click')
		expect(w.vm.$route.fullPath).toBe('/')

		getLink(1).trigger('click')
		expect(w.vm.$route.fullPath).toBe('/Users')

		getLink(2).trigger('click')
		expect(w.vm.$route.fullPath).toBe('/About')
	})
})
