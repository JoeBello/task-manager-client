import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Text } from '@mantine/core'
import { AuthContext } from '@contexts'
import { AuthForm } from '@organisms'
import { SIGN_UP_PATH } from '@routes'

export default function LogIn() {
	const { logIn } = useContext(AuthContext)

	return (
		<Box
			h="100%"
			display="flex"
			mx="auto"
			style={{ marginTop: '25vh', justifyContent: 'center' }}
		>
			<AuthForm
				SecondaryAction={
					<Text c="blue" component={Link} to={SIGN_UP_PATH} mx="auto">
						Don't have an account?
					</Text>
				}
				onSubmit={logIn}
				message={<>Welcome Back!{<br />}Please log in to your account.</>}
				submitText="Log in"
			/>
		</Box>
	)
}
