import { useContext, useState } from 'react'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { AuthContext } from '@contexts'
import { AuthForm } from '@organisms'

type AuthFlow = 'login' | 'signup'
const LOGIN: AuthFlow = 'login'
const SIGNUP: AuthFlow = 'signup'

export default function LogIn() {
	const { logIn, signUp } = useContext(AuthContext)
	const [authFlow, setAuthFlow] = useState<AuthFlow>(LOGIN)
	const messagingContent = {
		[LOGIN]: {
			action: logIn,
			message: <>Welcome Back!{<br />}Please log in to your account.</>,
			secondaryMessage: "Don't have an account?",
			submitText: 'Log in'
		},
		[SIGNUP]: {
			action: signUp,
			message: <>Welcome!{<br />}Get ready to manage tasks!</>,
			secondaryMessage: 'Already have an account?',
			submitText: 'Sign up'
		}
	}
	const content = messagingContent[authFlow]

	const handleChangeAuthFlow = function handleChangeAuthFlow(): void {
		;(authFlow === LOGIN && setAuthFlow(SIGNUP)) || (authFlow === SIGNUP && setAuthFlow(LOGIN))
	}

	return (
		<Box
			h="100%"
			display="flex"
			mx="auto"
			style={{ marginTop: '25vh', justifyContent: 'center' }}
		>
			<AuthForm
				SecondaryAction={
					<UnstyledButton>
						<Text c="blue" component="span" onClick={handleChangeAuthFlow} mx="auto">
							{content.secondaryMessage}
						</Text>
					</UnstyledButton>
				}
				onSubmit={content.action}
				message={content.message}
				submitText={content.submitText}
			/>
		</Box>
	)
}
