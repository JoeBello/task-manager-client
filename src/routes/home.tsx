import { AppError, Home } from '@pages'

const loader = async function loader() {
	console.log('Home loading...')
	return true
}

const home = {
	element: <Home />,
	errorElement: <AppError />,
	loader,
	path: '/'
}

export default home
