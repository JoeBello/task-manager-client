import { AppError, SignUp } from '@pages'

const loader = async function loader(): Promise<string> {
	console.log('SignUp loading...')
	return Promise.resolve('loaded')
}

export const PATH = '/signup'

export const route = {
	element: <SignUp />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
