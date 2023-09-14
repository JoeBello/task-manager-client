import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { AuthContext } from '@contexts'
import { LOG_IN_PATH } from '@routes'
import Header from './Header'

const renderAuthContext = function renderAuthContext(
	children: React.ReactElement,
	value: AuthContext
) {
	return render(<AuthContext.Provider value={value}>{children}</AuthContext.Provider>, {
		wrapper: BrowserRouter
	})
}

const unauthenticatedContext = {
	logIn: () => null,
	logOut: () => null,
	signUp: () => null,
	user: {
		auth: false,
		username: null
	}
}

const authenticatedContext = {
	logIn: () => null,
	logOut: () => null,
	signUp: () => null,
	user: {
		auth: true,
		username: 'Zoinks Kaboom'
	}
}

describe('Shell header', () => {
	test('renders', async () => {
		render(<Header />, { wrapper: BrowserRouter })
		expect(await screen.getByTestId('shell-header')).toBeInTheDocument()
	})

	test('displays "Log in" CTA when user is unauthenticated', async () => {
		renderAuthContext(<Header />, unauthenticatedContext)
		expect(await screen.getByText('Log in')).toBeInTheDocument()
	})

	test('doesn\'t display the "Log in" CTA when user is at auth route', async () => {
		render(
			<AuthContext.Provider value={unauthenticatedContext}>
				<MemoryRouter initialEntries={[LOG_IN_PATH]}>
					<Header />
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(await screen.queryByText('Log in')).not.toBeInTheDocument()
	})

	test('displays nav menu when user is authenticated', async () => {
		renderAuthContext(<Header />, authenticatedContext)
		expect(await screen.queryByTestId('shell-header-menu')).toBeInTheDocument()
	})

	test('nav menu dropdown includes "Log out" option', async () => {
		renderAuthContext(<Header />, authenticatedContext)
		const menu = await screen.queryByTestId('shell-header-menu')
		menu && fireEvent.click(menu)
		expect(await screen.getByRole('menu')).toBeInTheDocument()
		expect(await screen.getByText('Log out')).toBeInTheDocument()
	})
})
