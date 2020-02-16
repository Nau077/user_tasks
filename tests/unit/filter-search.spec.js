/* eslint-env jest */

import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import FilterSearch from '@/components/custom/FilterSearch'

const localVue = createLocalVue()
localVue.use(Vuex)

const arrayToFilter = [
	{
		firstName: 'John',
		lastName: 'arrr',
		fbKey: '-M08uINzvHr2z0eqDSfh',
		isEdit: false,
		userName: 'siff'
	},
	{
		firstName: 'Michael',
		lastName: 'Jekson',
		fbKey: '-M09HJlW3D_6_fn2WPqv',
		isEdit: false,
		userName: 'jean'
	}
]

const filteredArray = [
	{
		firstName: 'Michael',
		lastName: 'Jekson',
		fbKey: '-M09HJlW3D_6_fn2WPqv',
		isEdit: false,
		userName: 'jean'
	}
]

function m() {
	return mount(FilterSearch, {
		localVue,
		propsData: {
			arrayToFilter
		}
	})
}

describe('test user-add component', () => {
	it('check when we dont use filter', () => {
		const w = m()
		expect(w.vm.search).toEqual('')
		expect(w.vm.filteredArray).toEqual(arrayToFilter)
	})

	it('check when we use filter, when type name', async () => {
		const w = m()
		const filterInput = w.find('input')
		filterInput.setValue('Michael')
		filterInput.trigger('input')

		expect(filterInput.element.value).toEqual('Michael')
		expect(w.vm.search).toEqual('Michael')
		expect(w.vm.filteredArray).toEqual(filteredArray)
	})

	it('check when we use filter, when type 3 letters of name', async () => {
		const w = m()
		const filterInput = w.find('input')
		filterInput.setValue('Mich')
		filterInput.trigger('input')

		expect(filterInput.element.value).toEqual('Mich')
		expect(w.vm.search).toEqual('Mich')
		expect(w.vm.filteredArray).toEqual(filteredArray)
	})

	it('check when we use filter, when type 3 letters of name', async () => {
		const w = m()
		const filterInput = w.find('input')
		filterInput.setValue('Jek')
		filterInput.trigger('input')

		expect(filterInput.element.value).toEqual('Jek')
		expect(w.vm.search).toEqual('Jek')
		expect(w.vm.filteredArray).toEqual(filteredArray)
	})

	it('check that filter does not work when we use user name', async () => {
		const w = m()
		const filterInput = w.find('input')
		filterInput.setValue('jean')
		filterInput.trigger('input')

		expect(filterInput.element.value).toEqual('jean')
		expect(w.vm.search).toEqual('jean')
		expect(w.vm.filteredArray).toEqual([])
	})
})
