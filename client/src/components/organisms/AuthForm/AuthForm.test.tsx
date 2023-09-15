import { render, screen } from '@testing-library/react'
import AuthForm from './AuthForm'

describe('AuthForm', () => {
	test('renders', async () => {
		const onSubmit = () => null

		render(<AuthForm onSubmit={onSubmit} />)
		expect(await screen.getByTestId('auth-form')).toBeInTheDocument()
	})

	test('displays a default message when a message is not provided', async () => {
		const onSubmit = () => null

		render(<AuthForm onSubmit={onSubmit} />)
		expect(await screen.getByText('Welcome!')).toBeInTheDocument()
	})

	test('displays the provided message', async () => {
		const MESSAGE = 'Hello!'
		const onSubmit = () => null

		render(<AuthForm onSubmit={onSubmit} message={MESSAGE} />)
		expect(await screen.getByText(MESSAGE)).toBeInTheDocument()
	})

	test('displays the default "Submit" text when submit button text is not provided', async () => {
		const onSubmit = () => null

		render(<AuthForm onSubmit={onSubmit} />)
		expect(await screen.getByText('Submit')).toBeInTheDocument()
	})

	test('displays the provided submit button text', async () => {
		const SUBMIT = 'Click!'
		const onSubmit = () => null

		render(<AuthForm onSubmit={onSubmit} submitText={SUBMIT} />)
		expect(await screen.getByText(SUBMIT)).toBeInTheDocument()
	})

	test('allows for a secondary action', async () => {
		const TEST_ID = 'testing'
		const onSubmit = () => null
		const secondaryAction = <span data-testid={TEST_ID}>Test</span>

		render(<AuthForm onSubmit={onSubmit} SecondaryAction={secondaryAction} />)
		expect(await screen.getByTestId(TEST_ID)).toBeInTheDocument()
	})

	test.todo('remember me behavior', () => {
		// todo
	})
})
