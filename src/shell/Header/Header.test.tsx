import Header from './Header'
import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('Shell header', () => {
	test.skip('shows "Log In" when user is unauthenticated', async () => {
		const header = render(<Header />)
		const content = await header.findByText('Log In')
		expect(content).toBeInTheDocument()
	})

	test.todo('shows "Log Out" when user is authenticated', async () => {
		const header = render(<Header />)
		const content = await header.findByText('Log Out')
		expect(content).toBeInTheDocument()
	})

	test.todo('shows auth modal when "Log In" is clicked', async () => {
		const header = render(<Header />)
		// userEvent.click
		const content = await header.queryByTestId('auth-modal')
		expect(content).toBeInTheDocument()
	})
})
