import { screen } from '@testing-library/react'
import { renderWithProvidersUnauthenticated } from '@utils'
import AuthForm from './AuthForm'

describe('AuthForm', () => {
	test('renders', async () => {
		renderWithProvidersUnauthenticated(<AuthForm onSubmit={() => null} />)
		expect(await screen.getByTestId('auth-form')).toBeInTheDocument()
	})

	test('displays a default messaging when messaging is not provided', async () => {
		renderWithProvidersUnauthenticated(<AuthForm onSubmit={() => null} />)
		expect(await screen.getByText('Welcome!')).toBeInTheDocument()
		expect(await screen.getByText('Submit')).toBeInTheDocument()
	})

	test('displays provided messaging', async () => {
		const MESSAGE = 'Hello!'
		const SUBMIT_TEXT = 'Click!'
		renderWithProvidersUnauthenticated(
			<AuthForm onSubmit={() => null} message={MESSAGE} submitText={SUBMIT_TEXT} />
		)
		expect(await screen.getByText(MESSAGE)).toBeInTheDocument()
		expect(await screen.getByText(SUBMIT_TEXT)).toBeInTheDocument()
	})

	test('supports a secondary action', async () => {
		const TEST_ID = 'testing'
		const secondaryAction = <span data-testid={TEST_ID}>Test</span>

		renderWithProvidersUnauthenticated(
			<AuthForm onSubmit={() => null} SecondaryAction={secondaryAction} />
		)
		expect(await screen.getByTestId(TEST_ID)).toBeInTheDocument()
	})

	test.todo('remember me behavior', () => {
		// todo
	})
})
