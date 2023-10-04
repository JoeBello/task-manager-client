import { MantineProvider } from '@mantine/core'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { AuthContext } from '@contexts'

const unauthenticatedContext: AuthContext = {
	logIn: () => null,
	logOut: () => null,
	signUp: () => null,
	user: {
		auth: false,
		username: null
	}
}

const authenticatedContext: AuthContext = {
	logIn: () => null,
	logOut: () => null,
	signUp: () => null,
	user: {
		auth: true,
		username: 'Zoinks Kaboom'
	}
}

const renderWithProviders = function renderWithProviders(
	children: React.ReactElement,
	authContext: AuthContext,
	initialEntries?: string[]
) {
	return render(
		<MantineProvider>
			<AuthContext.Provider value={authContext}>
				<MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
			</AuthContext.Provider>
		</MantineProvider>
	)
}

export const renderWithProvidersUnauthenticated = function renderWithProvidersUnauthenticated(
	children: React.ReactElement,
	initialEntries?: string[]
) {
	return renderWithProviders(children, unauthenticatedContext, initialEntries)
}

export const renderWithProvidersAuthenticated = function renderWithProvidersAuthenticated(
	children: React.ReactElement,
	initialEntries?: string[]
) {
	return renderWithProviders(children, authenticatedContext, initialEntries)
}

export default renderWithProviders
