import { ReactNode, createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type AuthContext = {
	user: AuthUser
	logIn: (values: LogInParams) => void
	logOut: () => void
}

type AuthUser = {
	name: string | null
	auth: boolean
}

type LogInParams = {
	email: string
	password: string
	remember: boolean
}

export const AuthContext = createContext<AuthContext>({
	user: { name: null, auth: false },
	logIn: () => null,
	logOut: () => null
})

export const AuthProvider = function AuthProvider({ children }: { children: ReactNode }) {
	const location = useLocation()
	const navigate = useNavigate()
	const [user, setUser] = useState<AuthUser>({ name: null, auth: false })

	// TODO: authentication
	const logIn = function logIn(values: LogInParams) {
		console.log('login: ', values)
		setUser({ name: 'user', auth: true })
		navigate(location.state?.from || '/')
	}

	// TODO: authentication
	const logOut = function logOut() {
		setUser({ name: null, auth: false })
		navigate('/')
	}

	return <AuthContext.Provider value={{ user, logIn, logOut }}>{children}</AuthContext.Provider>
}
