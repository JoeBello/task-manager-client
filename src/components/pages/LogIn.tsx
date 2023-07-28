import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Checkbox, Group, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { AuthContext } from '@contexts'
import { SIGN_UP_PATH } from '@routes'
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
		<Box maw={300} mx="auto">
			<Text component="h1" size="lg" ta="center">
				Welcome back!{<br />}Please log in to your account.
			</Text>
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
				<Group mt="xl">
					<Button type="submit" variant="light" w="100%">
						Log In
					</Button>
					<Text c="blue" component={Link} to={SIGN_UP_PATH} mx="auto">
						Sign Up
					</Text>
				</Group>
			</form>
		</Box>
	)
}
