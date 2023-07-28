import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Checkbox, Group, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { AuthContext } from '@contexts'
import { LOG_IN_PATH } from '@routes'
import { validation } from '@utils'

const { email, password } = validation

export default function SignUp() {
	const { signUp } = useContext(AuthContext)

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
				Welcome!{<br />}Get ready to manage tasks!
			</Text>
			<form onSubmit={form.onSubmit((values) => signUp(values))}>
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
				<Group mt="xl">
					<Button type="submit" variant="light" w="100%">
						Sign Up
					</Button>
					<Text c="blue" component={Link} to={LOG_IN_PATH} mx="auto">
						Log In
					</Text>
				</Group>
			</form>
		</Box>
	)
}
