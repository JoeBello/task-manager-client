import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Shell header', () => {
	test('renders', async () => {
		const rendered = render(<Header />, { wrapper: BrowserRouter })

		const header = await rendered.queryByTestId('shell-header')
		expect(header).toBeInTheDocument()

		const menu = await rendered.queryByTestId('shell-header-menu')
		expect(menu).toBeInTheDocument()
	})

	test.todo('navigation menu shows "Log In" when the user is unauthenticated', async () => {
		const header = render(<Header />)
		const content = await header.findByText('Log In')
		expect(content).toBeInTheDocument()
	})

	test.todo(
		'navigation menu shows "Account Settings" when the user is authenticated',
		async () => {
			const header = render(<Header />)
			const content = await header.findByText('Account Settings')
			expect(content).toBeInTheDocument()
		}
	)

	test.todo('navigation menu shows "Dashboard" when the user is authenticated', async () => {
		const header = render(<Header />)
		const content = await header.findByText('Dashboard')
		expect(content).toBeInTheDocument()
	})

	test.todo('navigation menu shows "Log Out" when the user is authenticated', async () => {
		const header = render(<Header />)
		const content = await header.findByText('Log Out')
		expect(content).toBeInTheDocument()
	})
})
