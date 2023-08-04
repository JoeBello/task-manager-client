import { AppError, Dashboard } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('Dashboard loading...')
	return Promise.resolve('loaded')
}

export const PATH = '/dashboard'

export const route = {
	element: <Dashboard />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
