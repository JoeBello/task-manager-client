import { AppError, AccountSettings } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('App Settings loading...')
	return Promise.resolve('loaded')
}

export const PATH = '/settings'

export const route = {
	element: <AccountSettings />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
