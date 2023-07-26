import { MockData, mockData } from '@api'
import { AppError, Home } from '@pages'

const loader = async function loader(): Promise<MockData> {
	console.log('Home loading...')
	return Promise.resolve(mockData)
}

export const PATH = '/'

export const route = {
	element: <Home />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
