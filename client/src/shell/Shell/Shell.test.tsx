import { screen } from '@testing-library/react'
import { renderWithProvidersUnauthenticated } from '@utils'
import Shell from './Shell'

describe('Shell', () => {
	test('renders', async () => {
		renderWithProvidersUnauthenticated(<Shell />)

		expect(await screen.getByTestId('shell')).toBeInTheDocument()
	})
})
