import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// cleanup after each test
afterEach(() => {
	cleanup()
})
