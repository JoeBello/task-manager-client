import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import home from './home'
import pageNotFound from './pageNotFound'

const router = createBrowserRouter([home, pageNotFound])

const Router = function Router() {
	return <RouterProvider router={router} />
}

export default Router
