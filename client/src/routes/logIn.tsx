import { AppError, LogIn } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('LogIn loading...')
	return Promise.resolve('loaded')
}

export const PATH = '/login'

export const route = {
	element: <LogIn />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
