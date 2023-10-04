import { AppShell } from '@mantine/core'
import { fireEvent, screen } from '@testing-library/react'
import { LOG_IN_PATH } from '@routes'
import { renderWithProvidersUnauthenticated, renderWithProvidersAuthenticated } from '@utils'
import { Header } from './Header'

describe('Shell header', () => {
	test('renders', async () => {
		renderWithProvidersUnauthenticated(
			<AppShell>
				<Header />
			</AppShell>
		)
		expect(await screen.getByTestId('shell-header')).toBeInTheDocument()
	})

	test('displays "Log in" CTA when user is unauthenticated', async () => {
		renderWithProvidersUnauthenticated(
			<AppShell>
				<Header />
			</AppShell>
		)
		expect(await screen.getByText('Log in')).toBeInTheDocument()
	})

	test('doesn\'t display the "Log in" CTA when user is at auth route', async () => {
		renderWithProvidersUnauthenticated(
			<AppShell>
				<Header />
			</AppShell>,
			[LOG_IN_PATH]
		)
		expect(await screen.queryByText('Log in')).not.toBeInTheDocument()
	})

	test('displays nav menu when user is authenticated', async () => {
		renderWithProvidersAuthenticated(
			<AppShell>
				<Header />
			</AppShell>
		)
		expect(await screen.queryByTestId('shell-header-menu')).toBeInTheDocument()
	})

	test('nav menu dropdown includes "Log out" option', async () => {
		renderWithProvidersAuthenticated(
			<AppShell>
				<Header />
			</AppShell>
		)
		const menu = await screen.queryByTestId('shell-header-menu')
		menu && fireEvent.click(menu)
		expect(await screen.getByRole('menu')).toBeInTheDocument()
		expect(await screen.getByText('Log out')).toBeInTheDocument()
	})
})
