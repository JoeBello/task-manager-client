import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Text } from '@mantine/core'
import { AuthContext } from '@contexts'
import { AuthForm } from '@organisms'
import { LOG_IN_PATH } from '@routes'

export default function SignUp() {
	const { signUp } = useContext(AuthContext)

	return (
		<Box
			h="100%"
			display="flex"
			mx="auto"
			style={{ marginTop: '25vh', justifyContent: 'center' }}
		>
			<AuthForm
				SecondaryAction={
					<Text c="blue" component={Link} to={LOG_IN_PATH} mx="auto">
						Already have an account?
					</Text>
				}
				onSubmit={signUp}
				message={<>Welcome!{<br />}Get ready to manage tasks!</>}
				submitText="Sign up"
			/>
		</Box>
	)
}
