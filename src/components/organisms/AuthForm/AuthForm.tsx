import { Box, Button, Checkbox, Group, PasswordInput, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { validation } from '@utils'

const { email, password } = validation

interface AuthFormProps {
	SecondaryAction?: React.ReactNode
	actionText: string
	message?: string | React.ReactNode
	onSubmit: (values: { email: string; password: string; remember: boolean }) => void
}

export function AuthForm({ SecondaryAction, actionText, message, onSubmit }: AuthFormProps) {
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			remember: false
		},
		validate: { email, password }
	})

	return (
		<Box maw={300} mx="auto">
			<Text component="h1" size="lg" ta="center">
				{message ? message : 'Welcome!'}
			</Text>
			<form onSubmit={form.onSubmit(onSubmit)}>
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
						{actionText}
					</Button>
					{SecondaryAction}
				</Group>
			</form>
		</Box>
	)
}
