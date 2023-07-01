import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@app', replacement: path.resolve(__dirname, 'src/app') },
			{ find: '@api', replacement: path.resolve(__dirname, 'src/api') },
			{ find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms') },
			{
				find: '@molecules',
				replacement: path.resolve(__dirname, 'src/components/molecules')
			},
			{
				find: '@organisms',
				replacement: path.resolve(__dirname, 'src/components/organisms')
			},
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/components/pages') },
			{ find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') }
		]
	}
})
