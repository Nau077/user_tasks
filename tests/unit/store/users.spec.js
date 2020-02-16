import usersStore from '@/store/users'

const user = [
	{
		fbKey: '-M08uINzvHr2z0eqDSfh',
		firstName: 'John',
		isEdit: false,
		lastName: 'arrr',
		userName: 'siff'
	}
]

const user2 = {
	firstName: 'Michael',
	lastName: 'Jekson',
	userName: 'jean',
	fbKey: '-M09HJlW3D_6_fn2WPqv'
}

describe('SET_USERS', () => {
	it('adds a users to the state', () => {
		const state = {
			users: []
		}

		usersStore.mutations.SET_USERS(state, user)

		expect(state).toEqual({
			users: user
		})
	})
})

describe('SET_USERS', () => {
	it('adds a user to the state', () => {
		const state = {
			users: user
		}

		usersStore.mutations.ADD_USER(state, user2)
		expect(state).toEqual({
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
		})
	})
})
