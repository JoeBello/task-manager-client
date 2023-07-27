import { ReactNode, createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type AuthContext = {
	user: AuthUser
	logIn: (values: AuthParams) => void
	logOut: () => void
	signUp: (values: AuthParams) => void
}

type AuthUser = {
	name: string | null
	auth: boolean
}

type AuthParams = {
	email: string
	password: string
	remember: boolean
}

export const AuthContext = createContext<AuthContext>({
	user: { name: null, auth: false },
	logIn: () => null,
	logOut: () => null,
	signUp: () => null
})

export const AuthProvider = function AuthProvider({ children }: { children: ReactNode }) {
	const location = useLocation()
	const navigate = useNavigate()
	const [user, setUser] = useState<AuthUser>({ name: null, auth: false })

	// TODO: authentication
	const logIn = function logIn(values: AuthParams) {
		console.log('login: ', values)
		setUser({ name: 'user', auth: true })
		navigate(location.state?.from || '/')
	}

	// TODO: authentication
	const logOut = function logOut() {
		setUser({ name: null, auth: false })
		navigate('/')
	}

	const signUp = function signUp() {
		console.log('signUp')
		setUser({ name: 'user', auth: true })
		navigate(location.state?.from || '/')
	}

	return (
		<AuthContext.Provider value={{ user, logIn, logOut, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}
