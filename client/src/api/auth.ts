const login = async function login(values: { email: string; password: string; remember: boolean }) {
	const response = await fetch('/auth/login', {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'applicstion/json'
		},
		body: JSON.stringify(values)
	}).catch((err) => err)

	return response instanceof Error ? new Error(`Failed to login: ${response}`) : response.json()
}

const logout = async function logout(username: string) {
	const response = await fetch('/auth/logout', {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username })
	}).catch((err) => err)

	return response instanceof Error ? new Error(`Failed to logout: ${response}`) : response.json()
}

const signup = async function signup(values: {
	email: string
	password: string
	remember: boolean
}) {
	const response = await fetch('/auth/signup', {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'applicstion/json'
		},
		body: JSON.stringify(values)
	}).catch((err) => err)

	return response instanceof Error ? new Error(`Failed to signup: ${response}`) : response.json()
}

export const auth = {
	login,
	logout,
	signup
}
