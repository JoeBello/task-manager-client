import { useContext } from 'react'
import { Box, Button, Checkbox, Container, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { AuthContext } from '@contexts'
import { validation } from '@utils'

const { email, password } = validation

export default function LogIn() {
	const { logIn } = useContext(AuthContext)

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			remember: false
		},
		validate: { email, password }
	})

	return (
		<Container size="xl">
			<Box maw={300} mx="auto">
				<form onSubmit={form.onSubmit((values) => logIn(values))}>
					<TextInput
						label="Email"
						mt="md"
						placeholder="Enter email"
						withAsterisk
						required
						{...form.getInputProps('email')}
					/>
					<TextInput
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
						{...(form.getInputProps('termsOfService'), { type: 'checkbox' })}
					/>
					<Group position="right" mt="xl">
						<Button type="submit" variant="light" w="100%">
							Log In
						</Button>
					</Group>
				</form>
			</Box>
		</Container>
	)
}
