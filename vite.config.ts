/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const ROOT = path.resolve(__dirname)
const SRC = `${ROOT}/src`
const COMPONENTS = `${SRC}/components`

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@app', replacement: `${SRC}/app` },
			{ find: '@api', replacement: `${SRC}/api` },
			{ find: '@atoms', replacement: `${COMPONENTS}/atoms` },
			{ find: '@molecules', replacement: `${COMPONENTS}/molecules` },
			{ find: '@organisms', replacement: `${COMPONENTS}/organisms` },
			{ find: '@pages', replacement: `${COMPONENTS}/pages` },
			{ find: '@routes', replacement: `${SRC}/routes` },
			{ find: '@utils', replacement: `${SRC}/utils` }
		]
	},
	test: {
		environment: 'jsdom',
		globals: true,
		include: [`${SRC}/**/*.test.tsx`, `${SRC}/**/*.test.ts`],
		setupFiles: [`${ROOT}/vitest.setup.ts`]
	}
})
