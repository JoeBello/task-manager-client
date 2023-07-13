import Shell from './Shell'
import { render } from '@testing-library/react'

describe('Shell', () => {
	test('renders header', async () => {
		const shell = render(<Shell />)
		const header = await shell.queryByTestId('shell-header')
		expect(header).toBeInTheDocument()
	})
})
