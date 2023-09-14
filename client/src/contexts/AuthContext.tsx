import { ReactNode, createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '@api'

export type AuthContext = {
	user: AuthUser
	logIn: (values: AuthParams) => void
	logOut: (username: string) => void
	signUp: (values: AuthParams) => void
}

type AuthUser = {
	username: string | null
	auth: boolean
}

type AuthParams = {
	email: string
	password: string
	remember: boolean
}

export const AuthContext = createContext<AuthContext>({
	user: { username: null, auth: false },
	logIn: () => null,
	logOut: () => null,
	signUp: () => null
})

export const AuthProvider = function AuthProvider({ children }: { children: ReactNode }) {
	const location = useLocation()
	const navigate = useNavigate()
	const [user, setUser] = useState<AuthUser>({ username: null, auth: false })

	// TODO: authentication
	const logIn = async function logIn(values: AuthParams) {
		const response = await auth.login(values).catch((err) => err)

		if (response instanceof Error) {
			// TODO: UX - inform user
			console.error(response)
		} else {
			setUser({ username: response.username, auth: true })
			navigate(location.state?.from || '/')
		}
	}

	// TODO: authentication
	const logOut = async function logOut(username: string) {
		const response = await auth.logout(username).catch((err) => err)

		if (response instanceof Error) {
			// TODO: UX - inform user
			console.error(response)
		} else {
			setUser({ username: null, auth: false })
			navigate('/')
		}
	}

	const signUp = async function signUp(values: AuthParams) {
		const response = await auth.signup(values).catch((err) => err)

		setUser({ username: 'anyone', auth: true })
		navigate(location.state?.from || '/')

		if (response instanceof Error) {
			// TODO: UX - inform user
			console.error(response)
		} else {
			setUser({ username: response.username, auth: true })
			navigate(location.state?.from || '/')
		}
	}

	return (
		<AuthContext.Provider value={{ user, logIn, logOut, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}
