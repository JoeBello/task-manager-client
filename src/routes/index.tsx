import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppError } from '@pages'
import Shell from '@shell'
import home from './home'
import pageNotFound from './pageNotFound'

const router = createBrowserRouter([
	{
		children: [home, pageNotFound],
		element: <Shell />,
		errorElement: <AppError />,
		path: ''
	}
])

const Router = function Router() {
	return <RouterProvider router={router} />
}

export default Router
