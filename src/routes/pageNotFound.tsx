import { AppError, PageNotFound } from '@pages'

export const PATH = '*'

export const route = {
	element: <PageNotFound />,
	errorElement: <AppError />,
	path: PATH
}
