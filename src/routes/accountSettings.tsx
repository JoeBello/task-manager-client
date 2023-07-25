import { AppError, AccountSettings } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('App Settings loading...')
	return Promise.resolve('loaded')
}

const accountSettings = {
	element: <AccountSettings />,
	errorElement: <AppError />,
	loader,
	path: '/settings'
}

export default accountSettings
