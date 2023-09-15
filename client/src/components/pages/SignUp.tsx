import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@mantine/core'
import { AuthContext } from '@contexts'
import { LOG_IN_PATH } from '@routes'

import { AuthForm } from '@organisms'

export default function SignUp() {
	const { signUp } = useContext(AuthContext)
	const message = <>Welcome!{<br />}Get ready to manage tasks!</>

	return (
		<AuthForm
			SecondaryAction={
				<Text c="blue" component={Link} to={LOG_IN_PATH} mx="auto">
					Already have an account?
				</Text>
			}
			onSubmit={signUp}
			message={message}
			submitText="Sign up"
		/>
	)
}
