import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppError } from '@pages'
import Shell from '@shell'
import accountSettings from './accountSettings'
import dashboard from './dashboard'
import home from './home'
import logIn from './logIn'
import pageNotFound from './pageNotFound'
import signUp from './signUp'

const router = createBrowserRouter([
	{
		children: [home, accountSettings, dashboard, logIn, signUp, pageNotFound],
		element: <Shell />,
		errorElement: <AppError />,
		path: ''
	}
])

const Router = function Router() {
	return <RouterProvider router={router} />
}

export default Router
