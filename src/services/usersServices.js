import * as fb from 'firebase'

class User {
	constructor(firstName, lastName, userName, fbKey) {
		this.firstName = firstName
		this.lastName = lastName
		this.userName = userName
		this.fbKey = fbKey
	}
}

const fetchUsers = async () => {
	const fbVal = await fb
		.database()
		.ref('users')
		.once('value')
	const users = fbVal.val()
	const resultUsers = []

	Object.keys(fbVal.val()).forEach(fbKey => {
		const user = users[fbKey]
		resultUsers.push(
			new User(user.firstName, user.lastName, user.userName, fbKey)
		)
	})
	return resultUsers
}

const changeUser = async ({ firstName, lastName, userName, fbKey }) => {
	await fb
		.database()
		.ref('users')
		.child(fbKey)
		.update({
			firstName,
			lastName,
			userName,
			fbKey
		})
}

const createUser = async ({ firstName, lastName, userName }) => {
	const newUser = await fb
		.database()
		.ref('users')
		.push({ firstName, lastName, userName })
	return newUser.key
}

export { fetchUsers, changeUser, createUser }
