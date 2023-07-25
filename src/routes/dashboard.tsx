import { AppError, Dashboard } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('Dashboard loading...')
	return Promise.resolve('loaded')
}

const dashboard = {
	element: <Dashboard />,
	errorElement: <AppError />,
	loader,
	path: '/dashboard'
}

export default dashboard
