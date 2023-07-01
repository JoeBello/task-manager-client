import { MockData, mockData } from '@api'
import { AppError, Home } from '@pages'

const loader = async function loader(): Promise<MockData> {
	console.log('Home loading...')
	return Promise.resolve(mockData)
}

const home = {
	element: <Home />,
	errorElement: <AppError />,
	loader,
	path: '/'
}

export default home
