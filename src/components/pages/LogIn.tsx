import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@mantine/core'
import { AuthContext } from '@contexts'
import { SIGN_UP_PATH } from '@routes'
import { AuthForm } from '@organisms'

export default function LogIn() {
	const { logIn } = useContext(AuthContext)
	const message = <>Welcome Back!{<br />}Please log in to your account.</>

	return (
		<AuthForm
			SecondaryAction={
				<Text c="blue" component={Link} to={SIGN_UP_PATH} mx="auto">
					Don't have an account?
				</Text>
			}
			actionText="Sign Up"
			onSubmit={logIn}
			message={message}
		/>
	)
}
