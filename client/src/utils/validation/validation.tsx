import { isEmail, matches } from '@mantine/form'

const INVALID_EMAIL = 'Invalid email'

export const emailValidation = isEmail(INVALID_EMAIL)

const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$/
const PASSWORD_VALIDATION_MESSAGE =
	'Passwords require 8-16 characters, one uppercase letter, one lowercase letter, and one number'

export const passwordValidation = matches(PASSWORD_VALIDATION, PASSWORD_VALIDATION_MESSAGE)
