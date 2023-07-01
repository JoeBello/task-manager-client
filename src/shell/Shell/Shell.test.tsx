import React from 'react'
import { render, screen } from '@testing-library/react'
import Shell from './Shell'

test('renders learn react link', () => {
	render(<Shell />)
	const linkElement = screen.getByText(/learn react/i)
	expect(linkElement).toBeInTheDocument()
})
