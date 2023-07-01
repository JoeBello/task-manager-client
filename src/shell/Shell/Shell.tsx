import Header from '../Header'
import Router from '@routes'

import './Shell.css'

export default function Shell() {
	return (
		<div className="app">
			<Header />
			<Router />
		</div>
	)
}
