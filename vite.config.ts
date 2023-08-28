/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const ROOT = path.resolve(__dirname)
const SRC = `${ROOT}/client/src`
const COMPONENTS = `${SRC}/components`

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/auth': {
				target: 'http://localhost:3000/',
				changeOrigin: true
			},
			'/api': {
				target: 'http://localhost:3000/',
				changeOrigin: true
			}
		}
	},
	root: `${ROOT}/client`,
	resolve: {
		alias: [
			{ find: '@app', replacement: `${SRC}/app` },
			{ find: '@api', replacement: `${SRC}/api` },
			{ find: '@atoms', replacement: `${COMPONENTS}/atoms` },
			{ find: '@contexts', replacement: `${SRC}/contexts` },
			{ find: '@molecules', replacement: `${COMPONENTS}/molecules` },
			{ find: '@organisms', replacement: `${COMPONENTS}/organisms` },
			{ find: '@pages', replacement: `${COMPONENTS}/pages` },
			{ find: '@routes', replacement: `${SRC}/routes` },
			{ find: '@shell', replacement: `${SRC}/shell` },
			{ find: '@utils', replacement: `${SRC}/utils` }
		]
	},
	test: {
		environment: 'happy-dom',
		globals: true,
		include: [`${SRC}/**/*.test.tsx`, `${SRC}/**/*.test.ts`],
		setupFiles: [`${ROOT}/vitest.setup.ts`]
	}
})
