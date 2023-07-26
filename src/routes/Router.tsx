import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppError } from '@pages'
import Shell from '@shell'
import { route as accountSettings } from './accountSettings'
import { route as dashboard } from './dashboard'
import { route as home } from './home'
import { route as logIn } from './logIn'
import { route as pageNotFound } from './pageNotFound'
import { route as signUp } from './signUp'

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
