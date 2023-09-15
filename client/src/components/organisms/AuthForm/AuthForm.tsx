import { Box, Button, Checkbox, Group, PasswordInput, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { emailValidation, passwordValidation } from '@utils'

interface AuthFormProps {
	SecondaryAction?: React.ReactNode
	message?: string | React.ReactNode
	onSubmit: (values: { email: string; password: string; remember: boolean }) => void
	submitText?: string
}

export default function AuthForm({
	SecondaryAction,
	message,
	onSubmit,
	submitText
}: AuthFormProps) {
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			remember: false
		},
		validate: { email: emailValidation, password: passwordValidation }
	})

	return (
		<Box maw={300} mx="auto">
			<Text component="h1" size="lg" ta="center">
				{message ? message : 'Welcome!'}
			</Text>
			<form data-testid="auth-form" onSubmit={form.onSubmit(onSubmit)}>
				<TextInput
					label="Email"
					mt="md"
					placeholder="Enter email"
					withAsterisk
					required
					{...form.getInputProps('email')}
				/>
				<PasswordInput
					label="Password"
					mt="md"
					placeholder="Enter password"
					withAsterisk
					required
					{...form.getInputProps('password')}
				/>
				{/* TODO: remember me always */}
				<Checkbox
					mt="sm"
					mx="auto"
					label="Remember me"
					{...(form.getInputProps('remember'), { type: 'checkbox' })}
				/>
				<Group mt="xl">
					<Button type="submit" variant="light" w="100%">
						{submitText ?? 'Submit'}
					</Button>
					{SecondaryAction}
				</Group>
			</form>
		</Box>
	)
}
