import { emailValidation, passwordValidation } from './validation'

describe('Email validation', () => {
	test('allows valid email addresses', () => {
		const validAddresses = [
			'hello@domain.com',
			'user1234@somewhere.net',
			'android08@organization.org'
		]

		validAddresses.forEach((email) => {
			expect(emailValidation(email)).toBeNull()
		})
	})

	test('disallows invalid email addresses', async () => {
		const invalidAddresses = [
			'I shouldnt work',
			'thisWillBreak.com',
			'nope1234&^*(@geocities.rip'
		]

		invalidAddresses.forEach((email) => {
			expect(emailValidation(email)).toBe('Invalid email')
		})
	})
})

describe('Password validation', () => {
	const EXPECTED_PASSWORD_MESSAGE =
		'Passwords require 8-16 characters, one uppercase letter, one lowercase letter, and one number'

	test('returns the expected validation messaging', () => {
		const INVALID_PASSWORD = 'a'

		expect(passwordValidation(INVALID_PASSWORD)).toMatch(EXPECTED_PASSWORD_MESSAGE)
	})

	test('requires 8 - 16 characters, one uppercase letter, one lowercase letter, and one number', () => {
		const passwords = ['12345678Ab', 'abcdefghI9', 'ABDJCJDOEa1']

		passwords.forEach((password) => {
			expect(passwordValidation(password)).toBeNull()
		})
	})

	test('does not allow for special characters', () => {
		const passwords = ['ABCdef123$#%', 'ZYx987*^@', '{}[]/;:AbC123']

		passwords.forEach((password) => {
			expect(passwordValidation(password)).toBe(EXPECTED_PASSWORD_MESSAGE)
		})
	})
})
