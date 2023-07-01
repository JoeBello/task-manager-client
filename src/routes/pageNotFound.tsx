import { AppError, PageNotFound } from '@pages'

const pageNotFound = {
	path: '*',
	element: <PageNotFound />,
	errorElement: <AppError />
}

export default pageNotFound
