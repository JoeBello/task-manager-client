import { defer } from 'react-router-dom'
import { mockData } from '@api'
import { AppError, Home } from '@pages'

const loader = async function loader(): Promise<unknown> {
	// TODO: loader return type
	const mockDataPromise = new Promise((resolve) => {
		return setTimeout(() => {
			resolve(mockData)
		}, 3000)
	})

	// TODO: return value type
	return defer({
		mockData: mockDataPromise
	}) as Awaited<ReturnType<typeof loader>>
}

export const PATH = '/'

export const route = {
	element: <Home />,
	errorElement: <AppError />,
	loader,
	path: PATH
}
