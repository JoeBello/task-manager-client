import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Shell from './Shell'

describe('Shell', () => {
	test.todo('renders', async () => {
		const rendered = render(<Shell />, { wrapper: BrowserRouter })
		const shell = await rendered.queryByTestId('shell')
		expect(shell).toBeInTheDocument()
	})
})
